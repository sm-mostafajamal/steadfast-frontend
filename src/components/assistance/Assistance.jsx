import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaHandsHelping } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";

const Container = styled.div`
  background-color: #f2f2f2;
  @media (min-width: 425px) and (max-width: 768px) {
    .assitance-heading {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 375px) and (max-width: 424px) {
    .assitance-heading {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .assitance-heading {
      padding: 50px 0;
      font-size: 1.3rem;
    }
  }
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #212529;
  padding: 50px 0;
  text-transform: capitalize;
  letter-spacing: 1px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: max-content;
  flex-wrap: wrap;
`;
const Icon = styled.div`
  font-size: 5rem;
`;
const Virtual = styled.div`
  flex: 1;
  padding: 30px;

  &:hover {
    background-image: url(${require(`../../assets/virtual.png`)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Consulting = styled.div`
  flex: 1;
  padding: 30px;
  &:hover {
    background-image: url(${require(`../../assets/consulting.png`)});
    /* background-size: 100% 100%; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.3);

    /* opacity: 0.8; */
    /* color: white; */
  }
`;
const BusinessDev = styled.div`
  flex: 1;

  padding: 30px;
  &:hover {
    background-image: url(${require(`../../assets/business.png`)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const Header = styled.h1`
  font-size: 28px;
  letter-spacing: 3px;
  /* color: #444444; */
`;
const Desc = styled.p`
  letter-spacing: 1px;
  font-weight: 500;
  /* color: #7b7b7b; */
`;

const Assistance = () => {
  return (
    <Container>
      <Heading className="assitance-heading">
        Having a remote work team can greatly impact and enhance your workday.
      </Heading>
      <Wrapper className="assistance-wrapper">
        <Virtual>
          <Icon>
            <TfiHeadphoneAlt />
          </Icon>
          <Header>Virtual Assistant Services</Header>
          <Desc>
            Committed workers that contribute their experience and knowledge to
            your organization. They serve as your own personal superheroes.
            There is no need for a phone booth.
          </Desc>
        </Virtual>
        <Consulting>
          <Icon>
            <FaHandsHelping />
          </Icon>
          <Header>Workforce Management Consulting</Header>
          <Desc className="test">
            We work closely with our clients to understand their unique
            challenges and develop customized solutions that meet their specific
            needs to achieve their goals. our goal is to help our clients
            succeed by providing them with the expertise and resources they need
            to overcome obstacles and achieve sustainable growth.
          </Desc>
        </Consulting>
        <BusinessDev>
          <Icon>
            <MdBusiness />
          </Icon>
          <Header>Business Development</Header>
          <Desc>
            We offer business development services to help businesses grow and
            expand their operations. As business development consultants, we
            work with our clients to identify new opportunities and develop
            strategies to capitalize on them.We help our clients develop
            sustainable growth plans that align with their business objectives
            and support their long-term success.
          </Desc>
        </BusinessDev>
      </Wrapper>
    </Container>
  );
};

export default Assistance;
