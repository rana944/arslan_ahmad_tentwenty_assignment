import ApiUrls from "./ApiUrls"
import AxiosClient from "./AxiosClient"

export const fetchUpcomingMovies = async (page: number) => {
    return await AxiosClient.get(`${ApiUrls.UPCOMING}?page=${page}&language=en-US`);
}

export const fetchMovieVideos = async (movieID: number) => {
    return await AxiosClient.get(`${movieID}/${ApiUrls.VIDEOS}?language=en-US`);
}

export const fetchMovieDetails = async (movieID: number) => {
    return await AxiosClient.get(`${movieID}?language=en-US`);
}