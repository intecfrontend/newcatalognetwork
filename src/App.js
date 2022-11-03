import './assets/css/App.css';
import "@identitybuilding/idb-react-ui-elements/dist/styles/Colors.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import ResultsPage from "./pages/ResultsPage"
import DetailsPage from "./pages/DetailsPage"
import Meta from './components/Meta';
import CookieMessage from './components/CookieMejsxssage';
import { useSelector, useDispatch } from "react-redux";
import { updateAccountInfo } from './actions/index'
import { useEffect } from 'react'
import Login from './components/Login';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const App = () => {
  const { translate } = useSelector(state => state.general);
  const { loginScreen } = useSelector(state => state.account);
  const dispatch = useDispatch()

  let page_slug = translate('page').toLowerCase()

  useEffect(() => {
    if (localStorage.getItem("promotoken")) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("promotoken")}`,
      };
      axios.get(`http://localhost:8000/core/api/catalogus/user/`, {
        headers: headers,
      })
        .then((res) => {
          dispatch(updateAccountInfo(res.data))
        })
    }
  }, [])

  const createNotification = (type, message) => {
    if (type === "info") {
      NotificationManager.info(message);
    } else if (type === "success") {
      NotificationManager.success(message);
    } else if (type === "warning") {
      NotificationManager.warning(message);
    } else if (type === "error") {
      NotificationManager.error(message);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Meta />
        <CookieMessage />
        <NotificationContainer />
        {loginScreen && <Login createNotification={createNotification} />}
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} createNotification={createNotification} />} />
          <Route path={`/${translate("search_slug")}/:keyword?/${page_slug}=:page?/`} render={(props) => <ResultsPage {...props} createNotification={createNotification} />} />
          <Route path="/business/:id?" render={(props) => <DetailsPage {...props} createNotification={createNotification} />} />
          <Route exact path="/magazines/:id" element={<DetailsPage />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
