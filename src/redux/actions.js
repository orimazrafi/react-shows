
export const handleShowsRedux = (text) => {
    return (dispatch) => {
        dispatch({
            type: "ON_CHANGE",
            payload: text
        })
        dispatch({
            type: "LOADING_SHOW",
        })

        const baseUrl = `http://api.tvmaze.com/search/shows?q=${text}`
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => {
                const shows = formatRawShows(res);
                dispatch({
                    type: "ON_SHOWS",
                    payload: shows
                })
            })
    }

}



export const handleShowByIdRedux = (id) => {
    return (dispatch) => {
        dispatch({
            type: "LOADING_SHOW",
        })
        const baseUrl = `http://api.tvmaze.com/shows/${id}`
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => {
                const show = formatShow(res)
                dispatch({
                    type: "ON_SHOW",
                    payload: show
                })
            })
    }
}


export const handleCast = (id) => {
    return (dispatch) => {
        dispatch({
            type: "LOADING_CAST_OR_SEASON",
        })
        const baseUrl = `http://api.tvmaze.com/shows/${id}/cast`
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => {
                const show = res
                dispatch({
                    type: "ON_CAST",
                    payload: show
                })
            })
    }

}
export const handleSeason = (id) => {
    return (dispatch) => {
        dispatch({
            type: "LOADING_CAST_OR_SEASON",
        })
        const baseUrl = `http://api.tvmaze.com/shows/${id}/seasons`
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => {
                const show = res
                dispatch({
                    type: "ON_SEASON",
                    payload: show
                })
            })
    }

}



function formatRawShows(shows) {
    return shows.map((item) => {
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

const formatShow = (item) => {
    const { id, image, name, summary } = item;
    return {
        id: id,
        pic: image ? image.original : "",
        title: name,
        description: summary
    };
}
