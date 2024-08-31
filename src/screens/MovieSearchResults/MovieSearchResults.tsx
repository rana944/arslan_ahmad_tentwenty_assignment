import React, { useState } from "react";
import MainContainer from "containers/MainContainer";
import { Pressable, TextInput, View } from "react-native";
import styles from "./MovieSearchResultStyles";
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

const MovieSearchResultScreen = () => {
    const { params } = useRoute();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const movies = params?.movies as IMovie[] || [];

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

    return (
        <MainContainer safeArea isLoading={false} hideViewOnLoading={false} style={[styles.container, { paddingBottom: insets.bottom + 30 }]}>
            <Spacer height={insets.top ? 2 : 20} />
            <Pressable onPress={navigation.goBack}>
                <Row style={styles.header} onPress={navigation.goBack}>
                    <Icons.BackDarkIcon />
                    <Spacer width={10} />
                    <CustomText fontVariant="regular" size="heading5">{`${movies.length} Results Found`}</CustomText>
                </Row>
            </Pressable>
            <Spacer />
            <FlashList
                data={movies}
                renderItem={renderItem}
                estimatedItemSize={180}
                ItemSeparatorComponent={Spacer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            />
        </MainContainer>
    );
}

export default MovieSearchResultScreen;