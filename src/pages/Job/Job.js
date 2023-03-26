import React, { useEffect, useRef, useState } from "react";
import { FaUserClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
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

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
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
            <IoLocation className="jobIcon" />
            {job.location}
          </span>
        </div>
        <div className="job-desc">
          <section>
            <span>Salary: </span>
            {job.compensation}
          </section>
          <section>
            <span>Skills: </span>
            {job.skills}
          </section>
          <section>
            <span>Key Selling Points: </span>
            {job.keySellingPoints}
          </section>
          <section>
            <span>Job Context: </span>
            {job.jobContext}
          </section>
          <section>
            <span>Additional Requirements: </span>
            {job.additionalRequirements}
          </section>
          <section>
            <span>Compensation & Other Benefits: </span>
            {job.compensationAndBenefits}
          </section>
        </div>
        <div>
          <div className="applyBtn">
            <button onClick={() => handleClick()}>Apply for job</button>
          </div>
          <form style={style} target="_blank" action="" method="POST">
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
                required
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
