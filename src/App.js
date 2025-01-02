import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Login from "./login/Login";
import Destination from "./pages/destination/Destination";
import Home from "./pages/home/Home";
import VerifyPage from "./pages/home/verifypage/VerifyPage";
import OurProducts from "./pages/ourProduct/OurProducts";
import Universities from "./pages/universitites/Universities";
import SignIn from "./signin/SignIn";
import UserForm from "./useForm/UseForm";
import OurServices from "./pages/ourServices/OurServices";
import Partners from "./pages/partners/Partners";
import AnimationIamge from "./pages/animationimage/AnimationIamge";

function Layout() {
  const location = useLocation();

  // Paths where Header and Footer should not be displayed
  const hideHeaderFooter = [
    "/sign-up",
    "/sign-in",
    "/info",
    "/verification",
  ].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/our-product" element={<OurProducts />} /> */}
        <Route path="/info" element={<UserForm />} />
        <Route path="/verification" element={<VerifyPage />} />
        {/* <Route path="/destination" element={<Destination />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/image" element={<AnimationIamge />} /> */}
        <Route path="/partners" element={<Partners />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
