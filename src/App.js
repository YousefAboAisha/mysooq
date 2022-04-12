import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UpperNavbar from "./Components/Upper-Navbar/upperNavbar";
import { lazy } from "react";
import Footer from "./Components/Footer/footer";
import ScrollTopBtn from "./Components/scrollTopButton/scrollTopBtn";

function App() {
  const Home = lazy(() => import("./Containers/Home/homeLayout"));
  const RealEstates = lazy(() =>
    import("./Containers/RealEstates/realEstates")
  );
  const Cars = lazy(() => import("./Containers/Cars/cars"));
  const Trades = lazy(() => import("./Containers/Trades/trades"));
  const Services = lazy(() => import("./Containers/Services/services"));
  const Freelancers = lazy(() =>
    import("./Containers/Freelancers/freelancers")
  );
  const Jobs = lazy(() => import("./Containers/Jobs/jobs"));

  return (
    <BrowserRouter>
      <div className="container">
        <UpperNavbar />
        <ScrollTopBtn />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="realEstates" element={<RealEstates />} />
            <Route path="cars" element={<Cars />} />
            <Route path="trades" element={<Trades />} />
            <Route path="services" element={<Services />} />
            <Route path="freelancers" element={<Freelancers />} />
            <Route path="jobs" element={<Jobs />} />
            <Route element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
