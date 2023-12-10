import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import Coins from './containers/Coins';
import About from './containers/About';
import NotFoundPage from './containers/NotFoundPage';
import Details from './containers/Details';
import { ROUTES } from './constans/values';
import Exchanges from './containers/Exchanges';


const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppContainer />}>
          <Route index element={<Coins />} />
          <Route path={ROUTES.DETAILS_ID} element={<Details />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.EXCHANGES} element={<Exchanges />} />
          <Route path={ROUTES.ERROR_PAGE} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;