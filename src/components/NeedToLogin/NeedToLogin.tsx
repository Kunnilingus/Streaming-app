import { FC } from "react";
import "./needToLogin.css";
import login from "./login.png";
import ApplyBtn from "../ApplyBtn/ApplyBtn";
import { useNavigate } from "react-router-dom";

const NeedToLogin: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="NeedToLogin">
      <div className="NeedToLogin-form">
        <div className="NeedToLogin-img">
          <img src={login} alt="login" />
        </div>
        Для просмотра содержимого страницы необходимо авторизоваться{" "}
        <div className="NeedToLogin-btn">
          <ApplyBtn text="Авторизоваться" onClick={() => navigate("/login")} />
        </div>
      </div>
    </div>
  );
};

export default NeedToLogin;
