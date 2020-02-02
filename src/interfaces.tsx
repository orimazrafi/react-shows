export interface Show {
    id: string;
    pic: string;
    title: string;
    score: number;
    description: string;
}
export interface StoreInterface {
    shows: {
        loading: boolean,
        loadingCastOrSeason: boolean,
        shows: [],
        show: SingleShow,
        showSeason: Season[],
        showCast: Cast[],
        text: string
    }

}

export interface SingleShow {
    title: string,
    pic: string,
    description: string
}
export interface Cast {
    person: {
        id: string,
        image: {
            medium: string
        },
        name: string
    }
}
export interface Season {
    number: number,
    episodeOrder: number,
    premiereDate: string,
    endDate: string,
    network: {
        country: {
            name: string
        }
    }

}


export interface SingleShowInterface {
    pic: string,
    title: string,
    description: string
}