import "./employer.css";
import { BsPeopleFill, BsQuestionOctagonFill } from "react-icons/bs";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
const Employer = () => {
  return (
    <div className="employer-container">
      <div className="sContainer">
        <div className="eTitle">
          <h1>
            Whatever your hiring plans are, <span>Steadfast</span> can find{" "}
            <br /> the right person for your business.
          </h1>
        </div>
        <div className="steadfast-cards">
          <div className="steadfast-card">
            <h3>
              Who We Place
              <BsPeopleFill className="sIcon" />
            </h3>
            <p>
              We're a modern and progressive recruitment organization that
              specializes in finding the best people as per your need. Our
              recruiters will determine if candidates truly meet the client's
              needs by leveraging all information available including resume,
              references, social media, technical and behavioral reviews. We
              work for every level of the hierarchy from entry-level to the
              director position. And recruit all types of computer, mechanical,
              electrical engineers, business analysts, financial professionals,
              Pharmaceutical and Life Sciences professionals, Chemicals, Energy,
              Oil and Gas Professionals, and many more!
            </p>
          </div>
          <div className="sep"></div>
          <div className="steadfast-card">
            <h3>
              Why Steadfast
              <BsQuestionOctagonFill className="sIcon" />
            </h3>
            <p>
              At Steadfast International Services, our aim is to offer you best
              recruiting services that show you that we really care! Not only
              have we got the trendiest recruitment organization, but we can
              also guarantee that we are one of the finest. We started as a
              small business in USA, and our aim is to continue providing our
              clients with candidates that fulfill their demands and needs. Our
              clients and candidates are our top priority and through our
              services we work hard towards building long-lasting and meaningful
              relations with them.
            </p>
          </div>
        </div>
      </div>
      <div className="questions-container">
        <div className="qTitle">
          <h1>Frequently Asked Questions</h1>
          <span>Most frequent questions and answers</span>
        </div>

        <div className="questions-wrapper">
          <div className="qa">
            <h2 className="question">
              What type of candidates can I hire through you?
            </h2>
            <p className="answer">
              We work for every level of the hierarchy from entry-level to the
              director position. And recruit all types of computer, mechanical,
              electrical engineers, business analysts, financial professionals,
              Restaurant professionals, Administrative professionals,
              Telecommunications, Pharmaceutical and Life Sciences
              professionals, Chemicals, Energy, Oil and Gas Professionals, and
              many more!
            </p>
          </div>
          <div className="qa">
            <h2 className="question">
              What is your recruitment agency fee structure?
            </h2>
            <p className="answer">
              Our recruitment fee structure depends on the type of hire you are
              looking to make. These include permanent hiring fees, temp to perm
              fees, summer internships, and a range of other recruitment
              services. We also offer a flexible recruitment pricing structure
              depending on whether you are looking to make a one-off hire or
              multiple hires. If you would like to find out more about our
              recruitment agency fees, please get in touch today on +1
              929-567-2541.
            </p>
          </div>
          <div className="qa">
            <h2 className="question">
              Will I be speaking to a different person every time?
            </h2>
            <p className="answer">
              Relationships are the key to our success so we assign a dedicated
              recruitment consultant to you who will take the time to get to
              know your specific needs as a business. All of our recruitment
              consultants are supported by a resourcer who will actively search
              the job boards for candidates that would be suitable for your
              roles, a candidate management team who screen thousands of CVs and
              meet with suitable candidates and a business operations team who
              can cater for any bespoke management reporting you require.
            </p>
          </div>

          <div className="qa">
            <h2 className="question">Do you just work on temporary roles?</h2>
            <p className="answer">
              No, we have a range of candidates ready to go who can work in
              temporary, permanent and fixed-term contract positions. We focus
              on the long-term needs of clients.
            </p>
          </div>
          <div className="qa">
            <h2 className="question">Do you work on roles USA-wide?</h2>
            <p className="answer">
              We only work on roles based in United States.
            </p>
          </div>
          <div className="qa">
            <h2 className="question">
              Do you solely work with USA candidates?
            </h2>
            <p className="answer">Yes</p>
          </div>
        </div>
      </div>
      <div className="contactUs-container">
        <div className="cDetails">
          <h1>Request for Talent</h1>
          <p>
            If you want us to find talent for you or for your organization,
            contact us today. Let’s talk!
          </p>
          <Link to="/contact">
            <button>CONTACT DETAILS</button>
          </Link>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/steadfast_images/contact.jpg`}
          alt="contact"
          className="cImg"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Employer;
