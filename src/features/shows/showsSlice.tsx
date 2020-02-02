import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../redux/store";

const shows = createSlice({
    name: "shows",
    initialState: {
        loading: false,
        loadingCastOrSeason: false,
        shows: [],
        show: {},
        showSeason: [{}],
        showCast: {},
        text: "",
    },
    reducers: {
        handleChange: (state, action) => {
            state.text = action.payload;
        },
        handleLoading: (state) => {
            state.loading = true;
        },
        handleCastOrSeasonLoading: (state) => {
            state.loadingCastOrSeason = true
        },
        handleShows: (state, action) => {

            state.shows = action.payload;
            state.loading = false;
        },
        handleShow: (state, action) => {
            state.show = action.payload;
            state.loading = false;
        },
        handleCast: (state, action) => {
            state.showCast = action.payload;
            state.loadingCastOrSeason = false;
        },
        handleSeason: (state, action) => {
            state.showSeason = action.payload;
            state.loadingCastOrSeason = false;
        },
    }
})

export const {
    handleChange,
    handleLoading,
    handleShows,
    handleShow,
    handleCastOrSeasonLoading,
    handleCast,
    handleSeason
} = shows.actions;
export default shows.reducer

export const handleShowsRedux = (text: string
) => async (dispatch: AppDispatch) => {
    dispatch(handleChange(text))
    dispatch(handleLoading())
    fetch(`http://api.tvmaze.com/search/shows?q=${text}`)
        .then(res => res.json())
        .then(res => {
            const shows = formatRawShows(res);
            dispatch(handleShows(shows))
        })
}
export const handleShowByIdRedux = (id: string | undefined
) => async (dispatch: AppDispatch) => {
    dispatch(handleLoading());
    fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(res => {
            const show = formatShow(res)
            dispatch(handleShow(show))
        })
}


export const handleCastAction = (id: string | undefined
) => async (dispatch: AppDispatch) => {
    dispatch(handleCastOrSeasonLoading())
    fetch(`http://api.tvmaze.com/shows/${id}/cast`)
        .then(res => res.json())
        .then(res => {
            dispatch(handleCast(res))
        })
}
export const handleSeasonAction = (id: string | undefined
) => async (dispatch: AppDispatch) => {
    dispatch(handleCastOrSeasonLoading());
    fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
        .then(res => res.json())
        .then(res => {
            dispatch(handleSeason(res))
        })
}

function formatRawShows(shows: any) {
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

const formatShow = (item: any) => {
    const { id, image, name, summary } = item;
    return {
        id: id,
        pic: image ? image.original : "",
        title: name,
        description: summary
    };
}