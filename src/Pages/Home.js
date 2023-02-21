import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import jobs from "../data";

const Home = () => {
  return (
    <div>
      <header>
        <div className="cover-text">
          <h1>
            Where you want to go <br></br> next on your career <br></br> path?
          </h1>
          <p>WE CONNECT TALENTED PEOPLE WITH GREAT COMPANIES.</p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/steadfast_images/steadfast-cover.png`}
          alt=""
          className="cover"
        />
      </header>

      <main className="home-main">
        <form>
          <h2>Find a job in:</h2>
          <Nav className="job-menu">
            <Link>Marketing</Link>
            <Link>Technology</Link>
            <Link>Sales</Link>
            <Link>Engineering</Link>
          </Nav>
          <div className="d-flex">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type={"search"} className="search" placeholder="Search" />
          </div>
        </form>

        <h2 className="heading">
          Our Latest <br></br> Jobs:
        </h2>
        <div className="jobs">
          <Row>
            {jobs.map((job) => (
              <Col sm={6} md={4} lg={3} className="mb-3" key={job.id}>
                <Card className="job-card w-100 h-100">
                  <Card.Body className="cardBody">
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>
                      <p>{job.skills}</p>
                      <p>{job.Location}</p>
                      <p>{job.compensation}</p>
                      <p>{job.jobNature}</p>
                    </Card.Text>

                    <Button variant="primary" className="card-btn">
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </main>
    </div>
  );
};
export default Home;
