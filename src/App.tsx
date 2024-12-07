import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Home from './pages/Home'
import UserGuide from './pages/UserGuide';
import ExecutionPanel from './pages/ExecutionPanel';
//import SignIn from './pages/Authentication/SignIn';
//import SignUp from './pages/Authentication/SignUp';
//import Calendar from './pages/Calendar';
//import Chart from './pages/Chart';
//import ECommerce from './pages/Dashboard/ECommerce';
//import FormElements from './pages/Form/FormElements';
//import FormLayout from './pages/Form/FormLayout';
//import Profile from './pages/Profile';
//import Settings from './pages/Settings';
//import Tables from './pages/Tables';
//import Alerts from './pages/UiElements/Alerts';
//import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Configurations from './pages/Configurations';
import Logs from './pages/Logs';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Home | Gram-Vikas | Emulus Consulting" />
              <Home />
            </>
          }
        />
        <Route
          path="/GV-React/"
          element={
            <>
              <PageTitle title="Home | Gram-Vikas | Emulus Consulting" />
              <Home />
            </>
          }
        />
        <Route
          path="/user_guide"
          element={
            <>
              <PageTitle title="User Guide | Gram-Vikas | Emulus Consulting" />
              <UserGuide />
            </>
          }
        />
        <Route
          path="/execution_panel"
          element={
            <>
              <PageTitle title="Execution Panel | Gram-Vikas | Emulus Consulting" />
              <ExecutionPanel />
            </>
          }
        />
        <Route
          path="/execution_panel/configurations"
          element={
            <>
              <PageTitle title="Configurations | Gram-Vikas | Emulus Consulting" />
              <Configurations />
            </>
          }
        />
        <Route
          path="/execution_panel/logs"
          element={
            <>
              <PageTitle title="Logs | Gram-Vikas | Emulus Consulting" />
              <Logs />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
