import { FC } from "react";
import "./statistics.css";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import AreaChart from "../../components/Charts/AreaChart";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";
import LineChart from "../../components/Charts/LineChart";
import ActivityChart from "../../components/Charts/ActivityChart";
import { useAuth } from "../../hooks/useAuth";
import NeedToLogin from "../../components/NeedToLogin/NeedToLogin";

const Statistics: FC = () => {
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
          ? "Stats"
          : isTablet
          ? "Stats__Tablet"
          : isMobile
          ? "Stats__Mobile"
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
      <div className="Stats__content">
        <h1>Ваша статистика</h1>
        <div
          className={
            isDesktop ? "Stats__content-stats" : "Stats__content-stats-media"
          }
        >
          <div
            className={
              isDesktop
                ? "stats-barChart"
                : isTablet
                ? "chart-media"
                : isMobile
                ? "chart-media"
                : ""
            }
          >
            <BarChart width={isDesktop ? 600 : isMobile ? 400 : 600} />
          </div>
          <div
            className={
              isDesktop
                ? "stats-areaChart"
                : isTablet
                ? "chart-media"
                : isMobile
                ? "chart-media"
                : ""
            }
          >
            <AreaChart width={isDesktop ? 600 : isMobile ? 400 : 600} />
          </div>
          <div
            className={
              isDesktop
                ? "stats-pieChart"
                : isTablet
                ? "chart-media"
                : isMobile
                ? "chart-media"
                : ""
            }
          >
            <PieChart width={350} />
          </div>
          <div
            className={
              isDesktop
                ? "stats-lineChart"
                : isTablet
                ? "chart-media"
                : isMobile
                ? "chart-media"
                : ""
            }
          >
            <LineChart width={400} />
          </div>
          <div
            className={
              isDesktop
                ? "stats-watched"
                : isTablet
                ? "chart-media"
                : isMobile
                ? "chart-media"
                : ""
            }
          >
            <ActivityChart width={400} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NeedToLogin />
  );
};

export default Statistics;
