import { FC } from "react";
import Menu from "../Menu";
import Phone from "../Phone";
import scss from "./NavBar.module.scss";
import { INavBar } from "./types";

const NavBar: FC<INavBar> = ({ closeMenu }) => {
    return (
        <nav className={scss.navbar}>
            <Menu closeMenu={closeMenu} />
            <Phone />
        </nav>
    );
};

export default NavBar;
