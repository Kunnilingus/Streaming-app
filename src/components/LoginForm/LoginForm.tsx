import { FC, useState } from "react";
import "./loginForm.css";

interface LoginFormProps {
  title: string;
  onClick: (email: string, pass: string) => void;
}
const LoginForm: FC<LoginFormProps> = ({ title, onClick }) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
    <div className="LoginForm">
      <h2>{title}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={() => onClick(email, pass)}>{title}</button>
    </div>
  );
};

export default LoginForm;
