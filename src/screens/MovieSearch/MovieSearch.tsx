import React, { useState } from "react";
import MainContainer from "containers/MainContainer";
import { TextInput, useAnimatedValue, View } from "react-native";
import styles from "./MovieSearchStyles";
import Icons from "assets/icons";
import Row from "components/Row";
import { useNavigation, useRoute } from "@react-navigation/native";
import Spacer from "components/Spacer";
import Colors from "theme/Colors";
import { FlashList } from "@shopify/flash-list";
import FastImage from "react-native-fast-image";
import CustomText from "components/CustomText";
import ApiUrls from "services/ApiUrls";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenNames } from "utils/enums";
import Animated, { clamp, interpolate, useAnimatedReaction, useAnimatedStyle, useDerivedValue, useSharedValue, withClamp, withSpring, withTiming } from "react-native-reanimated";

const MovieSearchScreen = () => {
    const { params } = useRoute();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");
    const movies = params?.movies as IMovie[] || [];

    const scrollY = useSharedValue(0);
    const startScroll = useSharedValue(0);

    const onChangeText = (text: string) => {
        setSearchText(text);
    }

    const renderItem = ({ item }: { item: IMovie }) => {
        return (
            <Row>
                <FastImage
                    source={{
                        priority: FastImage.priority.high,
                        uri: `${ApiUrls.IMAGE_URL}${item.backdrop_path}`,
                        headers: { Authorization: `api_key=${ApiUrls.API_KEY}` },
                    }}
                    style={styles.movieImage}
                />
                <Spacer />
                <View style={styles.movieTitleContainer}>
                    <CustomText fontVariant="regular" size="heading4">
                        {item.title}
                    </CustomText>
                </View>
                <Icons.OptionsIcon />
            </Row>
        );
    }

    const headerAnimatedStyle = useAnimatedStyle(() => {
        const difference = clamp(Math.abs(scrollY.value) - Math.abs(startScroll.value), 0, 150);
        return {
            top: insets.top,
            transform: [
                {
                    translateY: withTiming(-difference, { duration: 500 }),
                }
            ],
        }
    }, [scrollY.value, startScroll.value]);

    const headerSpaceAnimatedStyle = useAnimatedStyle(() => {
        const difference = clamp(Math.abs(scrollY.value) - Math.abs(startScroll.value), 0, 150);
        return {
            height: withTiming(interpolate(difference, [0, 150], [100, 0]), { duration: 500 }),
        }
    }, [scrollY.value, startScroll.value])

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText.toLocaleLowerCase()));

    return (
        <MainContainer safeArea isLoading={false} hideViewOnLoading={false} style={[styles.container, { paddingBottom: insets.bottom + 30 }]}>
            <Animated.View style={[styles.headerOuterContainer, headerAnimatedStyle]}>
                <Spacer height={10} />
                <Row style={styles.searchBar}>
                    <Row style={styles.searchInputContainer}>
                        <Icons.SearchIcon />
                        <Spacer width={10} />
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={onChangeText}
                            placeholder="TV shows, movies and more"
                            placeholderTextColor={Colors.searchPlaceHolder}
                            onSubmitEditing={() => navigation.navigate(ScreenNames.MOVIE_SEARCH_RESULT, { movies: filteredMovies })}
                        />
                    </Row>
                    <Icons.CloseIcon onPress={navigation.goBack} />
                </Row>
            </Animated.View>
            <Animated.View style={headerSpaceAnimatedStyle} />
            <FlashList
                data={filteredMovies}
                renderItem={renderItem}
                estimatedItemSize={180}
                onScroll={e => scrollY.value = Math.abs(e.nativeEvent.contentOffset.y)}
                onScrollBeginDrag={e => startScroll.value = Math.abs(e.nativeEvent.contentOffset.y)}
                onEndReachedThreshold={0.2}
                ItemSeparatorComponent={Spacer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            />
        </MainContainer>
    );
}

export default MovieSearchScreen;