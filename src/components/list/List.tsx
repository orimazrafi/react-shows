import React from "react";
import { Tile } from "../tile/Tile"
import { Show, StoreInterface } from "../../interfaces";

import { useSelector } from "react-redux"
import { LoadingComponent } from './../loadingComponent/LoadingComponent';

export const List = () => {
    const { text, shows, loading } = useSelector((state: StoreInterface) => state)
    const className = () => {
        return !text || shows.length === 0 ? "list__container__no__result" : "list__container"
    }
    const EmptyText = () => <h3>please press a key!</h3>
    const EmptyResults = () => <h3>please try a different query</h3>
    return (
        <div className={className()}>
            {
                !text && <EmptyText />
            }
            {
                loading ? <LoadingComponent /> :
                    text && shows.length === 0 ?
                        <EmptyResults /> :
                        shows.length > 0 &&
                        shows.map((show: Show) => (
                            <Tile show={show} key={show.id} />
                        ))}
        </div>
    )
}