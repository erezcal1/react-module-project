import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navBar/navBar.component";
import HomePage from "./pages/homePage/homePage.page";
import AboutPage from "./pages/about/about.page";
import FooterComponent from "./components/footer/footer.component";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
