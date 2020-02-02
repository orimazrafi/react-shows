import { useEffect, useState } from "react";
import { Show } from "../interfaces"




function formatRawShows(shows: any): Show[] {
    return shows.map((item: any) => {
        const { score, show } = item;

        return {
            id: show.id,
            pic: show.image ? show.image.medium : "",
            title: show.name,
            score,
            description: show.summary
        };
    });
}
export const useShows = (text: string) => {
    const [shows, setShows] = useState<Show[] | []>([]);
    useEffect(() => {
        console.log('shows')
        fetch(`http://api.tvmaze.com/search/shows?q=${text}`)
            .then(response => response.json())
            .then(shows => {

                setShows(formatRawShows(shows))
            }

            );
    }, [text])
    return { shows }
}