import React from "react";
import { useSelector } from 'react-redux';
import { LoadingComponent } from './../loadingComponent/LoadingComponent';
import { StoreInterface, Cast } from "../../interfaces";
export const ShowCast = () => {
    const { showCast, loadingCastOrSeason } = useSelector((state: StoreInterface) => state.shows)
    const Unaviable = () => <h3 className="show__cast__unaviable">currentlly unaviable</h3>

    return (
        <div className="show__cast__container">
            {loadingCastOrSeason ?
                <LoadingComponent loading={loadingCastOrSeason} />
                :
                showCast && showCast.length > 0 ?
                    showCast.map((s: Cast) => (
                        <div key={s.person.id} className="show__cast">
                            {s.person.image && s.person.image.medium &&
                                <div className="">
                                    <h5 className="cast__person__name">{s.person.name}</h5>
                                    <img src={s.person.image.medium} alt="person" />
                                </div>
                            }
                        </div>
                    )
                    )
                    : <Unaviable />
            }
        </div>)
}