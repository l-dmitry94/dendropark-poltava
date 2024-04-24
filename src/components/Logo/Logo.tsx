import { logo_1x, logo_2x } from "assets/images/logo";
import scss from "./Logo.module.scss";

const Logo = () => {
    return (
        <a href="/dendropark-poltava" className={scss.logo}>
            <img
                src={logo_1x}
                srcSet={`${logo_1x} 1x, ${logo_2x} 2x`}
                alt="Полтавський міський парк"
            />
            <p className={scss.text}>
                Полтавський <span className={scss.textColor}>міський</span> парк
            </p>
        </a>
    );
};

export default Logo;
