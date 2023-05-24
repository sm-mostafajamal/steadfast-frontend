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
  @media (min-width: 425px) and (max-width: 768px) {
    .menu-wrapper {
      flex-direction: column;
    }
    .links {
      font-size: 1rem !important;
      margin-bottom: 1rem !important;
    }
  }
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
  padding: 110px 0;
`;
const PageContainer = styled.div`
  flex: 1;
`;
const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  list-style: none;
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

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
const PageLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 100px;
  border: none;
  padding: 5px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: rgb(36, 36, 36);
    color: white;
  }
`;
const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: white;
  }
`;
const Title = styled.span`
  font-size: 24px;
  font-weight: 500;
`;
const SocialLinks = styled.div`
  display: flex;
  margin: 20px 0;
  .social-icon {
    font-size: 30px;
    margin-right: 20px;
  }
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper className="menu-wrapper">
        <PageContainer>
          <PageLinks>
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
          </PageLinks>
        </PageContainer>
        <SocialContainer>
          <PageLinks>
            <Links>
              <Link to="/jobs" className="links">
                JOBS
              </Link>
              <Link to="/employer" className="links">
                EMPLOYER
              </Link>
            </Links>
            <ButtonContainer>
              <ButtonLink to="/register">
                <Button>Register</Button>
              </ButtonLink>
              <ButtonLink to="/login">
                <Button>LOG IN</Button>
              </ButtonLink>
            </ButtonContainer>
          </PageLinks>
          <Title>Stay Connected!</Title>
          <SocialLinks>
            <Link to="https://www.linkedin.com/company/steadfastllc">
              <FaLinkedin className="social-icon" />
            </Link>
            <Link to="https://www.facebook.com/Steadfast-International-Services-109044021870409/">
              <FaFacebookSquare className="social-icon" />
            </Link>
            <Link to="/contact">
              <FaMailBulk className="social-icon" />
            </Link>
            <Link to="/contact">
              <BsTelephoneFill className="social-icon" />
            </Link>
          </SocialLinks>
        </SocialContainer>
      </Wrapper>
    </Container>
  );
};

export default Menu;
