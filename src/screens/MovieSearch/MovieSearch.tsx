import React, { useState } from "react";
import MainContainer from "containers/MainContainer";
import { TextInput, View } from "react-native";
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

const MovieSearchScreen = () => {
    const { params } = useRoute();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");
    const movies = params?.movies as IMovie[] || [];

    const onChangeText = (text: string) => {
        setSearchText(text);
    }

    const HeaderComponent = () => {
        return (
            <Row style={styles.searchBar}>
                <Row style={styles.searchInputContainer}>
                    <Icons.SearchIcon />
                    <Spacer width={10} />
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={onChangeText}
                        placeholder="TV shows, movies and more"
                        placeholderTextColor={Colors.searchPlaceHolder}
                    />
                </Row>
                <Icons.CloseIcon onPress={navigation.goBack} />
            </Row>
        )
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

    return (
        <MainContainer safeArea isLoading={false} hideViewOnLoading={false} style={[styles.container, { paddingBottom: insets.bottom + 30 }]}>
            <Spacer height={insets.top ? 2 : 20} />
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
            <Spacer />
            <FlashList
                data={filteredMovies}
                renderItem={renderItem}
                estimatedItemSize={180}
                onEndReachedThreshold={0.2}
                ItemSeparatorComponent={Spacer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            />
        </MainContainer>
    );
}

export default MovieSearchScreen;