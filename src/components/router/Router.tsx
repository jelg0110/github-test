import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Repository from '../views/Repository';
import Error from '../views/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Repository />,
    errorElement: <Error />,
  },
]);

export default router;