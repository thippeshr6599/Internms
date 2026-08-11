import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landingpage from "./Landingpage/Landingpage";
import Loginmainpage from "./Loginpage/Loginmainpage";
import Twostepverification from "./Loginpage/Twostepverification";
import Emailverification from "./Loginpage/Emailverification";
import Sucesslogin from "./Loginpage/Sucesslogin";
import Mobileverification from "./Loginpage/Mobileverification";
import Forgotpassword from "./Loginpage/Forgotpassword";
import Forgototp from "./Loginpage/Forgototp";
import Setnewpassword from "./Loginpage/Setnewpassword";
import Passresetsucess from "./Loginpage/Passresetsucess";
import Createaccount from "./Signuppage/Createaccount";
import Mentor from "./Signuppage/Mentor";
import Intern from "./Signuppage/Intern";
import Company from "./Signuppage/Company";
import Admin from "./Signuppage/Admin";
import HRandCompanyport from "./Loginpage/HRandCompanyport";
import { InternDashboard } from "./Interndashboard/InternDashboard";

import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landingpage />,
    },

    {
      path: "/Loginmainpage",
      element: <Loginmainpage />,
    },

    {
      path: "/Twostepverification",
      element: <Twostepverification />,
    },

    {
      path: "/Emailverification",
      element: <Emailverification />,
    },

    {
      path: "/Sucesslogin",
      element: <Sucesslogin />,
    },

    {
      path: "/Mobileverification",
      element: <Mobileverification />,
    },

    {
      path: "/Forgotpassword",
      element: <Forgotpassword />,
    },

    {
      path: "/Forgototp",
      element: <Forgototp />,
    },

    {
      path: "/Setnewpassword",
      element: <Setnewpassword />,
    },

    {
      path: "/Passrestsucess",
      element: <Passresetsucess />,
    },

    {
      path: "/Createaccount",
      element: <Createaccount />,
    },

    {
      path: "/Mentor",
      element: <Mentor />,
    },

    {
      path: "/Intern",
      element: <Intern />,
    },

    {
      path: "/Company",
      element: <Company />,
    },

    {
      path: "/Admin",
      element: <Admin />,
    },

    {
      path: "/HRandCompanyport",
      element: <HRandCompanyport />,
    },

    {
      path: "/InternDashboard",
      element: <InternDashboard />,
    },
  ],
  {
    basename: "/Internms",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
