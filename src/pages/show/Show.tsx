import React from "react";

import { useParams } from "react-router-dom";


import { UseSingleShowHook } from "../../hooks/useSingleShowHook";
import { UseCardHandleHook } from "../../hooks/useCardHandleHook";


// import { ShowSeason } from './../showSeason/ShowSeason';
// import { ShowCast } from './../showCast/ShowCast';
import { Switch, Route, Link } from "react-router-dom";

export const Show = () => {
    const { id } = useParams();
    const [show] = UseSingleShowHook(id);
    const [handlePic, convertString] = UseCardHandleHook()

    // const RouteConfigurations = () => (
    //     <Switch>
    //         <Route exact path="/show/:id/seasons">
    //             <ShowSeason />
    //         </Route>
    //         <Route exact path="/show/:id/cast">
    //             <ShowCast />
    //         </Route>
    //     </Switch>
    // )
    const LinksContainer = () => (
        <div className="single__show__links__container">
            <Link to={`/show/${id}/cast`}> <div className="cast__link">
                Cast  </div> </Link>
            <Link to={`/show/${id}/seasons`}><div className="cast__link">
                Seasons  </div></Link>
        </div>)


    return (
        <div>
            {show &&
                <>
                    <div className="single__show__card">
                        <div className="img">
                            <img src={handlePic(show.pic)} alt="movie"
                                width="200"
                                height="300"
                            />
                        </div>
                        <div className="text-container">
                            <div className="title">
                                {show.title}
                            </div>
                            <div className="description__container">
                                <div className="description">
                                    {convertString(show.description)}
                                </div>

                            </div>
                        </div>
                    </div>
                    <LinksContainer />
                    {/* <RouteConfigurations /> */}
                </>
            }
        </div>)
}