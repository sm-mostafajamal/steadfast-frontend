import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaHandsHelping } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";

const Container = styled.div`
  /* width: 100%; */
  background-color: #f2f2f2;
`;
const Wrapper = styled.div`
  display: flex;
  height: max-content;
`;
const Icon = styled.div`
  font-size: 5rem;
`;
const Virtual = styled.div`
  flex: 1;
  padding: 30px;
  &:hover {
    background-image: url(${require(`../../assets/virtual_a.png`)});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Consulting = styled.div`
  flex: 1;
  padding: 30px;
  &:hover {
    background-image: url(${require(`../../assets/consulting_a.png`)});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    /* color: white; */
  }
`;
const BusinessDev = styled.div`
  flex: 1;
  padding: 30px;
  &:hover {
    background-image: url(${require(`../../assets/business_a.png`)});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
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
`;

const Assistance = () => {
  return (
    <Container>
      <Wrapper>
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
          <Desc>
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
