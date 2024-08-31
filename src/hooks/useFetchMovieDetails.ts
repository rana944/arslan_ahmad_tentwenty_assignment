import { useState } from "react"
import { fetchMovieDetails } from "services/MovieApis";

const useFetchMovieDetails = (): MovieDetailHook => {
    const [data, setData] = useState<IMovieDetail>();

    const fetchData = async (movieID: number) => {
        try {
            const res = await fetchMovieDetails(movieID);
            if (res.status == 200 && res.data) {
                if (res.data) {
                    setData(res.data);
                }
            }
        } catch (e) {
            console.log("Error", e?.toString())
        } finally { }
    }

    return {
        data,
        fetchData,
    }
}

export default useFetchMovieDetails;