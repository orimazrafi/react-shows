import { useEffect, useState } from "react";

export const UseSeasonShowHook = (id: (undefined | string), name: string) => {
    const [show, setShow] = useState();

    useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/${id}/${name}`)
            .then(response => response.json())
            .then(show =>
                setShow(show)
            )

    }, [id, name])

    return [show]
}


