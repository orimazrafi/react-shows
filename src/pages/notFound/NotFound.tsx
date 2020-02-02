import * as React from "react";
import { Link } from "react-router-dom";

export class NotFound extends React.Component {
    render() {
        return (
            <div id="notfound" data-testid="home-route">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>
                            4<span>0</span>4
                        </h1>
                    </div>
                    <h2>the page you requested could not found</h2>
                    <Link to="/">
                        <button className="btn btn-primary">Go Back</button>{" "}
                    </Link>
                </div>
            </div>
        );
    };
}

