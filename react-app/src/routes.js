import { useRoutes } from 'react-router-dom';
// layouts
import Home from './pages/home'
import Role from './pages/role'
import Contact from './pages/contact';
import Blog from './pages/blog';
import Price from './pages/price';
import Login from './pages/login';
import {default as RegisterDoctor} from './pages/register-doctor/register';
import {default as RegisterPatient} from './pages/register-patient/register';
import Forgot from './pages/forgot';
import Dashboard from './pages/patient/dashboard';
import Patient from './pages/patient';
import Appointements from './pages/patient/appointements';
import Blogs from './pages/patient/blogs';
import AddBlog from './pages/patient/add-blogs';
import Symptoms from './pages/patient/symptoms';
import Records from './pages/patient/records';
import EditProfile from './pages/patient/edit-profile';
import BlogDetails from './pages/patient/blog-details';
import Profile from "./components/Profile";
import ResetPassword from './components/reset-password';
import Welcome from './components/Welcome';
import EditBlog from './pages/patient/edit-blog';
import AddDoctor from './pages/patient/add-doctor';
import Doctors from './pages/patient/doctors';
import EditDoctor from './pages/patient/edit-doctor';
import DoctorDetail from './pages/patient/doctor-detail';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: '', element: <Home /> },
        { path: 'role', element: <Role /> },
        { path: 'contact', element: <Contact /> },
        { path: 'blog', element: <Blog /> },
        { path: 'price', element: <Price /> },
        { path: 'login', element: <Login /> },
        { path: 'forgot', element: <Forgot /> },
        { path: 'register-doctor', element: <RegisterDoctor /> },
        { path: 'register-patient', element: <RegisterPatient /> },
        { path: 'confirm/:confirmationCode', element: <Welcome/> },
        { path: 'resetPassword/:confirmationCode', element: <ResetPassword /> },


      ]
    },
    {
      path: '/doctor',
      children: [

      ]
    },
    {
      path: '/patient',
      element: <Patient />,
      children: [
        { path: 'app', element: <Dashboard />},
        { path: 'appointements', element: <Appointements />},
        { path: 'blogs', element: <Blogs />},
        { path: 'profile', element: <Profile /> },
        { path: 'add-blog', element: <AddBlog />},
        { path: 'symptoms', element: <Symptoms />},
        { path: 'records', element: <Records />},
        { path: 'edit-profile', element: <EditProfile />},
        { path: 'reset-password', element: <ResetPassword />},
        { path: 'blog-details/:id', element: <BlogDetails />},
        { path: 'edit-blog/:id', element: <EditBlog />},
        { path: 'doctors', element: <Doctors />},
        { path: 'add-doctor', element: <AddDoctor />},
        { path: 'edit-doctor/:id', element: <EditDoctor />},
        { path: 'doctor-details/:id', element: <DoctorDetail />},
      ]
    },
    {
      path: '/admin',
      children: [
      ]
    },
   
  ]);
}
