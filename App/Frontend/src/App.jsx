import Home from "./assets/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Careers from "./assets/pages/Careers";
import JobDetail from "./components/shared/Careers/JobSearch/JobDetail";
import Profile from "./components/shared/Profile/Profile";
import "./App.css";
import SingleJob from "./components/shared/Careers/JobSearch/SingleJob";
import Companies from "./components/Admin/Companies";
import CreateCompany from "./components/Admin/CreateCompany";
import CompanySetup from "./components/Admin/CompanySetup";
import Jobs from "./components/Admin/Jobs";
import CreateJob from "./components/Admin/CreateJob";
import Applicants from "./components/Admin/Applicants";
import Browse from "./components/shared/Browse/Browse";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
// Settins Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/jobdetail",
    element: <JobDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/singlejob/:id",
    element: <SingleJob />,
  },

  // Handling recruiter route
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CreateCompany />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/company/:id",
    element: (
      <ProtectedRoute>
        {" "}
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        {" "}
        <Jobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/create/job",
    element: (
      <ProtectedRoute>
        <CreateJob />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        {" "}
        <Applicants />
      </ProtectedRoute>
    ),
  },
  {
    path: "/jobs/browse",
    element: <Browse />,
  },
]);
function App() {
  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}
export default App;
