import React from "react";
import { useSelector } from 'react-redux';
import { LoadingComponent } from './../loadingComponent/LoadingComponent';
import { StoreInterface } from "../../interfaces";

export const ShowSeason = () => {
    const { showSeason, loadingCastOrSeason } = useSelector((state: StoreInterface

    ) => state.shows)
    const { number, episodeOrder, premiereDate, endDate, network } = showSeason[0];
    console.log(showSeason)
    const SeasonDetailed = () => (
        <div className="show__season__container">
            <h5>this series has {number} {number === 1 ? `seasons` : `season`} </h5>
            {episodeOrder &&
                <h5>number of episode {episodeOrder}</h5>
            }
            <h5>premier {premiereDate} and end at {endDate}</h5>

            {network &&
                <h5 >made in {network.country.name}</h5>
            }
        </div>
    )
    return (
        <>
            {loadingCastOrSeason ?
                <LoadingComponent loading={loadingCastOrSeason} /> :
                showSeason[0] && <SeasonDetailed />
            }
        </>)
}

