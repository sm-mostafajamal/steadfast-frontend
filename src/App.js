import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import JoinUs from "./pages/joinUs/JoinUs";
import Employer from "./pages/employer/Employer";
import Contact from "./pages/contact/Contact";
import NavbarMenu from "./components/navbar/NavbarMenu";
import Job from "./pages/Job/Job";
import Hire from "./pages/hire/Hire";
import Applicant from "./pages/applicant/Applicant";
import Assistant from "./pages/assistant/Assistant";
import Blog from "./pages/blog/Blog";
import { useEffect } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarMenu />}>
          <Route index element={<Home />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-steadfast" element={<Hire />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/virtual-assistant" element={<Assistant />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
