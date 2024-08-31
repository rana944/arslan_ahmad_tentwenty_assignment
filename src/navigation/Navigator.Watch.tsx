import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BookTicket from "screens/BookTicket";
import MovieDetail from "screens/MovieDetail";
import MovieSearchScreen from "screens/MovieSearch/MovieSearch";
import MovieSearchResultScreen from "screens/MovieSearchResults/MovieSearchResults";
import WatchScreen from "screens/Watch";
import { ScreenNames } from "utils/enums";

const NativeStack = createNativeStackNavigator();

const WatchNavigator = () => {
    return (
        <NativeStack.Navigator screenOptions={{ headerShown: false, header: undefined }}>
            <NativeStack.Screen name={ScreenNames.WATCH_NAVIGATOR} component={WatchScreen} />
            <NativeStack.Screen name={ScreenNames.MOVIE_DETAIL} component={MovieDetail} />
            <NativeStack.Screen name={ScreenNames.MOVIE_SEARCH} component={MovieSearchScreen} />
            <NativeStack.Screen name={ScreenNames.MOVIE_SEARCH_RESULT} component={MovieSearchResultScreen} />
            <NativeStack.Screen name={ScreenNames.MOVIE_BOOK_TICKET} component={BookTicket} />
        </NativeStack.Navigator>
    )
}

export default WatchNavigator;