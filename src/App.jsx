import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landingpage from "./Components-Landingpage/Landingpage";
import Loginmainpage from "./Components-Loginpage/Loginmainpage";
import Twostepverification from "./Components-Loginpage/Twostepverification";
import Emailverification from "./Components-Loginpage/Emailverification";
import Sucesslogin from "./Components-Loginpage/Sucesslogin";
import Mobileverification from "./Components-Loginpage/Mobileverification";
import Forgotpassword from "./Components-Loginpage/Forgotpassword";
import Forgototp from "./Components-Loginpage/Forgototp";
import Setnewpassword from "./Components-Loginpage/Setnewpassword";
import Passresetsucess from "./Components-Loginpage/Passresetsucess";
import { HRaccount } from "./Components-Signuppage/HRaccount";
import Mentor from "./Components-Signuppage/Mentor";
import Intern from "./Components-Signuppage/Intern";
import Company from "./Components-Signuppage/Company";
import Admin from "./Components-Signuppage/Admin";
import HRandCompanyport from "./Components-Loginpage/HRandCompanyport";
import { InternDashboard } from "./Components-Interndashboard/Interndashboard";
import { DashboardMain } from "./Components-Interndashboard/DashboardMain";
import { MyprofileMain } from "./Components-Interndashboard/MyprofileMain";
import { InternshipMain } from "./Components-Interndashboard/InternshipMain";
import { TasksMain } from "./Components-Interndashboard/TasksMain";
import { AttendanceMain } from "./Components-Interndashboard/AttendanceMain";
import { ReportsMain } from "./Components-Interndashboard/ReportsMain";
import { ProjectsMain } from "./Components-Interndashboard/ProjectsMain";
import { MentorMain } from "./Components-Interndashboard/MentorMain";
import { LearningMain } from "./Components-Interndashboard/LearningMain";
import { ResourcesMain } from "./Components-Interndashboard/ResourcesMain";
import { CertificatesMain } from "./Components-Interndashboard/CertificatesMain";
import { SettingsMain } from "./Components-Interndashboard/SettingsMain";

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
      path: "/HRaccount",
      element: <HRaccount />,
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

    {
      path: "/DashboardMain",
      element: <DashboardMain />,
    },

    {
      path: "/MyprofileMain",
      element: <MyprofileMain />,
    },

    {
      path: "/InternshipMain",
      element: <InternshipMain />,
    },

    {
      path: "/TasksMain",
      element: <TasksMain />,
    },

    {
      path: "/AttendanceMain",
      element: <AttendanceMain />,
    },

    {
      path: "/ReportsMain",
      element: <ReportsMain />,
    },

    {
      path: "/ProjectsMain",
      element: <ProjectsMain />,
    },

    {
      path: "/MentorMain",
      element: <MentorMain />,
    },

    {
      path: "/LearningMain",
      element: <LearningMain />,
    },

    {
      path: "/ResourcesMain",
      element: <ResourcesMain />,
    },

    {
      path: "/CertificatesMain",
      element: <CertificatesMain />,
    },

    {
      path: "/SettingsMain",
      element: <SettingsMain />,
    }
  ],
  {
    basename: "/Internms",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
