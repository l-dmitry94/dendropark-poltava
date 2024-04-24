import { NavLink } from "react-router-dom";
import menu from "./menu.json";
import scss from "./Menu.module.scss";
import { FC } from "react";
import { INavBar } from "../NavBar/types";

const Menu: FC<INavBar> = ({ closeMenu }) => {
    return (
        <ul className={scss.list}>
            {menu.map(({ to, item }) => (
                <li key={item} onClick={closeMenu}>
                    <NavLink to={to} className={scss.link}>
                        {item}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
