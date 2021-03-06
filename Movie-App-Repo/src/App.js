import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Favorites from "./Pages/favorites";
import LoginForm from "./Pages/login";
import RegisterForm from "./Pages/register";
import Notfound from "./Pages/notfound";
import MoviesData from "./Components/MoviesData/MoviesData";
import MoviesList from "./Components/MoviesList/MoviesList";
import { LangContext } from "./Context/langContext";
import { useState } from "react";

function App() {
  const [contextLanguage, setContextLanguage] = useState("en");
  return (
    <LangContext.Provider value={{ contextLanguage, setContextLanguage }}>
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path={"/favorites"} exact component={Favorites} />
          <Route path={"/login"} exact component={LoginForm} />
          <Route path={"/register"} exact component={RegisterForm} />
          <Route path={"/"} exact component={MoviesList} />
          <Route path={"/details/:id"} exact component={MoviesData} />
          <Route path={"*"} component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
    </LangContext.Provider>
  );
}

export default App;
