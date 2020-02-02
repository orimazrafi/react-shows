import * as React from "react";

import { Show } from "./../../helpers/show"
import { Tile } from "../tile/Tile";



export class List extends React.Component<any> {
    render() {

        return (
            <div role="list" data-testid="list">
                {this.props.shows.length > 0 && (
                    <div className="list-container">
                        {this.props.shows.map((show: Show) => (
                            <Tile
                                key={show.id}
                                id={show.id}
                                title={show.title}
                                pic={show.pic}
                                score={show.score}
                                description={show.description}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

};

