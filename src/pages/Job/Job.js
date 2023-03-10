import React, { useEffect, useRef, useState } from "react";
import { FaLocationArrow, FaUserClock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import "./job.css";

const Job = ({ data }) => {
  const [show, setShow] = useState(false);
  const id = useParams().id;
  const job = data.find((j) => Number(id) === j.id);
  const style = { display: show ? "" : "none" };
  // To view from the beginning for the pagte
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // To scroll to the form component when clicking "Apply for job button"
  const resumeFormRef = useRef(null);
  const handleClick = () => {
    setShow(!show);
    resumeFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="job-container">
        <h1>{job.title}</h1>
        <div className="job-heading">
          <span>
            <FaUserClock className="jobIcon" />
            {job.jobType}
          </span>
          <span>
            <FaLocationArrow className="jobIcon" />
            {job.location}
          </span>
        </div>
        <div className="job-desc">{job.jd}</div>
        <div>
          <div className="applyBtn">
            <button onClick={() => handleClick()}>Apply for job</button>
          </div>
          <form style={style} action="">
            <div className="contactForm">
              <Form />
            </div>
            <div className="resume">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                accept=".pdf, .doc, .docx, application/msword"
                name="resume"
                id="resume"
              />
            </div>
            <div className="applyBtn">
              <button type="submit">Send application</button>
            </div>
          </form>
        </div>
      </div>
      <div ref={resumeFormRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Job;
