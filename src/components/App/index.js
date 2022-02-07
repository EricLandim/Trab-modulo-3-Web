import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Edit,
  Add,
  List,
  FindById,
  ListAllMovies,
  ListMoviesById,
} from "../Category/index";
import { Login } from "../User/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/user"}>
          Login
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={Login() ? "/category" : "#"} className="nav-link">
              Filmes por Categoria
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/moviesId"} className="nav-link">
              Procurar Filmes por ID da Categoria
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adicionar categoria
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/movies/all"} className="nav-link">
              Listar todos os Filmes
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/movies/id"} className="nav-link">
              Listar Filmes por ID
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/user"]} component={Login} />
          <Route exact path={"/category"} component={List} />
          <Route exact path="/moviesId" component={FindById} />
          <Route exact path="/add" component={Add} />
          <Route path="/category/:id" component={Edit} />
          <Route path="/movies/id" component={ListMoviesById} />
          <Route path="/movies/all" component={ListAllMovies} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
