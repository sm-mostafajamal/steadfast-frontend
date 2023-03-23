import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  background: rgb(241, 196, 2);
  background: linear-gradient(
    313deg,
    rgba(241, 196, 2, 0.867366929682029) 15%,
    rgba(1, 177, 120, 0.9345938204383316) 100%
  );
  position: absolute;
  margin-top: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  /* position: absolute; */
  /* display: block; */
  /* height: 100vh; */
  /* text-align: center; */
  height: 100vh;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
  .links {
    margin-bottom: 40px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    cursor: pointer;
  }
  .links:hover {
    color: black;
    transition: all 0.5s ease;
    border-bottom: 5px solid #f1b502;
  }
`;
const SocialLinks = styled.div``;
const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Links>
          <Link to="/hire-steadfast" className="links">
            Hire Steadfast
          </Link>
          <Link to="/virtual-assistant" className="links">
            Virtual Assistants
          </Link>
          <Link to="/join-us" className="links">
            JOIN US
          </Link>
          <Link to="/contact" className="links">
            CONTACT
          </Link>
          <Link to="/blog" className="links">
            BLOG
          </Link>
        </Links>
        <SocialLinks>
          <div className="follow">
            <Links>
              <Link to="/jobs" className="links">
                JOBS
              </Link>
              <Link to="/employer" className="links">
                EMPLOYER
              </Link>
            </Links>
            <h3>Stay Connected!</h3>
            <ul>
              <li>
                <Link to="https://www.linkedin.com/company/steadfastllc">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/Steadfast-International-Services-109044021870409/">
                  <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FaMailBulk />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <BsTelephoneFill />
                </Link>
              </li>
            </ul>
          </div>
        </SocialLinks>
      </Wrapper>
    </Container>
  );
};

export default Menu;
