import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/all_meetups";
import NewMeetupsPage from "./pages/new_meetup";
import FavoritesPage from "./pages/favorites";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
