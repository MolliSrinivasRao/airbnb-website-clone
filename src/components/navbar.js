import Search from "./search";
import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbWorld } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import '../styles/navbar.scss';

function Navbar() {
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img src="https://miro.medium.com/v2/resize:fit:1358/1*hm4QNpObAKN4CN_Rws4TLA.png" className="logo"></img>
            </div>

            <Search filters={true} />
            <div className="nav-actions">
                <p className="nav-home">Airbnb your home</p>
                    <TbWorld  className="nav-action-icons"/>
                <div className="nav-user">
                    <GiHamburgerMenu className="nav-action-icons"/>
                    <CgProfile className="nav-action-icons"/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;