import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage/index.jsx";
import About from "./components/About/index.jsx";
import Portfolio from "./components/Portfolio/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Resume from "./components/Resume/index.jsx";
//import Footer from "./components/Footer";
import "./index.css";

//Define the accessible routes, and which components respond to with URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
