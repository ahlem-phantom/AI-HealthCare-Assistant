import { useRoutes } from 'react-router-dom';
import AuthService from './services/auth.service';
import { Navigate } from 'react-router-dom';

// Home layouts
import Home from './pages/public/Home'
import Role from './pages/auth/Role'
import Contact from './pages/public/Contact';
import Blog from './pages/public/Blog';
import Price from './pages/public/Price';
import Login from './pages/auth/Login';
import { default as Registration } from './pages/registration/Register';
import Forgot from './pages/auth/Forgot';
import CardVerification from './pages/registration/CardVerification';
import ResetPassword from './components/auth/ResetPassword';
import Welcome from './components/auth/Welcome';
import Shop from './pages/public/Shop';
import Team from './pages/public/Team';
import Unauthorized from './components/auth/Unauthorized';

// Patient layouts
import Dashboard from './pages/patient/dashboard';
import Patient from './pages/patient';
import Appointments from './pages/patient/Appointments';
import Symptoms from './pages/patient/symptoms';
import Records from './pages/patient/records';
import EditProfile from './pages/patient/EditProfile';
import Profile from './pages/patient/profile';
import AddDoctor from './pages/patient/AddDoctor';
import Doctors from './pages/patient/doctors';
import PatientSettings from './pages/patient/settings';
import EditDoctor from './pages/patient/EditDoctor';
import DoctorDetail from './pages/patient/DoctorDetail';
import KnowMore from './pages/patient/know-more/KnowMore';
import Test from './pages/patient/test';
import AddPrescription from './components/records/AddPrescription';
import AddDoctorNote from './components/records/AddDoctorNote';
import AddMedication from './components/records/AddMedication';
import AddAllergie from './components/records/AddAllergie';
import ActiveProblem from './components/records/ActiveProblem';
import AddActiveProblem from './components/records/AddActiveProblem';
import AddHereditary from './components/records/AddHereditary';
import Hereditary from './components/records/Hereditary';
import Laboratory from './components/records/Laboratory';
import AddLaboratory from './components/records/AddLaboratory';
import DoctorNotes from './components/records/DoctorNote';

//Doctor layouts
import DashboardDoctor from './pages/doctor/dashboard';
import DoctorProfile from './pages/doctor/profile';
import Doctor from './pages/doctor';
import DoctorPatients from './pages/doctor/patients';
import DoctorAppointements from './pages/doctor/Appointments';
import DoctorSettings from './pages/doctor/settings';
import Calendar from './pages/doctor/calendar';
import UpdateAppointment from './pages/doctor/updateAppointment';
import TakeAppointment from './pages/patient/TakeAppointment';
import RecordsDoctor from "./pages/doctor/Records";
import Record from "./components/records/index";
import MedicalRecord from "./components/records/MedicalRecord";
import Medication from "./components/records/Medication";
import Allergie from "./components/records/Allergie";
import AddOldProblem from "./components/records/AddOldProblem";
import OldProblems from "./components/records/OldProblems";
import Prescription from "./components/records/Prescription";
import Register from './pages/auth/Register';
import FaceLog from './pages/auth/FaceLogin';
import FaceRegister from './pages/registration/FaceRegister';
import Upload from './pages/patient/upload';
import Blogs from './pages/doctor/blogs';
import AddBlog from './pages/doctor/AddBlog';
import EditBlog from './pages/doctor/EditBlog';
import BlogDetails from './pages/doctor/BlogDetails';
import {default as BlogDetailsP} from './pages/patient/BlogDetails';

import {default as Scanner} from './pages/doctor/symptoms';
import ProductDetails from './pages/public/ProductDetails';
// ----------------------------------------------------------------------

