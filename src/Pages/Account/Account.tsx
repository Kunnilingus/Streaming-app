import { FC, useState } from "react";
import "./account.css";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import HeaderMedia from "../../components/HeaderMedia/HeaderMedia";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import OkBtn from "../../components/OkBtn/OkBtn";
import Select from "../../components/Select/Select";
import options from "../../components/Select/options.json";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NeedToLogin from "../../components/NeedToLogin/NeedToLogin";
import { useAcc } from "../../hooks/useAcc";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setAccSettings } from "../../store/slices/accSlice";

const Account: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
  const { userName, img, age, profileDesc, accEmail } = useAcc();
  const [imgValue, setImgValue] = useState<string>("");
  const [userNameValue, setUserNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [profileInfoValue, setProfileInfoValue] = useState<string>("");
  const [paymentWay, setPaymentWay] = useState("");
  const handleWaySelect = (value: string) => {
    setPaymentWay(value);
  };
  const selectedWay = options.find((item) => item.value === paymentWay);
  const setUserNameBtn = (user: string) => {
    if (user !== "") {
      dispatch(
        setAccSettings({
          userName: user,
          img: img,
          age: age,
          profileDesc: profileDesc,
          accEmail: accEmail,
        })
      );
    } else {
      return null;
    }
    setUserNameValue("");
  };
  const setProfileImgBtn = (imgLink: string) => {
    if (imgLink !== "") {
      dispatch(
        setAccSettings({
          img: imgLink,
          userName: userName,
          age: age,
          profileDesc: profileDesc,
          accEmail: accEmail,
        })
      );
    } else {
      return null;
    }
    setImgValue("");
  };
  const setProfileDescBtn = (desc: string) => {
    if (desc !== "") {
      dispatch(
        setAccSettings({
          img: img,
          userName: userName,
          age: age,
          profileDesc: desc,
          accEmail: accEmail,
        })
      );
    } else {
      return null;
    }
    setProfileInfoValue("");
  };
  const setEmailBtn = (email: string) => {
    if (email !== "") {
      dispatch(
        setAccSettings({
          img: img,
          userName: userName,
          age: age,
          profileDesc: profileDesc,
          accEmail: email,
        })
      );
    } else {
      return null;
    }
    setEmailValue("");
  };
  return isAuth ? (
    <div
      className={
        isDesktop
          ? "Account"
          : isTablet
          ? "Account__Tablet"
          : isMobile
          ? "Account__Mobile"
          : ""
      }
    >
      <MediaQuery minWidth={1440}>
        <SideBar location={location.pathname} />
      </MediaQuery>
      <div
        className={isDesktop ? "account__content" : "account__content-media"}
      >
        <MediaQuery minWidth={1440}>
          <Header />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1439}>
          <HeaderMedia location={location.pathname} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <HeaderMobile location={location.pathname} />
        </MediaQuery>
        <div
          className={
            isDesktop
              ? "account__grid-container"
              : "account__grid-container-media"
          }
        >
          <div className="account__info">
            <h1>{userName}</h1>
            <img className="account__img" src={img} alt="AccountImg" />
            <div
              className={
                isDesktop
                  ? "account__desc"
                  : isMobile
                  ? "account__desc-mb"
                  : "account__desc"
              }
            >
              <div
                className={
                  isDesktop
                    ? "account__desc-about"
                    : isMobile
                    ? "account__desc-about-mb"
                    : "account__desc-about"
                }
              >
                <p>{profileDesc}</p>
              </div>
              <div
                className={
                  isDesktop
                    ? "account__desc-age"
                    : isMobile
                    ? "account__desc-age-mb"
                    : "account__desc-age"
                }
              >
                <p>Возраст</p>
                <p className="desc-count">{age}</p>
              </div>
              <div
                className={
                  isDesktop
                    ? "account__desc-trns"
                    : isMobile
                    ? "account__desc-trns-mb"
                    : "account__desc-trns"
                }
              >
                <p>Трансляций</p>
                <p className="desc-count">0</p>
              </div>
              <div
                className={
                  isDesktop
                    ? "account__desc-subs"
                    : isMobile
                    ? "account__desc-subs-mb"
                    : "account__desc-subs"
                }
              >
                <p>Подписчики</p>
                <p className="desc-count">3</p>
              </div>
              <div
                className={
                  isDesktop
                    ? "account__desc-email"
                    : isMobile
                    ? "account__desc-email-mb"
                    : "account__desc-email"
                }
              >
                <p>{accEmail}</p>
              </div>
            </div>
          </div>
          <div className="account__settings">
            <h1>Настройки профиля</h1>
            <div
              className={
                isDesktop
                  ? "account__settings-payment"
                  : isMobile
                  ? "account__settings-payment-mb"
                  : "account__settings-payment"
              }
            >
              <div className="form-payment">
                <p>Сумма пополнения:</p>
                <input type="number" min={100} />
              </div>
              <div className="form-payment">
                <p>Номер карты:</p>
                <input type="number" />
              </div>
              <div className="form-payment">
                <p>Способ оплаты:</p>
                <Select
                  mode="rows"
                  options={options}
                  selected={selectedWay || null}
                  onChange={handleWaySelect}
                  placeholder="Выберите способ оплаты"
                />
              </div>
              <button
                onClick={() => navigate("/paymentPage")}
                className="account__settings-btn"
              >
                Оплатить
              </button>
            </div>
            <div
              className={
                isDesktop
                  ? "account__settings-about"
                  : isMobile
                  ? "account__settings-about-mb"
                  : "account__settings-about"
              }
            >
              <div className="form">
                <p>Изменить имя:</p>
                <input
                  value={userNameValue}
                  onChange={(e) => setUserNameValue(e.target.value)}
                  type="text"
                />
                <OkBtn onClick={() => setUserNameBtn(userNameValue)}></OkBtn>
              </div>
              <div className="form">
                <p>Изменить фото:</p>
                <input
                  value={imgValue}
                  onChange={(e) => setImgValue(e.target.value)}
                  type="text"
                />
                <OkBtn onClick={() => setProfileImgBtn(imgValue)}></OkBtn>
              </div>
              <div className="form">
                <p>Изменить почту:</p>
                <input
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  type="text"
                />
                <OkBtn onClick={() => setEmailBtn(emailValue)}></OkBtn>
              </div>
              <div className="form">
                <p>Изменить информацю обо мне:</p>
                <input
                  value={profileInfoValue}
                  onChange={(e) => setProfileInfoValue(e.target.value)}
                  type="text"
                />
                <OkBtn
                  onClick={() => setProfileDescBtn(profileInfoValue)}
                ></OkBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NeedToLogin />
  );
};

export default Account;
