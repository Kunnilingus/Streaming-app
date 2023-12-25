import { FC } from "react";
import "./registerPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setAccSettings } from "../../store/slices/accSlice";

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleRegister = (email: string, pass: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
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
            userName: "Set UserName",
            img: "https://cdn.icon-icons.com/icons2/1446/PNG/256/22261pandaface_98765.png",
            age: 21,
            profileDesc: "Gay Sex is the Best",
          })
        );
        navigate("/home");
      })
      .catch(console.error);
  };
  return (
    <div className="RegisterPage">
      <LoginForm title="Зарегестрироваться" onClick={handleRegister} />
      <p>
        Уже есть аккаунт ? <Link to="/login">Войти!</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
