import * as React from "react";
import { Link } from "react-router-dom";
export class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light" data-testid="navbar">
                <Link to="/">
                    <h4 className="navbar-brand">React Shows</h4>
                </Link>
            </nav>
        );

    }
}
