import { FC } from "react";
import "./streamPage.css";
import { useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import { UserSubs } from "../Subs/UserSubs";
import Chat from "../../components/Chat/Chat";
import Player from "../../components/Player/Player";
import offlinePic from "../../assets/TranslationImg/stream.jpg";
import { UserRecs } from "../Subs/UserRecs";

const StreamPage: FC = () => {
  const location = useLocation();
  const params = useParams();
  let activeStreamer;
  if (Number(params.id) < 12) {
    activeStreamer = UserSubs.find((item) => item.id === Number(params.id));
  }
  if (Number(params.id) >= 12) {
    activeStreamer = UserRecs.find((item) => item.id === Number(params.id));
  }
  const formatter = (num: number) => {
    if (num > 1000000000) {
      return (num / 1000000000).toFixed(2) + " млрд.";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(2) + " млн.";
    } else if (num > 1000) {
      return (num / 1000).toFixed() + " тыс.";
    }
    return num;
  };
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
          ? "StreamPage"
          : isTablet
          ? "StreamPage__Tablet"
          : isMobile
          ? "StreamPage__Mobile"
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
          isDesktop ? "StreamPage__content" : "StreamPage__content-media"
        }
      >
        <div className={isDesktop ? "SPmain__content" : "SPmain__content-media"}>
          {activeStreamer?.offline ? (
            <div
              className={
                isDesktop ? "main__content-video" : "main__content-video-media"
              }
            >
              <img src={offlinePic} alt="Offline" />
              <div className={isDesktop ? "main-desc" : "main-desc-media"}>
                <div className="main-desc-min">
                  <img src={activeStreamer?.img} alt="profileImg" />
                  <div className="main-desc-min-info">
                    <p>{activeStreamer?.name}</p>
                    <p>{activeStreamer?.trnsName}</p>
                    <p>{activeStreamer?.game}</p>
                  </div>
                </div>
                <p className="main-desc-followers">
                  {formatter(activeStreamer?.followers)} фолловеров
                </p>
              </div>
            </div>
          ) : (
            <div
              className={
                isDesktop ? "main__content-video" : "main__content-video-media"
              }
            >
              <Player />
              <div className={isDesktop ? "main-desc" : "main-desc-media"}>
                <div className="main-desc-min">
                  <img src={activeStreamer?.img} alt="profileImg" />
                  <div className="main-desc-min-info">
                    <p>{activeStreamer?.name}</p>
                    <p>{activeStreamer?.trnsName}</p>
                    <p>{activeStreamer?.game}</p>
                  </div>
                </div>
                <p className="main-desc-followers">
                  {formatter(activeStreamer!.followers)} фолловеров
                </p>
              </div>
            </div>
          )}
          <div className="main__content-advert">
            <div className="fuck__twitch1">
              Тут должна была быть уникальная реклама каждого стримера,но твич -
              контора пидорасов
            </div>
            <div className="fuck__twitch2">
              Тут должна была быть уникальная реклама каждого стримера,но твич -
              контора пидорасов
            </div>
            <div className="fuck__twitch3">
              Тут должна была быть уникальная реклама каждого стримера,но твич -
              контора пидорасов
            </div>
            <div className="fuck__twitch4">
              Тут должна была быть уникальная реклама каждого стримера,но твич -
              контора пидорасов
            </div>
            <div className="fuck__twitch5">
              Тут должна была быть уникальная реклама каждого стримера,но твич -
              контора пидорасов
            </div>
            <div className="fuck__twitch6">
              Тут должна была быть уникальная реклама каждого стримера,но твич -
              контора пидорасов
            </div>
          </div>
        </div>
        <div className={isDesktop ? "chat" : "chat-none"}>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default StreamPage;
