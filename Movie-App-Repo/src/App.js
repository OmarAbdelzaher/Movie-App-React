import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import AddUser from "./pages/AddUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import favorites from "./Pages/favorites";
import LoginForm from "./Pages/login";
import RegisterForm from "./Pages/register";
import Notfound from "./Pages/notfound";
import Home from "./Pages/home";
import MoviesData from "./Components/MoviesData/MoviesData";
import MoviesList from "./Components/MoviesList/MoviesList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/favorites"} exact component={favorites} />
          <Route path={"/login"} exact component={LoginForm} />
          <Route path={"/register"} exact component={RegisterForm} />
          <Route path={"/movies"} exact component={MoviesList} />
          <Route path={"/details/:id"} exact component={MoviesData} />
          <Route path={"*"} component={Notfound} />
          {/* <Route path={"/add-user"} exact component={AddUser} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
