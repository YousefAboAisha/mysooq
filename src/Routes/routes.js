import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router";

export const Home = lazy(() => import("../Containers/Home/homeLayout"));
export const RealEstates = lazy(() =>
  import("../Containers/RealEstates/realEstatesLayout")
);

export const Cars = lazy(() => import("../Containers/Cars/cars"));
export const Trades = lazy(() => import("../Containers/Trades/trades"));
export const Services = lazy(() => import("../Containers/Services/services"));
export const Freelancers = lazy(() =>
  import("../Containers/Freelancers/freelancers")
);

export const Jobs = lazy(() => import("../Containers/Jobs/jobs"));
export const NewAdd = lazy(() => import("../Containers/NewAdd/newAddLayout"));
export const Contactus = lazy(() =>
  import("../Containers/Contactus/contactLayout")
);

export const About = lazy(() => import("../Containers/About/aboutLayout"));
export const Policy = lazy(() => import("../Containers/Policy/policy"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="realestates" element={<RealEstates />} />
      <Route path="cars" element={<Cars />} />
      <Route path="trades" element={<Trades />} />
      <Route path="services" element={<Services />} />
      <Route path="freelancers" element={<Freelancers />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="newadd" element={<NewAdd />} />
      <Route path="contact" element={<Contactus />} />
      <Route path="about" element={<About />} />
      <Route path="userpolicy" element={<Policy />} />
      <Route element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
