import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/all_meetups";
import NewMeetupsPage from "./pages/new_meetup";
import FavoritesPage from "./pages/favorites";

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage />
      </Route>

      <Route path="/new-meetup">
        <NewMeetupsPage />
      </Route>

      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </div>
  );
}

export default App;
