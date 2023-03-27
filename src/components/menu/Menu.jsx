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
  @media (min-width: 375px) and (max-width: 424px) {
    .menu-wrapper {
      flex-direction: column;
    }
    .links {
      font-size: 1rem !important;
      margin-bottom: 1rem !important;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .menu-wrapper {
      flex-direction: column;
    }
    .links {
      font-size: 1rem !important;
      margin-bottom: 1rem !important;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  flex: 1;

  .links {
    margin-bottom: 40px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
      color: black;
    }
  }
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
const Menu = () => {
  return (
    <Container>
      <Wrapper className="menu-wrapper">
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
