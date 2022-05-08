import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import UpperNavbar from "./Components/Upper-Navbar/upperNavbar";
import Footer from "./Components/Footer/footer";
import ScrollTopBtn from "./Components/scrollTopButton/scrollTopBtn";
import Routers from "./Routes/routes";
import ScrollTop from "./scrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollTop />

      <div className="wrapper">
        {/* Full Navbar */}
        <UpperNavbar />

        <ScrollTopBtn />

        <div className="App">
          {/* Full Routers */}
          <Routers />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