export default function Router() {
    const currentUser = AuthService.getCurrentUser();
    // Robust role detection for both string and array formats (supports Demo & Production users)
    const userRole = (currentUser?.role || (currentUser?.roles && currentUser.roles[0]) || "").toLowerCase();

    return useRoutes([{
            path: '/',
            children: [
                { path: '', element: < Home / > },
                { path: 'role', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < Role / > },
                { path: 'verification', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < CardVerification / > },
                { path: 'contact', element: < Contact / > },
                { path: 'blog', element: < Blog / > },
                { path: 'shop', element: < Shop / > },
                { path: 'team', element: < Team / > },
                { path: 'price', element: < Price / > },
                { path: 'product-view/:id', element: < ProductDetails / > },
                { path: 'product-view', element: < ProductDetails / > },
                { path: 'login', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < Login / > },
                { path: 'face-login', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < FaceLog / > },
                { path: 'face-register', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < FaceRegister / > },
                { path: 'forgot', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < Forgot / > },
                { path: 'register', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < Register / > },
                { path: 'registration', element: currentUser && userRole.includes('doctor') ? < Navigate to = "/doctor/app" / > : currentUser && userRole.includes('patient') ? < Navigate to = "/patient/app" / > : < Registration / > },
                { path: 'confirm/:confirmationCode', element: < Welcome / > },
                { path: 'resetPassword/:confirmationCode', element: < ResetPassword / > },
                { path: 'upload', element: < Upload / > },


                { path: 'blog-details/:id', element: <BlogDetailsP /> },
                { path: 'settings', element: <PatientSettings /> },
            ]
        },
        {
            path: '/doctor',
            element: currentUser && userRole.includes('doctor') ? <Doctor /> : <Unauthorized />,
            children: [
                { path: 'app', element: <DashboardDoctor /> },
                { path: 'calendar', element: <Calendar /> },
                { path: 'scanner', element: <Scanner /> },
                { path: 'know-more/:result', element: <KnowMore /> },
                { path: 'edit-doctor/:id', element: <EditDoctor /> },
                { path: 'profile', element: <DoctorProfile /> },
                { path: 'patients', element: <DoctorPatients /> },
                { path: 'appointments', element: <DoctorAppointements /> },
                { path: 'update_appointment/:id', element: <UpdateAppointment /> },
                { path: 'add-blog', element: <AddBlog /> },
                { path: 'blogs', element: <Blogs /> },
                { path: 'blog-details/:id', element: <BlogDetails /> },
                { path: 'edit-blog/:id', element: <EditBlog /> },
                { path: 'settings', element: <DoctorSettings /> },


                //records
                {
                    path: "records",
                    element: < RecordsDoctor / > ,
                },
                {
                    path: "record",
                    element: < Record / > ,
                    children: [
                        { path: "medicalrecord/:id", element: < MedicalRecord / > },
                        { path: "prescription/:id", element: < Prescription / > },
                        { path: "addprescription/:id", element: < AddPrescription / > },
                        { path: "medication/:id", element: < Medication / > },
                        { path: "addmedication/:id", element: < AddMedication / > },
                        { path: "allergies/:id", element: < Allergie / > },
                        { path: "addallergie/:id", element: < AddAllergie / > },
                        { path: "oldproblem/:id", element: < OldProblems / > },
                        { path: "addoldproblem/:id", element: < AddOldProblem / > },
                        { path: "activeproblem/:id", element: < ActiveProblem / > },
                        { path: "addactiveproblem/:id", element: < AddActiveProblem / > },
                        { path: "addhereditary/:id", element: < AddHereditary / > },
                        { path: "hereditary/:id", element: < Hereditary / > },
                        { path: "addreslabo/:id", element: < AddLaboratory / > },
                        { path: "reslabo/:id", element: < Laboratory / > },
                        { path: "doctornote/:id", element: < DoctorNotes / > },
                        { path: "addnote/:id", element: < AddDoctorNote / > },


                    ],
                },
            ]
        },
        {
            path: '/patient',
            element: currentUser && userRole.includes('patient') ? < Patient / > : < Unauthorized / > ,
            children: [
                { path: 'app', element: < Dashboard / > },
                { path: 'appointments', element: < Appointments / > },
                { path: 'doctors', element: < Doctors / > },
                { path: 'add-doctor', element: < AddDoctor / > },
                { path: 'doctor-detail/:id', element: < DoctorDetail / > },
                { path: 'profile', element: < Profile / > },
                { path: 'edit-doctor/:id', element: < EditDoctor / > },
                { path: 'symptoms', element: < Symptoms / > },
                { path: 'test', element: < Test / > },
                { path: 'know-more/:result', element: < KnowMore / > },
                { path: 'records', element: < Records / > },
                { path: 'edit-profile', element: < EditProfile / > },
                { path: 'settings', element: < PatientSettings / > },
                { path: 'reset-password', element: < ResetPassword / > },
                { path: 'take-appointment', element: < TakeAppointment / > },
                { path: 'blog-details/:id', element: < BlogDetailsP / > },
            ]
        },
        {
            path: '/admin',
            children: []
        },

    ]);
}