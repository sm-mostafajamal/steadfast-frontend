import "./contact.css";
import Flag from "react-world-flags";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* <div className="heading-container">
        <div className="heading-wrapper">
          <p>
            We’re a knowledgeable team and understand how important it is to
            find the right fit for both companies and people! So, whether you’re
            looking for your next big job, or searching for the perfect addition
            to your team. We’ve got thousands of openings throughout the U.S.
            both remote/work from home and in-person/on-site. We have huge range
            of Hybrid job openings as well.
          </p>
          <span>
            For more information on our services or any type of inquiries, feel
            free to contact us.
          </span>
        </div>
      </div> */}
      <div className="contact-wrapper">
        <div className="office-info">
          <div className="country-icons">
            <div className="country-icon">
              <Flag code="us" height="100" />
              <div className="officeAddress">
                <h5>MAIN OFFICE</h5>
                <span>
                  733 3rd Ave, Floor 16 #1029, New York, NY 10017, United States{" "}
                </span>
                <div className="phoneNo">
                  <IoCallSharp className="pIcon" />
                  <span>+1 929-567-2541</span>
                  <span>+1 929-567-2540</span>
                </div>
              </div>
            </div>
            <div className="country-icon">
              <Flag code="bd" height="115" />
              <div className="officeAddress">
                <h5>BANGLADESH OFFICE</h5>
                <span>
                  Dhaka Uddan, Adabor, Mohammadpur, Dhaka 1207, Bangladesh
                </span>
                <div className="bdPhoneNo">
                  <IoCallSharp className="pIcon" />
                  <span>+880 132-540-9732</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-wrapper">
            <h1>Contact us</h1>
            <form method="post" action="" className="contactForm">
              <Form />
            </form>
            <div className="policy">
              <label htmlFor="policy">Privacy Policy *</label>
              <span>
                <input type="checkbox" name="policy" id="policy" />I consent to
                having this website store my submitted information so Steadfast
                can respond to my inquiry.
              </span>
              <button className="submit">CONTACT DETAILS</button>
            </div>
          </div>
        </div>
      </div>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.389136556233!2d-73.9724185!3d40.7534652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fac6e065b6d%3A0x254cd8912d8e3602!2sSteadfast%20International%20Services%2CLLC!5e0!3m2!1sen!2sbd!4v1678917693508!5m2!1sen!2sbd"
          title="733 3rd Ave Floor 16 #1029, New York, NY 10017, US"
          width="600"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
