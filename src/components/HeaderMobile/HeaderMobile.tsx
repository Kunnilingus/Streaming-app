import { FC } from "react";
import "./headerMobile.css";
import poisk from "../../assets/headerImg/poisk.png";
import home from "../../assets/sideBarImg/home.png";
import account from "../../assets/sideBarImg/account.png";
import translation from "../../assets/sideBarImg/translation.png";
import categories from "../../assets/sideBarImg/categories.png";
import subs from "../../assets/sideBarImg/subs.png";
import statistics from "../../assets/sideBarImg/statistics.png";
import about from "../../assets/sideBarImg/about.png";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  location: string;
}
const HeaderMobile: FC<SideBarProps> = ({ location }) => {
  const navigate = useNavigate();
  return (
    <div className="headerMobile">
      <form>
        <input className="header__input-m" type="text" />
        <button className="header__btn">
          <img src={poisk} alt="poisk" />
        </button>
      </form>
      <div className="sideBarMobile__content">
        <div
          onClick={() => navigate("/home")}
          className={
            location === "/home" ? "homeMobile choosenMobile" : "homeMobile"
          }
        >
          <img src={home} alt="home" />
        </div>
        <div
          onClick={() => navigate("/account")}
          className={
            location === "/account"
              ? "accountMobile choosenMobile"
              : "accountMobile"
          }
        >
          <img src={account} alt="account" />
        </div>
        <div
          onClick={() => navigate("/translation")}
          className={
            location === "/translation"
              ? "translationMobile choosenMobile"
              : "translationMobile "
          }
        >
          <img src={translation} alt="translation" />
        </div>
        <div
          onClick={() => navigate("/categories")}
          className={
            location === "/categories"
              ? "categoriesMobile choosenMobile"
              : "categoriesMobile"
          }
        >
          <img src={categories} alt="categoriesMedia" />
        </div>
        <div
          onClick={() => navigate("/subs")}
          className={
            location === "/subs" ? "subsMobile choosenMobile" : "subsMobile"
          }
        >
          <img src={subs} alt="subs" />
        </div>
        <div
          onClick={() => navigate("/stats")}
          className={
            location === "/stats" ? "statsMobile choosenMobile" : "statsMobile"
          }
        >
          <img src={statistics} alt="stats" />
        </div>
        <div
          onClick={() => navigate("/about")}
          className={
            location === "/about" ? "aboutMobile choosenMobile" : "aboutMobile"
          }
        >
          <img src={about} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
