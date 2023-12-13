import React, { lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constans/values';

const AppContainer = lazy(() => import('./containers/AppContainer'));
const Coins = lazy(() => import('./containers/Coins'));
const About = lazy(() => import('./containers/About'));
const NotFoundPage = lazy(() => import('./containers/NotFoundPage'));
const Details = lazy(() => import('./containers/Details'));
const Exchanges = lazy(() => import('./containers/Exchanges'));

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