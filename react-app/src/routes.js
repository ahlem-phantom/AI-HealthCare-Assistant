import { useRoutes } from 'react-router-dom';
import AuthService from './services/auth.service';
import { Navigate } from 'react-router-dom';
// home layouts
import Home from './pages/home'
import Role from './pages/role'
import Contact from './pages/contact';
import Blog from './pages/blog';
import Price from './pages/price';
import Login from './pages/login';
import Forgot from './pages/forgot';
import CardVerification from './pages/register-doctor/card_verification';
import ResetPassword from './components/reset-password';
import Welcome from './components/Welcome';
import Shop from './pages/shop';

// Patient layouts
import {default as RegisterPatient} from './pages/register-patient/register';
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
import EditBlog from './pages/patient/edit-blog';
import AddDoctor from './pages/patient/add-doctor';
import Doctors from './pages/patient/doctors';
import EditDoctor from './pages/patient/edit-doctor';
import DoctorDetail from './pages/patient/doctor-detail';



//doctor layouts
import {default as RegisterDoctor} from './pages/register-doctor/register';
import DashboardDoctor from './pages/doctor/dashboard';
import DoctorProfile from './pages/doctor/profile';
import Doctor from './pages/doctor';
import DoctorPatients from './pages/doctor/patients';
import DoctorAppointements from './pages/doctor/appointements';
import DoctorBlogs from './pages/doctor/blogs';
import DoctorAddBlog from './pages/doctor/add-blogs';
import Calendar from './pages/doctor/calendar';
import UpdateAppointment from './pages/doctor/updateAppointment';
import RecordsDoctor from "./pages/doctor/Records";
import Record from "./components/RecordComponents/index";
import MedicalRecord from "./components/RecordComponents/MedicalRecord";
import Medication from "./components/RecordComponents/Medication";
import Allergie from "./components/RecordComponents/Allergie";
import AddOldProblem from "./components/RecordComponents/AddOldProblem";
import OldProblems from "./components/RecordComponents/oldproblems";
import Prescription from "./components/RecordComponents/Prescription";
import Register from './pages/register';
import FaceLog from './pages/face-log';
import FaceRegister from './pages/face-reg';



// ----------------------------------------------------------------------

export default function Router() {
  const currentUser = AuthService.getCurrentUser();

  return useRoutes([
    {
      path: '/',
      children: [
        { path: 'shop', element: <Shop /> },
        { path: '', element: <Home /> },
        { path: 'role', element: <Role /> },
        { path: 'verification', element: <CardVerification /> },
        { path: 'contact', element: <Contact /> },
        { path: 'blog', element: <Blog /> },
        { path: 'price', element: <Price /> },
        { path: 'login', element: <Login /> },
        { path: 'face-log', element: <FaceLog /> },
        { path: 'face-reg', element: <FaceRegister /> },
        { path: 'forgot', element: <Forgot /> },
        { path: 'register', element: <Register /> },
        { path: 'register-doctor', element: <RegisterDoctor /> },
        { path: 'register-patient', element: <RegisterPatient /> },
        { path: 'confirm/:confirmationCode', element: <Welcome/> },
        { path: 'resetPassword/:confirmationCode', element: <ResetPassword/> },


      ]
    },
    {
      path: '/doctor',
      element: currentUser ? <Doctor /> : <Navigate to="/login" />,
      children: [
        { path: 'app', element:  <DashboardDoctor />  },
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
      element:  currentUser ? <Patient /> : <Navigate to="/login" />,
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
