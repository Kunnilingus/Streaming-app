import { FC } from "react";
import "./header.css";
import wallet from "../../assets/headerImg/wallet32.png";
import poisk from "../../assets/headerImg/poisk.png";
import Notifications from "../NotificationsWindow/Notifications";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAcc } from "../../hooks/useAcc";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { removeUser } from "../../store/slices/userSlice";

const Header: FC = () => {
  const navigate = useNavigate();
  const priceFormatter = new Intl.NumberFormat();
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const { userName, img } = useAcc();
  const logout = () => {
    dispatch(removeUser());
    navigate("/home");
  };
  const toggleContent = () => {
    if (isAuth === true) {
      document.getElementById("dropdown-menu")?.classList.toggle("show-menu");
    }
  };
  return (
    <div className="header">
      <form>
        <input className="header__input" type="text" />
        <button className="header__btn">
          <img src={poisk} alt="poisk" />
        </button>
      </form>
      <div className="profile-content">
        <div className="header__profile">
          <Notifications />
          <div className="money">
            <img
              onClick={() => navigate("/account")}
              className="wallet"
              src={wallet}
              alt="wallet"
            />
            <p>{priceFormatter.format(1245)} ₽</p>
          </div>
          <div className="profile">
            <img src={img} alt="wallet" />
            <p className="name" onClick={() => toggleContent()}>
              {isAuth ? userName : <Link to="/login">Войти</Link>}
            </p>
          </div>
        </div>
        <div id="dropdown-menu" className="dropdown-menu show-menu">
          <p onClick={() => navigate("/account")}>Настройки</p>
          <p onClick={() => navigate("/about")}>Помощь</p>
          <p onClick={() => logout()}>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
