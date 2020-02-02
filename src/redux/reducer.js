const initialState = {
    loading: false,
    loadingCastOrSeason: false,
    shows: [],
    show: {},
    showSeason: [{}],
    showCast: {},
    text: "",

}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            return {
                ...state,
                text: action.payload,
            }

        case 'LOADING_SHOW':
            return {
                ...state,
                loading: true
            }

        case 'ON_SHOW':
            return {
                ...state,
                loading: false,
                show: action.payload,
            }

        case 'ON_SHOWS':
            return {
                ...state,
                shows: action.payload,
                loading: false
            }


        case 'LOADING_CAST_OR_SEASON':
            return {
                ...state,
                loadingCastOrSeason: true
            }

        case 'ON_CAST':
            return {
                ...state,
                loadingCastOrSeason: false,
                showCast: action.payload
            }
        case 'ON_SEASON':
            return {
                ...state,
                loadingCastOrSeason: false,
                showSeason: action.payload
            }


        default:
            return state
    }
}