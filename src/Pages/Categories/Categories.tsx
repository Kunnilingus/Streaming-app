import { FC } from "react";
import "./categories.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import starfield from "../../assets/CategoriesImg/Starfield_2022.png";
import MW3 from "../../assets/CategoriesImg/CODmw3.jpg";
import SP2 from "../../assets/CategoriesImg/SP2.png";
import AW2 from "../../assets/CategoriesImg/AlanWake2.jpg";
import PhantomLiberty from "../../assets/CategoriesImg/PhantonLiberty.jpg";
import Payday3 from "../../assets/CategoriesImg/Payday_3.jpg";
import Mirage from "../../assets/CategoriesImg/Assassins_Creed_Mirage.jpeg";
import AloneInTheDark from "../../assets/CategoriesImg/Alone_in_the_dark.jpg";
import LOTF from "../../assets/CategoriesImg/lordsofthefallen.jpg";
import Dota2 from "../../assets/CategoriesImg/Dota_2.jpg";
import Player from "../../components/Player/Player";

const Categories: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <div
      className={
        isDesktop
          ? "Categories"
          : isTablet
          ? "Categories__Tablet"
          : isMobile
          ? "Categories__Mobile"
          : ""
      }
    >
      <MediaQuery minWidth={1440}>
        <SideBar location={location.pathname} />
      </MediaQuery>
      <MediaQuery minWidth={1440}>
        <Header />
      </MediaQuery>
      <div>
        <MediaQuery minWidth={768} maxWidth={1439}>
          <HeaderMedia location={location.pathname} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <HeaderMobile location={location.pathname} />
        </MediaQuery>
      </div>
      <div
        className={
          isDesktop ? "Categories__content" : "Categories__content-media"
        }
      >
        <div
          className={
            isDesktop ? "Categories__popular" : "Categories__popular-media"
          }
        >
          <h2>Популярные игры</h2>
          <div
            className={
              isDesktop
                ? "Categories__popular-gamelist"
                : "Categories__popular-gamelist-media"
            }
          >
            <img
              src={starfield}
              alt="starfield"
              onClick={() => navigate("/categories/starfield")}
            />
            <img
              src={MW3}
              alt="mw3"
              onClick={() => navigate("/categories/codmw3")}
            />
            <img
              src={SP2}
              alt="sp2"
              onClick={() => navigate("/categories/spider-man2")}
            />
            <img
              src={AW2}
              alt="aw2"
              onClick={() => navigate("/categories/alan-wake2")}
            />
            <img
              src={PhantomLiberty}
              alt="pl"
              onClick={() => navigate("/categories/phantom-liberty")}
            />
            <img
              src={Payday3}
              alt="payday3"
              onClick={() => navigate("/categories/payday3")}
            />
            <img
              src={Mirage}
              alt="mirage"
              onClick={() => navigate("/categories/mirage")}
            />
            <img
              src={AloneInTheDark}
              alt="AITD"
              onClick={() => navigate("/categories/aloneinthedark")}
            />
            <img
              src={LOTF}
              alt="LOTF"
              onClick={() => navigate("/categories/lordsofthefallen")}
            />
            <img
              src={Dota2}
              alt="dota2"
              onClick={() => navigate("/categories/dota2")}
            />
          </div>
        </div>
        <div
          className={
            isDesktop
              ? "Categories__translations"
              : "Categories__translations-media"
          }
        >
          <h2>Топ трансляции</h2>
          <div
            className={
              isDesktop
                ? "Categories__translations-list"
                : "Categories__translations-list-media"
            }
          >
            <Player width={260} height={200} />
            <Player width={260} height={200} />
            <Player width={260} height={200} />
            <Player width={260} height={200} />
            <Player width={260} height={200} />
          </div>
        </div>
        <div
          className={
            isDesktop
              ? "Categories__recomendations"
              : "Categories__recomendations-media"
          }
        >
          <h2>Рекомендованные вам трансляции</h2>
          <div
            className={
              isDesktop
                ? "Categories__recomendations-list"
                : "Categories__recomendations-list-media"
            }
          >
            <Player width={260} height={200} />
            <Player width={260} height={200} />
            <Player width={260} height={200} />
            <Player width={260} height={200} />
            <Player width={260} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
