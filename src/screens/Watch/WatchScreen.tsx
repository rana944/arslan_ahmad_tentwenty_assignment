import React, { useEffect } from "react";
import CustomText from "components/CustomText";
import MainContainer from "containers/MainContainer";
import useUpcomingMovieListing from "hooks/useMovieListing";
import { FlashList } from "@shopify/flash-list";
import MovieCard from "components/MovieCard";
import ApiUrls from "services/ApiUrls";
import Spacer from "components/Spacer";
import { ActivityIndicator, View } from "react-native";
import Colors from "theme/Colors";
import styles from "./WatchScreenStyles";
import Icons from "assets/icons";
import Row from "components/Row";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "utils/enums";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WatchScreen = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const {data, fetching, page, totalPages, fetchData} = useUpcomingMovieListing();

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }: { item: IMovie }) => {
        return (
            <MovieCard
                uri={`${ApiUrls.IMAGE_URL}${item.backdrop_path}`}
                title={item.title || ""}
                onPress={() => navigation.navigate(ScreenNames.MOVIE_DETAIL, { movie: item })}
            />
        )
    };

    const onEndReached = () => {
        if (!fetching && page < totalPages) {
            fetchData();
        }
    }

    const HeaderComponent = () => {
        return (
            <Row style={styles.searchBar}>
                <CustomText fontVariant="medium" size="heading5">Watch</CustomText>
                <Icons.SearchIcon onPress={() => navigation.navigate(ScreenNames.MOVIE_SEARCH, { movies: data })} />
            </Row>
        )
    }


    return (
        <MainContainer safeArea isLoading={fetching && !data.length} hideViewOnLoading={false} style={[styles.mainContainer, { paddingBottom: insets.bottom + 10 }]}>
            <HeaderComponent />
            <FlashList
                data={data}
                renderItem={renderItem}
                estimatedItemSize={180}
                onEndReachedThreshold={0.2}
                stickyHeaderHiddenOnScroll={false}
                onEndReached={onEndReached}    
                ItemSeparatorComponent={Spacer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ListFooterComponent={fetching ? <ActivityIndicator size={"small"} /> : null}
            />
        </MainContainer>
    );
}

export default WatchScreen;