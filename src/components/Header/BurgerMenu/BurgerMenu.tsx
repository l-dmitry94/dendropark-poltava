import { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar";
import { sprite } from "assets/icons";
import scss from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLInputElement>(null);

    const toggleMenuOpen = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpenMenu(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={menuRef} className={scss.burger}>
            <button onClick={toggleMenuOpen} className={scss.button}>
                <svg className={scss.icon}>
                    <use href={`${sprite}#icon-burger`}></use>
                </svg>
            </button>

            {isOpenMenu && <NavBar closeMenu={toggleMenuOpen} />}
        </div>
    );
};

export default BurgerMenu;
