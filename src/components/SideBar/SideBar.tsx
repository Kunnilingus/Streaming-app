import { FC } from "react";
import "./sideBar.css";
import logo from "../../assets/sideBarImg/logo.png";
import home from "../../assets/sideBarImg/home.png";
import account from "../../assets/sideBarImg/account.png";
import translation from "../../assets/sideBarImg/translation.png";
import categories from "../../assets/sideBarImg/categories.png";
import subs from "../../assets/sideBarImg/subs.png";
import statistics from "../../assets/sideBarImg/statistics.png";
import about from "../../assets/sideBarImg/about.png";
import appStore from "../../assets/sideBarImg/appstore.png";
import googlePlay from "../../assets/sideBarImg/google_play.png";
import { useNavigate } from "react-router-dom";
 
interface SideBarProps {
  location: string;
}
const SideBar: FC<SideBarProps> = ({ location }) => {
  const navigate = useNavigate();
  return (
    <div className="sideBar">
      <img className="logo" src={logo} alt="logo" />
      <div className="sideBar__content">
        <div
          onClick={() => navigate("/home")}
          className={location === "/home" ? "home choosen" : "home"}
        >
          <img src={home} alt="home" />
        </div>
        <div
          onClick={() => navigate("/account")}
          className={location === "/account" ? "account choosen" : "account"}
        >
          <img src={account} alt="account" />
        </div>
        <div
          onClick={() => navigate("/translation")}
          className={
            location === "/translation" ? "translation choosen" : "translation "
          }
        >
          <img src={translation} alt="translation" />
        </div>
        <div
          onClick={() => navigate("/categories")}
          className={
            location === "/categories" ? "categories choosen" : "categories"
          }
        >
          <img src={categories} alt="categories" />
        </div>
        <div
          onClick={() => navigate("/subs")}
          className={location === "/subs" ? "subs choosen" : "subs"}
        >
          <img src={subs} alt="subs" />
        </div>
        <div
          onClick={() => navigate("/stats")}
          className={location === "/stats" ? "stats choosen" : "stats"}
        >
          <img src={statistics} alt="stats" />
        </div>
        <div
          onClick={() => navigate("/about")}
          className={location === "/about" ? "about choosen" : "about"}
        >
          <img src={about} alt="about" />
        </div>
      </div>
      <div className="download">
        <img src={appStore} alt="appStore" />
        <img src={googlePlay} alt="googlePlay" />
      </div>
    </div>
  );
};

export default SideBar;
