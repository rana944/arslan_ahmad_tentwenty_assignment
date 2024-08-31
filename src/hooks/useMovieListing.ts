import { useState } from "react"
import { fetchUpcomingMovies } from "services/MovieApis";

const useUpcomingMovieListing = (): UpcomingMovieListingHook => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(2);
    const [data, setData] = useState<IMovie[]>([]);
    const [fetching, setFetching] = useState(false);

    const fetchData = async () => {
        setFetching(true);
        try {
            const res = await fetchUpcomingMovies(page);
            if (res.status == 200 && res.data) {
                if (res.data.results) {
                    setPage(res.data.page + 1);
                    setTotalPages(res.data.total_pages);
                    if (!data.length) {
                        setData([...res.data.results]);
                    } else {
                        setData(prev => ([...prev, ...res.data.results]))
                    }
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
        page,
        fetching,
        totalPages,
        fetchData,
    }
}

export default useUpcomingMovieListing;