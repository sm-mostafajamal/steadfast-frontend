import React, { useEffect, useRef, useState } from "react";
import { FaUserClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./job.css";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { createApplyFormData } from "../../server/requests";

const Job = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // To view from the beginning for the pagte
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    resume: null,
  });
  const [show, setShow] = useState(false);
  const jobs = useSelector(({ jobs }) => jobs);
  const id = useParams().id;
  const job = jobs.find((j) => id === j.id);
  const resumeFormRef = useRef(null); // To scroll to the form component when clicking "Apply for job button"

  const queryClient = useQueryClient();
  const createNewForm = useMutation(createApplyFormData, {
    onSuccess: (newApplied) => {
      const applied = queryClient.getQueryData("applied");
      queryClient.setQueryData("applied", applied.concat(newApplied));
    },
  });

  // Handle Buttons
  const handleClick = () => {
    setShow(!show);
    resumeFormRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleApplyForm = (e) => {
    e.preventDefault();
    createNewForm.mutate({
      id: Math.round(Math.random() * 100000),
      jobTitle: job.title,
      ...form,
    });
    setForm({
      ...form,
      name: "",
      email: "",
      number: "",
      message: "",
      resume: null,
    });
    // createNewForm.mutate({ form });
  };
  const handleResume = () => {
    resumeFormRef.current?.click();
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
            <span>Job Responsibilities: </span>
            {job.jobResponsibilities}
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
          <button
            className="applyBtn"
            onClick={handleClick}
            ref={resumeFormRef}
          >
            Apply for job
          </button>

          <form
            style={{ display: show ? "" : "none" }}
            action=""
            className="contactForm"
            onSubmit={handleApplyForm}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name*"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              // required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              // required
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Contact Number*"
              value={form.number}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              // required
            />
            <textarea
              name="message"
              id="message"
              cols="100"
              rows="10"
              placeholder="How can we help?*"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />

            <span
              className="resume"
              htmlFor="resume"
              style={{ fontWeight: "bold" }}
              onClick={handleResume}
            >
              {form.resume ? form.resume.name : "Click to upload Resume"}
            </span>
            <input
              ref={resumeFormRef}
              style={{ display: "none" }}
              type="file"
              accept=".pdf, .doc, .docx, application/msword"
              name="resume"
              id="resume"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.files[0] })
              }
              // required
            />
            <button className="applyBtn" type="submit">
              Send application
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Job;
