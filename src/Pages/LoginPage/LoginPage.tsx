import { FC } from "react";
import "./loginPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setAccSettings } from "../../store/slices/accSlice";
import { useAcc } from "../../hooks/useAcc";

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userName, img, age, profileDesc } = useAcc();
  const handleLogin = (email: string, pass: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        dispatch(
          setAccSettings({
            accEmail: user.email,
            userName: userName,
            img: img,
            age: age,
            profileDesc: profileDesc,
          })
        );
        navigate("/home");
      })
      .catch(() => alert("Неверные данные"));
  };
  return (
    <div className="LoginPage">
      <LoginForm title="Войти" onClick={handleLogin} />
      <p>
        Нет аккаунта ? <Link to="/register">Зарегистрируйтесь!</Link>
      </p>
    </div>
  );
};

export default LoginPage;
