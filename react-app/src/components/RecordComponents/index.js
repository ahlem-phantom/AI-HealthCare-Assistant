import { Outlet } from "react-router-dom";
import Record from "../../pages/doctor/Record";

const Home = () => {
  return (
    <div className="">
      <Record />
      <Outlet />
    </div>
  );
};

export default Home;
