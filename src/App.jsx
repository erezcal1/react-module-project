import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navBar/navBar.component";
import HomePage from "./pages/homePage/homePage.page";
import AboutPage from "./pages/about/about.page";
import FooterComponent from "./components/footer/footer.component";
import RegisterUserPage from "./pages/registerUser/registerUser.page";
import RegisterBizPage from "./pages/registerBiz/registerBiz.page";
import LoginPage from "./pages/login/login.page";
import LogOutPage from "./pages/logout/logout.component";
import AuthGuardRoute from "./components/authGuardRoute/authGuardRoute.component";
import CardsPage from "./pages/bizCard/bizCard.page";
import UserCardsPage from "./pages/dashboard/dashboard.page";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <AuthGuardRoute
          path="/dashboard"
          component={UserCardsPage}
        ></AuthGuardRoute>
        <AuthGuardRoute
          path="/create-card"
          component={CardsPage}
        ></AuthGuardRoute>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/user-register">
          <RegisterUserPage />
        </Route>
        <Route path="/business-register">
          <RegisterBizPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/logout">
          <LogOutPage />
        </Route>
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
