import { FC } from "react";
import "./subs.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import SubEl from "../../components/SubEl/SubEl";
import { UserSubs } from "./UserSubs";
import { UserRecs } from "./UserRecs";
import { useAuth } from "../../hooks/useAuth";
import NeedToLogin from "../../components/NeedToLogin/NeedToLogin";

const Subs: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useAuth();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return isAuth ? (
    <div
      className={
        isDesktop
          ? "Subs"
          : isTablet
          ? "Subs__Tablet"
          : isMobile
          ? "Subs__Mobile"
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
      <div className={isDesktop ? "Subs__content" : "Subs__content-media"}>
        <div className={isDesktop ? "User-subs" : "User-subs-media"}>
          {UserSubs.map((item) => (
            <SubEl
              onClick={() => navigate(`/subs/${item.id}`)}
              offline={item.offline}
              img={item.img}
              name={item.name}
              game={item.game}
              viewers={item.viewers}
            />
          ))}
        </div>
        <div className={isDesktop ? "User-recs" : "User-recs-media"}>
          {UserRecs.map((item) => (
            <SubEl
              onClick={() => navigate(`/subs/${item.id}`)}
              offline={item.offline}
              img={item.img}
              name={item.name}
              game={item.game}
              viewers={item.viewers}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <NeedToLogin />
  );
};

export default Subs;
