import * as React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../helpers/show"

export const Navbar = () => {
    return (
        <div className="navbar" data-testid="navbar">
            <div className="navbar__item__logo"><Link to={"/"} >
                <img src={logo} alt="logo" height="30" />
            </Link>
            </div>
        </div>
    );
}
