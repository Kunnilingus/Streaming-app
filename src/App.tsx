import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
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
import { lazy, Suspense } from "react";

const Account = lazy(() => import("./Pages/Account/Account"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/account"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Account />
              </Suspense>
            }
          />
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
