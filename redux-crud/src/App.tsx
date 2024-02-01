import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/Home';
import AlbumsPage from './page/Albums';
import RootLayout from './page/Root';
import UsersPage from './page/Users';
import PostsPage from './page/Posts';
import ErrorPage from './page/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'albums', element: <AlbumsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
