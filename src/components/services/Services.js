import "./services.css";

const Services = () => {
  return (
    <div className="service-container">
      <div className="for-jobseekers">
        <div className="jsDetails">
          <h1>FOR JOBSEEKERS</h1>
          <h4>We’re Here To Help You Find Work</h4>
          <p>
            Our Talent Acquisition agents can work together with you, and
            discuss opportunities with the best companies in the market. There
            are on-site and remote opportunities that you can choose from. Join
            our growing network of professionals and contact us today.
          </p>
          <button> VIEW ALL JOBS</button>
        </div>
        <div className="jsCover">
          <img
            src={`${process.env.PUBLIC_URL}/steadfast_images/jsCover.jpg`}
            alt="job seekers"
            className="jsImg"
          />
        </div>
      </div>
      <div className="for-employers">
        <div className="feCover">
          <img
            src={`${process.env.PUBLIC_URL}/steadfast_images/forEmployers.jpg`}
            alt="for employers"
            className="feImg"
          />
        </div>
        <div className="feDetails">
          <h1>FOR EMPLOYERS</h1>
          <h4>Discover The Best Talent</h4>
          <p>
            Our industry development experts will understand your business needs
            and can connect you with the top talents to support your project and
            organizational needs on a temporary or long-term basis. Our
            professionals are available for on-site, hybrid, remote or work from
            home work all over the country. Contact us today to join our growing
            network of professionals.
          </p>
          <button>EXPLORE MORE DETAILS</button>
        </div>
      </div>
      <div className="our-expertise"></div>
    </div>
  );
};

export default Services;
