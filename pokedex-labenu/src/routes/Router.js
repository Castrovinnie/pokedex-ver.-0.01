import ListPage from "../pages/ListPage";
import Pokedex from "../pages/PokedexPage";
import Details from "../pages/DetailPages";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}> 
          <ListPage />
        </Route>

        <Route exact path={"/detalhes/:pokemon"}>
          <Details />
        </Route>

        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
