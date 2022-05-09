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
import {default as Registration} from './pages/regsitration/register';
import Forgot from './pages/forgot';
import CardVerification from './pages/regsitration/card_verification';
import ResetPassword from './components/reset-password';
import Welcome from './components/Welcome';
import Shop from './pages/shop';
import Team from './pages/team';
import Unauthorized from './components/unauthorized';

// Patient layouts
import Dashboard from './pages/patient/dashboard';
import Patient from './pages/patient';
import Appointements from './pages/patient/appointements';
import Blogs from './pages/patient/blogs';
import AddBlog from './pages/patient/add-blogs';
import Symptoms from './pages/patient/symptoms';
import Records from './pages/patient/records';
import EditProfile from './pages/patient/edit-profile';
import BlogDetails from './pages/patient/blog-details';
import Profile from './pages/patient/profile';
import EditBlog from './pages/patient/edit-blog';
import AddDoctor from './pages/patient/add-doctor';
import Doctors from './pages/patient/doctors';
import EditDoctor from './pages/patient/edit-doctor';
import DoctorDetail from './pages/patient/doctor-detail';
import KnowMore from './pages/patient/knowMore/KnowMore';
import Test from './pages/patient/test';



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
import FaceRegister from './pages/regsitration/face-reg';
import Upload from './pages/patient/upload';



// ----------------------------------------------------------------------

export default function Router() {
  const currentUser = AuthService.getCurrentUser();

  return useRoutes([
    {
      path: '/',
      children: [
        { path: '', element: <Home /> },
        { path: 'role', element: currentUser && localStorage.getItem('role').match('doctor')  ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem("role").match('patient') ? <Navigate to="/patient/app" /> :<Role />  },
        { path: 'verification', element: currentUser && localStorage.getItem('role').match('doctor')  ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem('role')==="patient" ? <Navigate to="/patient/app" /> :<CardVerification /> },
        { path: 'contact', element:  <Contact /> },
        { path: 'blog', element: <Blog /> },
        { path: 'shop', element: <Shop /> },
        { path: 'team', element: <Team/> },
        { path: 'price', element: <Price /> },
        { path: 'login', element: currentUser && localStorage.getItem('role').match('doctor')  ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem('role').match('patient') ? <Navigate to="/patient/app" /> :<Login /> },
        { path: 'face-log', element: currentUser && localStorage.getItem('role').match('doctor')  ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem('role').match('patient') ? <Navigate to="/patient/app" /> : <FaceLog /> },
        { path: 'face-reg', element: currentUser && localStorage.getItem('role').match('doctor')  ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem('role').match('patient') ? <Navigate to="/patient/app" /> :<FaceRegister /> },
        { path: 'forgot', element: currentUser && localStorage.getItem('role').match('doctor')  ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem('role').match('patient') ? <Navigate to="/patient/app" /> :<Forgot /> },
        { path: 'register', element: currentUser && localStorage.getItem('role').match('doctor')  ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem('role').match('patient') ? <Navigate to="/patient/app" /> :<Register /> },
        { path: 'registration', element:currentUser && localStorage.getItem('role').match('doctor') ? <Navigate to="/doctor/app" /> : currentUser && localStorage.getItem('role').match('patient') ? <Navigate to="/patient/app" /> : <Registration /> },
        { path: 'confirm/:confirmationCode', element: <Welcome/> },
        { path: 'resetPassword/:confirmationCode', element: <ResetPassword/> },
        { path: 'upload', element: <Upload/> },


      ]
    },
    {
      path: '/doctor',
      element: currentUser && currentUser.role==='doctor'  ? <Doctor /> : <Unauthorized />,
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
      element: currentUser && currentUser.role==='patient'  ? <Patient /> : <Unauthorized />,
      children: [
        { path: 'app', element: <Dashboard />},
        { path: 'appointements', element: <Appointements />},
        { path: 'blogs', element: <Blogs />},
        { path: 'profile', element: <Profile /> },
        { path: 'add-blog', element: <AddBlog />},
        { path: 'symptoms', element: <Symptoms />},
        { path: 'test', element: <Test />},
        { path: 'knowmore/:result', element: <KnowMore />},
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
