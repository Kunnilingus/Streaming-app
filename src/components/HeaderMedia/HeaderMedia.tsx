import { FC } from "react";
import "./headerMedia.css";
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
const HeaderMedia: FC<SideBarProps> = ({ location }) => {
  const navigate = useNavigate();
  return (
    <div className="headerMedia">
      <form>
        <input className="header__input" type="text" />
        <button className="header__btn">
          <img src={poisk} alt="poisk" />
        </button>
      </form>
      <div className="sideBarMedia__content">
        <div
          onClick={() => navigate("/home")}
          className={
            location === "/home" ? "homeMedia choosenMedia" : "homeMedia"
          }
        >
          <img src={home} alt="home" />
        </div>
        <div
          onClick={() => navigate("/account")}
          className={
            location === "/account"
              ? "accountMedia choosenMedia"
              : "accountMedia"
          }
        >
          <img src={account} alt="account" />
        </div>
        <div
          onClick={() => navigate("/translation")}
          className={
            location === "/translation"
              ? "translationMedia choosenMedia"
              : "translationMedia "
          }
        >
          <img src={translation} alt="translation" />
        </div>
        <div
          onClick={() => navigate("/categories")}
          className={
            location === "/categories"
              ? "categoriesMedia choosenMedia"
              : "categoriesMedia"
          }
        >
          <img src={categories} alt="categoriesMedia" />
        </div>
        <div
          onClick={() => navigate("/subs")}
          className={
            location === "/subs" ? "subsMedia choosenMedia" : "subsMedia"
          }
        >
          <img src={subs} alt="subs" />
        </div>
        <div
          onClick={() => navigate("/stats")}
          className={
            location === "/stats" ? "statsMedia choosenMedia" : "statsMedia"
          }
        >
          <img src={statistics} alt="stats" />
        </div>
        <div
          onClick={() => navigate("/about")}
          className={
            location === "/about" ? "aboutMedia choosenMedia" : "aboutMedia"
          }
        >
          <img src={about} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMedia;
