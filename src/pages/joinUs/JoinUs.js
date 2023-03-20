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
            Elevate your career to new heights by becoming part of our global
            network of recruiters. Our team of talent specialists is committed
            to identifying individuals with the potential to create successful
            careers, like yourself. They are a welcoming group that will support
            you through our entire process, providing guidance, feedback, and
            advice at every stage.
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
