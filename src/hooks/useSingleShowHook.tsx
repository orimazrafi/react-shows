import { useEffect, useState } from "react";

export const UseSingleShowHook = (id: (undefined | string)) => {
    const [show, setShow] = useState();

    useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(show =>
                setShow(formatShow(show))
            )

    }, [id])
    const formatShow = (item: any) => {
        const { id, image, name, summary } = item;
        return {
            id: id,
            pic: image ? image.original : "",
            title: name,
            description: summary
        };
    }
    return [show]
}


