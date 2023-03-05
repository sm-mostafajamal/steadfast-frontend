import "./joinUs.css";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
const JoinUs = ({ data }) => {
  return (
    <div>
      <div className="joinUs-cointainer">
        <div className="joinUs-heading">
          <h1>
            Careers at Steadfast <br /> <span>Create your future</span>
          </h1>
          <span>Open Vacancies</span>
        </div>
        <div className="joinUs-details">
          <h1>
            Endless
            <br />
            opportunities
          </h1>
          <p>
            Launch your career to the next level by joining our international
            network of recruiters. Our talent team is dedicated to finding
            career creators like you. They’re a friendly bunch, who will guide
            you through our process, with feedback and advice at each step.
          </p>
        </div>
        <div className="vacancies">
          <h1>
            Open vacancies at <span>Steadfast</span>
          </h1>
          <div className="jobCards-container">
            {data.slice(0, 8).map((job) => (
              <Card job={job} key={job.id} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinUs;
