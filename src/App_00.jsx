import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomePage_00,
  HomeLayoutPage_00,
  BlogStaticPage_00,
  BlogLocalJsonPage_00,
  BlogNodePage_00,
  BlogSupaPage_00,
  BooklistPage_00,
} from './pages';
import {
  T11_ErrorExamplePage_00,
  T12_UseStateBasicsPage_00,
} from './pages/tutorials';

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
      {
        path: 'supa_00',
        element: <BlogSupaPage_00 />,
      },
      {
        path: 'booklist_00',
        element: <BooklistPage_00 />,
      },
    ],
  },
  {
    path: 'tutorials/',
    element: <HomeLayoutPage_00 />,
    children: [
      {
        path: 't11_00',
        element: <T11_ErrorExamplePage_00 />,
      },
      {
        path: 't12_00',
        element: <T12_UseStateBasicsPage_00 />,
      },
    ],
  },
]);

const App_00 = () => {
  return <RouterProvider router={router} />;
};

export default App_00;
