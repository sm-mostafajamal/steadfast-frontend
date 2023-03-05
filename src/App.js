import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import JoinUs from "./pages/joinUs/JoinUs";
import Employer from "./pages/employer/Employer";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Job from "./pages/Job/Job";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home data={data} />} />
          <Route path="/jobs/:id" element={<Job data={data} />} />
          <Route path="/jobs" element={<Jobs data={data} />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/join-us" element={<JoinUs data={data} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
