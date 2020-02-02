import React from "react";

import { useParams } from "react-router-dom";

import { UseCardHandleHook } from "../../hooks/useCardHandleHook";

import { ShowSeason } from '../../components/showSeason/ShowSeason';
import { ShowCast } from '../../components/showCast/ShowCast';
import { Switch, Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleShowByIdRedux, handleSeason, handleCast } from "../../redux/actions";

import { LoadingComponent } from '../../components/loadingComponent/LoadingComponent';
import { StoreInterface } from "../../interfaces";

export const Show = () => {
    const { id } = useParams();
    const disptach = useDispatch();
    const [handlePic, convertString] = UseCardHandleHook()
    const { show, loading, loadingCastOrSeason } = useSelector((state: StoreInterface) => state);
    if (!show.title && !loading) disptach(handleShowByIdRedux(id))

    const SingleShowCard = () => (
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
    )
    const RouteConfigurations = () => (
        <Switch>
            <Route exact path="/show/:id/seasons">
                <ShowSeason />
            </Route>
            <Route exact path="/show/:id/cast">
                <ShowCast />
            </Route>
        </Switch>
    )
    const LinksContainer = () => (
        <div className="single__show__links__container">
            <Link to={`/show/${id}/cast`}>
                <div className="cast__link"
                    onClick={() =>
                        disptach(handleCast(id)
                        )}>
                    Cast
                </div>
            </Link>
            <Link to={`/show/${id}/seasons`}>
                <div className="cast__link"
                    onClick={() =>
                        disptach(handleSeason(id)
                        )}
                >
                    Seasons
                </div>
            </Link>
        </div>)


    return (
        <div>
            {loading ?
                <LoadingComponent loading={loadingCastOrSeason} />
                :
                <>
                    <SingleShowCard />
                    <LinksContainer />
                    <RouteConfigurations />
                </>
            }
        </div>)
}