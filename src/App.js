import { BrowserRouter, Routes, Route } from "react-router-dom";
import { jobs } from "./data";
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

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarMenu />}>
          <Route index element={<Home data={jobs} />} />
          <Route path="/jobs/:id" element={<Job data={jobs} />} />
          <Route path="/jobs" element={<Jobs data={jobs} />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/join-us" element={<JoinUs data={jobs} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-steadfast" element={<Hire />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/virtual-assistant" element={<Assistant />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
