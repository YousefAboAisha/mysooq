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
export const Add = lazy(() => import("../Containers/AddDetails/addDetails"));
export const Signup = lazy(() => import("../Containers/Signup/signup"));
export const Signin = lazy(() => import("../Containers/Signin/signin"));
export const Search = lazy(() => import("../Containers/Search/search"));
export const PaidAdds = lazy(() => import("../Containers/PaidAdds/paidAdds"));
export const AllRecentAdds = lazy(() =>
  import("../Containers/AllAdds/allAdds")
);
export const CountriesAdds = lazy(() =>
  import("../Containers/CountriesAdds/countriesAdds")
);
// export const Update = lazy(() => import("../Containers/UpdateAdd/updateAdd"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="realestates" element={<RealEstates id={6} />} />
      <Route path="cars" element={<Cars />} id={8} />
      <Route path="trades" element={<Trades />} id={1} />
      <Route path="services" element={<Services />} id={2} />
      <Route path="freelancers" element={<Freelancers />} id={4} />
      <Route path="jobs" element={<Jobs />} id={5} />
      <Route path="newadd" element={<NewAdd />} />
      <Route path="contact" element={<Contactus />} />
      <Route path="about" element={<About />} />
      <Route path="userpolicy" element={<Policy />} />
      <Route path="add/:id" element={<Add />} />
      {/* <Route path="update/:id" element={<Update />} /> */}
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="search/:query" element={<Search />} />
      <Route path="paidadds" element={<PaidAdds />} />
      <Route path="countriesAdds/:cID" element={<CountriesAdds />} />
      <Route path="recentadds" element={<AllRecentAdds />} />
      <Route path={"*"} element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
