import { ReactNode } from "react";
import { TouchableOpacityProps, ViewStyle, TextStyle } from "react-native";

declare global {
    interface TextComponentProps {
        children: string;
        style?: TextStyle;
        fontVariant: "bold" | "medium" | "regular" | "semiBold";
        size: "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6";
    }

    interface ButtonComponentProps extends TouchableOpacityProps {
        title: string;
        style?: ViewStyle;
        onPress: () => void;
        icon?: () => ReactNode;
        type: 'filled' | 'outlined';
        titleStyle?: TextStyle;
    }

    interface MovieCardComponentProps extends TouchableOpacityProps {
        uri: string;
        title: string;
        style?: ViewStyle;
        onPress: () => void;
    }

    interface MovieSearchComponentProps extends extends TouchableOpacityProps {
        title: string;
        genre: string;
        style?: ViewStyle;
    }

    interface SpacerComponentProps extends ViewStyle {
        width?: number;
        height?: number;
    }

    interface MainContainerProps extends ViewStyle {
        style?: ViewStyle;
        safeArea?: boolean;
        isLoading: boolean;
        children: ReactNode;
        hideViewOnLoading: boolean;
    }

    interface IMovie {
        adult: boolean,
        backdrop_path: string;
        genre_ids: Array<number>,
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

    interface UpcomingMovieListingHook {
        page: number;
        data: IMovie[];
        fetching: boolean;
        totalPages: number;
        fetchData: () => void;
    }

    interface RowComponentProps {
        style?: ViewStyle;
        children: ReactNode;
    }

    interface IMovieVideo {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
    }

    interface MovieVideoHook {
        fetching: boolean;
        data: IMovieVideo[];
        showFullVideo: boolean;
        fetchData: (movieID: number) => void;
        setShowFullVideo: (val: boolean) => void;
    }

    interface IMovieDetail {
        title: string;
        adult: boolean;
        budget: number;
        overview: string;
        genres: Array<{ id: number, name: string }>;
    }

    interface MovieDetailHook {
        data?: IMovieDetail;
        fetchData: (movieID: number) => void;
    }
}

export { }