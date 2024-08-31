import { useState } from "react"
import { fetchMovieVideos } from "services/MovieApis";

const useFetchMovieVideos = (): MovieVideoHook => {
    const [data, setData] = useState<IMovieVideo[]>([]);
    const [fetching, setFetching] = useState(false);
    const [showFullVideo, setShowFullVideo] = useState(false);

    const fetchData = async (movieID: number) => {
        setFetching(true);
        try {
            const res = await fetchMovieVideos(movieID);
            if (res.status == 200 && res.data) {
                if (res.data.results) {
                    setData([...res.data.results]);
                }
            }
        } catch (e) {
            console.log("Error", e?.toString())
        } finally {
            setFetching(false);
        }
    }

    return {
        data,
        fetching,
        fetchData,
        showFullVideo,
        setShowFullVideo,
    }
}

export default useFetchMovieVideos;