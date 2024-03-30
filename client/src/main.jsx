import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing components and styles
import "bootstrap/dist/css/bootstrap.min.css";

import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import App from "./App";
import Highscores from './pages/Highscores'
import GlobalHighscores from './pages/GlobalHighscores'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Quiz />,
      },

      {
        path:'/user-highscores',
        element:<Highscores />
      },
      {
        path:'/global-highscores',
        element:<GlobalHighscores />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
