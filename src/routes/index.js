import Workflow from "../pages/Workflow";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const mainRoutes = [
  {
    path: "/",
    element: <Workflow />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },

];

export default mainRoutes;
