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
import RecordsDoctor from "./pages/doctor/Records";
import Record from "./components/RecordComponents/index";
import MedicalRecord from "./components/RecordComponents/MedicalRecord";
import Medication from "./components/RecordComponents/Medication";
import Allergie from "./components/RecordComponents/Allergie";
import AddOldProblem from "./components/RecordComponents/AddOldProblem";
import OldProblems from "./components/RecordComponents/oldproblems";
import Prescription from "./components/RecordComponents/Prescription";

//doctor layouts
import DashboardDoctor from './pages/doctor/dashboard';
import DoctorProfile from './pages/doctor/profile';
import Doctor from './pages/doctor';
import DoctorPatients from './pages/doctor/patients';
import DoctorAppointements from './pages/doctor/appointements';
import DoctorBlogs from './pages/doctor/blogs';
import DoctorAddBlog from './pages/doctor/add-blogs';
import Calendar from './pages/doctor/calendar';
import UpdateAppointment from './pages/doctor/updateAppointment';
import TakeAppointment from './pages/patient/take_appointment';


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
      element: <Doctor />,
      children: [
        { path: 'app', element: <DashboardDoctor />},
        { path: 'profile', element: <DoctorProfile />},
        { path: 'patients', element: <DoctorPatients />},
        { path: 'calendar', element: <Calendar />},
        { path: 'appointments', element: <DoctorAppointements />},
        { path: 'update_appointment/:id', element: <UpdateAppointment /> },
        { path: 'blogs', element: <DoctorBlogs />},
        { path: 'add-blog', element: <DoctorAddBlog />},

        
        //records
        {
          path: "records",
          element: <RecordsDoctor />,
        },
        {
          path: "record",
          element: <Record />,
          children: [
            { path: "medicalrecord/:id", element: <MedicalRecord /> },
            { path: "prescription", element: <Prescription /> },
            { path: "medication", element: <Medication /> },
            { path: "allergies", element: <Allergie /> },
            { path: "oldproblem/:id", element: <OldProblems /> },
            { path: "addoldproblem/:id", element: <AddOldProblem /> },
          ],
        },



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
        { path: 'take-appointment', element: <TakeAppointment />},
      ]
    },
    {
      path: '/admin',
      children: [
      ]
    },
   
  ]);
}
