import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>All Funkos</Link>
            <Link to={"/dataPage/Games"}>Games</Link>
            <Link to={"/dataPage/Television"}>Television</Link>
            <Link to={"/dataPage/Animation"}>Animation</Link>
        </nav>
    )
} export default Nav;