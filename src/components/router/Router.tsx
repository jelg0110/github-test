import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Error from '../views/Error';
import Repository from '../views/Repository';

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
    ],
  },
]);

export default router;