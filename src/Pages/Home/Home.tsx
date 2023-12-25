import { FC } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import poster2 from "../../assets/HomePageImg/Starfield.png";
import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import Player from "../../components/Player/Player";
import { useLocation } from "react-router-dom";
 
const Home: FC = () => {
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
  return (
    <div
      className={
        isDesktop
          ? "Home"
          : isTablet
          ? "Home__Tablet"
          : isMobile
          ? "Home__Mobile"
          : ""
      }
    >
      <MediaQuery minWidth={1440}>
        <SideBar location={location.pathname} />
      </MediaQuery>
      <div
        className={
          isDesktop
            ? "home__content"
            : isTablet
            ? "home__content-media"
            : "home__content-media"
        }
      >
        <MediaQuery minWidth={1440}>
          <Header />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1439}>
          <HeaderMedia location={location.pathname} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <HeaderMobile location={location.pathname}/>
        </MediaQuery>
        <div
          className={
            isDesktop
              ? "home__poster"
              : isTablet
              ? "home__posterTablet"
              : isMobile
              ? "home__posterMobile"
              : ""
          }
        >
          <img src={poster2} alt="poster" />
        </div>
        <p
          className={isDesktop ? "home__announsment" : "home__announsmentMedia"}
        >
          Top Streams
        </p>
        <div
          className={
            isDesktop
              ? "home__streams-container"
              : isTablet
              ? "home__streams-containerTablet"
              : isMobile
              ? "home__streams-containerMobile"
              : ""
          }
        >
          <div
            className={
              isMobile ? "home__streams-previewMobile" : "home__streams-preview"
            }
          >
            <Player />
          </div>
          <div
            className={
              isMobile ? "home__streams-previewMobile" : "home__streams-preview"
            }
          >
            <Player />
          </div>
          <div
            className={
              isMobile ? "home__streams-previewMobile" : "home__streams-preview"
            }
          >
            <Player />
          </div>
          <div
            className={
              isMobile ? "home__streams-previewMobile" : "home__streams-preview"
            }
          >
            <Player />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
