import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/all_meetups";
import NewMeetupsPage from "./pages/new_meetup";
import FavoritesPage from "./pages/favorites";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
