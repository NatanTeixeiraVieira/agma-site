import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from '../pages/not-found';
import Transparency from '../pages/transparency';
import Layout from '../components/header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: 'transparencia', element: <Transparency /> }],
  },
  { path: '*', element: <NotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
