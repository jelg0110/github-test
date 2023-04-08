import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Error from '../views/Error';
import Repository from '../views/Repository';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Repository />,
      },
    ],
  },
]);

export default router;