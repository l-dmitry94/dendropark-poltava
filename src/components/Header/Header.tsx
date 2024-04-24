import Container from "components/Container";
import Logo from "components/Logo";
import LangSelect from "./LangSelect";
import BurgerMenu from "./BurgerMenu";
import scss from "./Header.module.scss";

const Header = () => {
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.headerWrapper}>
                    <Logo />

                    <div className={scss.wrapper}>
                        <LangSelect />
                        <BurgerMenu />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
