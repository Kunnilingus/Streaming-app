import { FC } from "react";
import "./gamePage.css";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import Player from "../../components/Player/Player";
import Games from "./Games";

const GamePage: FC = () => {
  const location = useLocation();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  let gamesAr;
  if (location.pathname === "/categories/starfield") gamesAr = Games[0];
  if (location.pathname === "/categories/codmw3") gamesAr = Games[1];
  if (location.pathname === "/categories/spider-man2") gamesAr = Games[2];
  if (location.pathname === "/categories/alan-wake2") gamesAr = Games[3];
  if (location.pathname === "/categories/phantom-liberty") gamesAr = Games[4];
  if (location.pathname === "/categories/payday3") gamesAr = Games[5];
  if (location.pathname === "/categories/mirage") gamesAr = Games[6];
  if (location.pathname === "/categories/aloneinthedark") gamesAr = Games[7];
  if (location.pathname === "/categories/lordsofthefallen") gamesAr = Games[8];
  if (location.pathname === "/categories/dota2") gamesAr = Games[9];
  return (
    <div
      className={
        isDesktop
          ? "GamePage"
          : isTablet
          ? "GamePage__Tablet"
          : isMobile
          ? "GamePage__Mobile"
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
        className={isDesktop ? "GamePage__content" : "GamePage__content-media"}
      >
        <div className="Game__profile">
          <img
            src={gamesAr?.img}
            alt="gamePoster"
            className={
              isDesktop ? "Game__profile-img" : "Game__profile-img-media"
            }
          />
          <div
            className={
              isDesktop ? "Game__profile-desc" : "Game__profile-desc-media"
            }
          >
            <p>Название игры: {gamesAr?.title}</p>
            <p>Год выхода: {gamesAr?.year}</p>
            <p>Жанры: {gamesAr?.janres}.</p>
            <p>Издатель: {gamesAr?.studio}.</p>
            <p>Платформы: {gamesAr?.platforms}.</p>
            <p>Возрастное ограничение: {gamesAr?.age}</p>
            <p>{gamesAr?.desc}</p>
          </div>
        </div>
        <h2>Популярные стримы этой игры</h2>
        <div
          className={isDesktop ? "related-streams" : "related-streams-media"}
        >
          <Player width={300} height={200} />
          <Player width={300} height={200} />
          <Player width={300} height={200} />
          <Player width={300} height={200} />
          <Player width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
