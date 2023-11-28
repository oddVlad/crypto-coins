import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import Coins from './containers/Coins';
import About from './containers/About';
import NotFoundPage from './containers/NotFoundPage';
import Details from './containers/Details';
import { ROUTES } from './constans/values';
import Exchanges from './containers/Exchanges';

interface IAppProps {

}

const App: React.FC<IAppProps> = () => {
  const router = createBrowserRouter([{
    path: ROUTES.HOME,
    element: <AppContainer />,
    children: [
      {
        index: true,
        element: <Coins />
      },
      {
        path: ROUTES.DETAILS_ID,
        element: <Details />
      },
      {
        path: ROUTES.ABOUT,
        element: <About />
      },
      {
        path: ROUTES.EXCHANGES,
        element: <Exchanges />,
      },
      {
        path: ROUTES.ERROR_PAGE,
        element: <NotFoundPage />,
      },
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
};

export default App;