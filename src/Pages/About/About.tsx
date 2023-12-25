import { FC } from "react";
import "./about.css";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";

const About: FC = () => {
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
          ? "About"
          : isTablet
          ? "About__Tablet"
          : isMobile
          ? "About__Mobile"
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
      <div className="About__content">
        <h1>О нас</h1>
        <div className={isDesktop ? "main__content" : "main__content-media"}>
          <p className="contacts">
            Наш email для деловых предложений: <br />
            GamingLive@gmail.com
          </p>
          <p className="contacts">
            Телефон горячей линии:
            <br />8 (800) 555-35-35
          </p>
          <p className="contacts">
            Адрес головного офиса:
            <br /> г.Урюпинск, ул. Голожопика, д. 69
          </p>
          <p className="hrefs">
            Наша партнёрская программа
            <br /> и бонусы для партнёров
          </p>
          <p className="hrefs">Партнёры</p>
          <p className="hrefs">Разработчики</p>
          <p className="hrefs">Политика конфиденциальности</p>
          <p className="hrefs">Правила сообщества</p>
          <p className="hrefs">Использование файлов cookie</p>
          <p className="hrefs">Подбор рекламы</p>
          <p className="text-muted">Все права защищены. 2023 г.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
