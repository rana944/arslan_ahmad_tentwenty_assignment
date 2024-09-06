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
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

const MovieSearchScreen = () => {
    const { params } = useRoute();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");
    const movies = params?.movies as IMovie[] || [];

    const [headerHiddenValue, headerVisibleValue] = [insets.top == 0 ? -100 : -insets.top, insets.top == 0 ? 0 : insets.top]

    const difference = useSharedValue(150);

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

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText.toLocaleLowerCase()));

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event, context) => {
            if (context.startOffset < event.contentOffset.y) {
                difference.value = 0;
            } else if (context.startOffset > event.contentOffset.y) {
                difference.value = 150;
            }
        },
        onBeginDrag: (event, context) => {
            context.startOffset = event.contentOffset.y;
        },
        onEndDrag: (e, context) => {
            if (context.startOffset > e.contentOffset.y) {
                difference.value = 150;
            } else if (context.startOffset < e.contentOffset.y) {
                difference.value = 0;
            }
        }
    });

    const animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withTiming(interpolate(difference.value, [0, 150], [headerHiddenValue, headerVisibleValue] /* [-topInsets * 2, topInsets] */)),
                }
            ],
        }
    });

    const animatedFlatListStyle = useAnimatedStyle(() => {
        return {
            top: withTiming(interpolate(difference.value, [0, 150], [0, 80]))
        }
    });

    return (
        <MainContainer safeArea isLoading={false} hideViewOnLoading={false} style={[styles.container, { paddingBottom: insets.bottom + 30 }]}>
            <Animated.View style={[styles.headerOuterContainer, animatedHeaderStyle]}>
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
            <AnimatedFlashList
                data={filteredMovies}
                renderItem={renderItem}
                style={animatedFlatListStyle}
                estimatedItemSize={180}
                onScroll={scrollHandler}
                bounces={false}
                bouncesZoom={false}
                onEndReachedThreshold={0.2}
                ItemSeparatorComponent={Spacer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            />
        </MainContainer>
    );
}

export default MovieSearchScreen;
