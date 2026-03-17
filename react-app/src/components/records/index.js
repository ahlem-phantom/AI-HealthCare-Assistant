import { Outlet } from "react-router-dom";
import Record from "../../pages/doctor/Record";

const Home = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Record />
        <div className="mt-8 pt-8 border-t border-slate-200/60">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
