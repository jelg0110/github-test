import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Error from '../views/Error';
import Repository from '../views/Repository';
import RepositoryDetails from '../views/Repository/Details';
import RepositoryDetailsLoader from '../views/Repository/Details/loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Repository />,
      },
      {
        path: '/:owner/:repo',
        element: <RepositoryDetails />,
        loader: RepositoryDetailsLoader,
      },
    ],
  },
]);

export default router;