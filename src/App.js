import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/our-product" element={<OurProducts />} />
          <Route path="/info" element={<UserForm />} />
          <Route path="/verification" element={<VerifyPage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/image" element={<AnimationIamge />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <SignIn /> */}
      {/* <UserForm /> */}
      {/* <VerifyPage /> */}
      {/* <Destination /> */}
      {/* <Universities /> */}
      {/* <OurProducts /> */}
    </div>
  );
}

export default App;
