import React, { useEffect, useMemo, useRef } from "react";
import MainContainer from "containers/MainContainer";
import { ImageBackground, Platform, Pressable, ScrollView, StyleSheet, View } from "react-native";
import styles from "./MovieDetailStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import useFetchMovieVideos from "hooks/useFetchMovieVideos";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";
import ApiUrls from "services/ApiUrls";
import CustomText from "components/CustomText";
import CustomButton from "components/CustomButton";
import Spacer from "components/Spacer";
import Icons from "assets/icons";
import Metrics from "theme/Metrics";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useFetchMovieDetails from "hooks/useFetchMovieDetails";
import { ScreenNames } from "utils/enums";

const isAndroid = Platform.OS === "android";

const genreColors = ["#15D2BC", "#E26CA5", "#564CA3", "#CD9D0F"];

const MovieDetail = () => {

    const { params } = useRoute();
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const movie = params && params?.movie as IMovie

    const { data: movieDetails, fetchData: fetchMovieDetails } = useFetchMovieDetails();
    const { data, fetching, showFullVideo, setShowFullVideo, fetchData, } = useFetchMovieVideos();

    useEffect(() => {
        if (movie && movie.id) {
            fetchData(movie.id);
            fetchMovieDetails(movie.id);
        }
    }, []);

    const trailerVideo = (data || []).find(res => res.type == "Trailer");

    const onWatchTrailer = () => {
        setShowFullVideo(true);
    }

    const genres = useMemo(() => {
        if (movieDetails?.genres) {
            return movieDetails.genres.map(genre => ({ ...genre, color: genreColors[Math.floor(Math.random() * 3)] }))
        }

        return [];
    }, [movieDetails, movieDetails?.genres]);

    const navigateToBookTicket = () => {
        navigation.navigate(ScreenNames.MOVIE_BOOK_TICKET, { movieDetails });
    }

    return (
        <MainContainer safeArea={false} isLoading={fetching} hideViewOnLoading={false} style={styles.mainContainer}>
            {!showFullVideo && (
                <ImageBackground
                    source={{
                        uri: `${ApiUrls.IMAGE_URL}${movie?.poster_path}`
                    }}
                    imageStyle={styles.movieImage}
                    style={styles.imageContentStyle}
                >
                    <Pressable style={[styles.header, { top: insets.top || 20 }]} onPress={navigation.goBack}>
                        <Icons.BackIcon />
                        <Spacer width={10} />
                        <CustomText fontVariant="regular" size="heading5" style={styles.backButtonText}>Watch</CustomText>
                    </Pressable>
                    <Spacer height={10} />
                    <CustomText fontVariant="medium" size="heading4" style={styles.releaseDate}>{`In Theaters ${movie?.release_date}`}</CustomText>
                    <Spacer />
                    <CustomButton title={"Get Tickets"} type={"filled"} onPress={navigateToBookTicket} />
                    <Spacer height={10} />
                    <CustomButton title="Watch Trailer" type="outlined" onPress={onWatchTrailer} icon={() => <Icons.PlayIcon style={styles.iconStyle} />} />
                    <Spacer />
                </ImageBackground>
            )}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <CustomText fontVariant={"medium"} size={"heading4"}>Genres</CustomText>
                <Spacer height={10} />
                <View style={styles.genreWrapper}>
                    {genres.map(genre => (
                        <CustomButton title={genre.name} type="filled" onPress={() => { }} style={[styles.genreButton, { backgroundColor: genre.color, borderColor: genre.color }]} titleStyle={styles.genreButtonTitle} />
                    ))}
                </View>
                <Spacer height={15} />
                <View style={styles.divider} />
                <Spacer height={10} />
                <CustomText fontVariant={"medium"} size={"heading4"}>Overview</CustomText>
                <Spacer height={8} />
                <CustomText fontVariant="regular" size="heading2" style={styles.overview}>
                    {movieDetails?.overview || ""}
                </CustomText>
            </ScrollView>
            {
                showFullVideo && trailerVideo?.key && (
                    <View style={styles.webViewStyle}>
                        <CustomButton title={"Done"} onPress={() => setShowFullVideo(false)} type={"filled"} style={[styles.doneButton, { bottom: insets.bottom + 120 }]} />
                        <YoutubePlayer
                            play={true}
                            videoId={trailerVideo?.key}
                            width={Metrics.screenWidth}
                            height={Metrics.screenHeight}
                            baseUrlOverride={isAndroid ? `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&fs=1&controls=1` : undefined}
                            onChangeState={(playerState) => {
                                playerState === PLAYER_STATES.ENDED && setShowFullVideo(false);
                            }}
                        />
                    </View>
                )
            }
        </MainContainer>
    );
}

export default MovieDetail;