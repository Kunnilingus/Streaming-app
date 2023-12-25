import { FC, useState } from "react";
import "./translation.css";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import screen from "../../assets/TranslationImg/stream.jpg";
import advert1 from "../../assets/TranslationImg/advert1.jpg";
import FAQ from "../../assets/TranslationImg/faq.png";
import Donate from "../../assets/TranslationImg/donate.png";
import TG from "../../assets/TranslationImg/tg.jpg";
import VK from "../../assets/TranslationImg/VK.jpg";
import YT from "../../assets/TranslationImg/YT.jpg";
import DS from "../../assets/TranslationImg/DS.jpg";
import profileImg from "../../assets/TranslationImg/profile.png";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import ApplyBtn from "../../components/ApplyBtn/ApplyBtn";
import Chat from "../../components/Chat/Chat";
import TrnsModal from "../../components/TrnsModal/TrnsModal";
import { useAuth } from "../../hooks/useAuth";
import NeedToLogin from "../../components/NeedToLogin/NeedToLogin";
import { useAcc } from "../../hooks/useAcc";

const Translation: FC = () => {
  registerLocale("ru", ru);
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
  const { isAuth } = useAuth();
  const { userName } = useAcc();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isModalActiveTrns, setIsModalActiveTrns] = useState<boolean>(false);
  const [isModalActiveImg, setIsModalActiveImg] = useState<boolean>(false);
  const [isModalActiveGame, setIsModalActiveGame] = useState<boolean>(false);
  const [isModalActiveAlert, setIsModalActiveAlert] = useState<boolean>(false);
  const [trnsNameValue, setTrnsNameValue] = useState<string>(
    "Название трансляции"
  );
  const [trnsImgValue, setTrnsImgValue] = useState<string>(screen);
  const [trnsGameValue, setTrnsGameValue] = useState<string>("Название игры");
  const [trnsAlertValue, setTrnsAlertValue] = useState<string>("");
  const isTrnsActiveTrns = () => {
    setIsModalActiveTrns(false);
    setIsModalActiveImg(false);
    setIsModalActiveGame(false);
    setIsModalActiveAlert(false);
  };
  const saveTrnsName = (value: string) => {
    setTrnsNameValue(value);
    setIsModalActiveTrns(false);
  };
  const saveTrnsImg = (value: string) => {
    setTrnsImgValue(value);
    setIsModalActiveImg(false);
  };
  const saveTrnsGame = (value: string) => {
    setTrnsGameValue(value);
    setIsModalActiveGame(false);
  };
  const saveTrnsAlert = (value: string) => {
    setTrnsAlertValue(value);
    setIsModalActiveAlert(false);
  };
  return isAuth ? (
    <div
      className={
        isDesktop
          ? "Trns"
          : isTablet
          ? "Trns__Tablet"
          : isMobile
          ? "Trns__Mobile"
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
      <h1 className="Trns__header">Панель управления трансляцией</h1>
      <div className={isDesktop ? "grid-container" : "grid-container-tablet"}>
        <div className={isDesktop ? "Trns__settings" : "Trns__settings-tablet"}>
          <div
            className={
              isDesktop
                ? "Trns__settings-paragraphs"
                : "Trns__settings-onlyTablet"
            }
          >
            <p
              className="Trns__settings-modal"
              onClick={() => setIsModalActiveTrns(true)}
            >
              Изменить название <br /> трансляции
            </p>
            <p
              className="Trns__settings-modal"
              onClick={() => setIsModalActiveImg(true)}
            >
              Изменить фон <br /> неактивной трансляции
            </p>
            <p
              className="Trns__settings-modal"
              onClick={() => setIsModalActiveGame(true)}
            >
              Изменить игру
            </p>
            <p
              className="Trns__settings-modal"
              onClick={() => setIsModalActiveAlert(true)}
            >
              Изменить текст <br /> оповещения подписчиков
            </p>
            <div
              className={
                isDesktop ? "Trns__settings-btn1" : "Trns__settings-btn1-tablet"
              }
            >
              <ApplyBtn text={"Начать трансляцию"} />
            </div>
          </div>
          <div
            className={
              isDesktop
                ? "Trns__settings-announsment"
                : "Trns__settings-announsment-tablet"
            }
          >
            <p style={{ opacity: 0.2 }}>
              Вы можете оповестить <br /> своих зрителей заранее.
            </p>
            <p>
              Выберите дату и время <br /> начала трансляции:
            </p>
            <DatePicker
              dateFormat="Pp"
              locale={ru}
              showTimeSelect
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <div
              className={
                isDesktop ? "Trns__settings-btn2" : "Trns__settings-btn2-tablet"
              }
            >
              <ApplyBtn
                text={"Оповестить"}
                onClick={() => alert("Подписчики оповещены!")}
              />
            </div>
          </div>
        </div>
        <div className="Trns__main">
          <img
            className={
              isDesktop ? "Trns__main-screen" : "Trns__main-screen-tablet"
            }
            src={trnsImgValue}
            alt="screen"
          />
          <div
            className={isDesktop ? "Trns__main-desc" : "Trns__main-desc-tablet"}
          >
            <div className="Trns__main-desc-min">
              <img src={profileImg} alt="profileImg" />
              <div className="Trns__main-desc-min-info">
                <p>{userName}</p>
                <p>{trnsNameValue}</p>
                <p>{trnsGameValue}</p>
              </div>
            </div>
            <p className="Trns__main-desc-followers">31.7 тыс. фолловеров</p>
          </div>
          <div
            className={
              isDesktop ? "Trns__main-advert" : "Trns__main-advert-tablet"
            }
          >
            <div className="FAQ">
              <img src={FAQ} alt="FAQ" />
              <p>Сколько лет ? Ответ: 24</p>
              <p>Хуй сосать будешь ? Ответ: Да</p>
              <p>Писяпопакака ? Ответ: Да</p>
            </div>
            <div className="donate">
              <img src={Donate} alt="donate" />
              <p>0-300p - Обычный донат</p>
              <p>300-1000p - Необычный донат</p>
              <p>1000-∞p - Ебал ту Люсю</p>
            </div>
            <img src={advert1} alt="advertising" />
            <div className="socials">
              <img src={TG} alt="tg" />
              <img src={VK} alt="vk" />
            </div>
            <div className="socials">
              <img src={YT} alt="yt" />
              <img src={DS} alt="ds" />
            </div>
          </div>
        </div>
        <MediaQuery minWidth={1440}>
          <Chat />
        </MediaQuery>
      </div>
      <TrnsModal
        active={isModalActiveTrns}
        setActive={isTrnsActiveTrns}
        title="Изменить название трансляции"
        value={trnsNameValue}
        setValue={setTrnsNameValue}
        saveChangesFn={() => saveTrnsName(trnsNameValue)}
      />
      <TrnsModal
        active={isModalActiveImg}
        setActive={isTrnsActiveTrns}
        title="Изменить фон неактивной трансляции"
        value={trnsImgValue}
        setValue={setTrnsImgValue}
        saveChangesFn={() => saveTrnsImg(trnsImgValue)}
      />
      <TrnsModal
        active={isModalActiveGame}
        setActive={isTrnsActiveTrns}
        title="Изменить игру"
        value={trnsGameValue}
        setValue={setTrnsGameValue}
        saveChangesFn={() => saveTrnsGame(trnsGameValue)}
      />
      <TrnsModal
        active={isModalActiveAlert}
        setActive={isTrnsActiveTrns}
        title="Изменить текст
        оповещения подписчиков"
        value={trnsAlertValue}
        setValue={setTrnsAlertValue}
        saveChangesFn={() => saveTrnsAlert(trnsAlertValue)}
      />
    </div>
  ) : (
    <NeedToLogin />
  );
};

export default Translation;
