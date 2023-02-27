import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import JoinUs from "./pages/joinUs/JoinUs";
import Employer from "./pages/employer/Employer";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
