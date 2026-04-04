import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from '../pages/not-found';
import Transparency from '../pages/transparency';
import Header from '../components/header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [{ path: 'transparencia', element: <Transparency /> }],
  },
  { path: '*', element: <NotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
