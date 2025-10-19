import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomePage_00,
  HomeLayoutPage_00,
  BlogStaticPage_00,
  BlogLocalJsonPage_00,
  BlogNodePage_00,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_00 />,
    children: [
      {
        index: true,
        element: <HomePage_00 />,
      },
      {
        path: 'static_00',
        element: <BlogStaticPage_00 />,
      },
      {
        path: 'localjson_00',
        element: <BlogLocalJsonPage_00 />,
      },
      {
        path: 'node_00',
        element: <BlogNodePage_00 />,
      },
    ],
  },
]);

const App_00 = () => {
  return <RouterProvider router={router} />;
};

export default App_00;
