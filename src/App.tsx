import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Account from "./Pages/Account/Account";
import Translation from "./Pages/Translation/Translation";
import Categories from "./Pages/Categories/Categories";
import GamePage from "./Pages/GamePage/GamePage";
import Subs from "./Pages/Subs/Subs";
import StreamPage from "./Pages/StreamPage/StreamPage";
import About from "./Pages/About/About";
import Statistics from "./Pages/Statistics/Statistics";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<GamePage />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/subs/:id" element={<StreamPage />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
