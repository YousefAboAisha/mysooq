import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UpperNavbar from "./Components/Upper-Navbar/upperNavbar";
import Footer from "./Components/Footer/footer";
import ScrollTopBtn from "./Components/scrollTopButton/scrollTopBtn";
import Routers from "./Routes/routes";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
