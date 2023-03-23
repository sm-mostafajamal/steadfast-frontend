import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { RiUserSearchLine } from "react-icons/ri";
import {
  MdFace,
  MdOutlinePeopleAlt,
  MdOutlinePhonelinkRing,
} from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

const Container = styled.div``;
const Header = styled.h1`
  text-align: center;
  margin-top: 5rem;
  color: #444444;
`;
const Wrapper = styled.div`
  display: flex;
  height: max-content;
  padding: 40px;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;
const Step = styled.div`
  width: 30%;
  padding: 50px;
  border-radius: 5px;
  &:hover {
    /* background: rgb(241, 196, 2);
    background: linear-gradient(
      313deg,
      rgba(241, 196, 2, 0.867366929682029) 15%,
      rgba(1, 177, 120, 0.9345938204383316) 100%
    ); */
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    color: white;
  }
`;
const Icon = styled.div`
  /* background: -webkit-linear-gradient(
    to right,
    #000000 0%,
    #f1b502 37%,
    #00b077 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  font-size: 40px;
`;
const Title = styled.div`
  display: block;
  font-size: 1.2rem;
  margin: 20px 0;
  letter-spacing: 2px;
  font-weight: 700;
  /* color: #444444; */
`;
const Desc = styled.div`
  letter-spacing: 1px;
  /* color: #8d8d8d; */
  font-weight: 500;
`;

const Process = () => {
  return (
    <Container>
      <Header>The Process</Header>
      <Wrapper>
        <Step>
          <Icon>
            <FiPhoneCall />
          </Icon>
          <Title>Step 1. Commercial Inquiry</Title>
          <Desc>
            Schedule a meeting with your Solutions Consultant to discuss and
            pinpoint your specific requirements and challenges, in order to
            evaluate if we are a suitable match for you. If we are, we will
            forward an agreement for you to sign and assign a Client Success
            Consultant to assist you.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <RiUserSearchLine />
          </Icon>
          <Title>Step 2. Exploratory Conversation.</Title>
          <Desc>
            Arrange a meeting with your Client Success Consultant to thoroughly
            explore your needs in terms of tasks, tools, company culture, and
            personal preferences, so that we can find the most suitable talent
            for you.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <MdOutlinePeopleAlt />
          </Icon>
          <Title>Step 3. Placement Process</Title>
          <Desc>
            Our Secret Sauce involves the Client Success Consultant
            collaborating with the Placement Team to carefully evaluate and
            choose the most suitable 2-3 candidates from our pool of nearly
            2,000 talented professionals based in the U.S. Once selected, these
            candidates will be interviewed and the best match will be chosen for
            you. The most exciting part is that on average, our clients are
            matched with their ideal candidate in just one week.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <MdOutlinePhonelinkRing />
          </Icon>
          <Title>Step 4. Kickoff Call</Title>
          <Desc>
            A kickoff call will mark the official beginning of your partnership
            with your Client Success Consultant and talent, during which you'll
            get to know your talent, establish initial objectives, talk about
            communication strategies, and prepare yourselves for a successful
            collaboration.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <FaHandshake />
          </Icon>
          <Title>Step 5. Onboarding</Title>
          <Desc>
            Your consultant for client success will remain in close proximity to
            offer personalized and attentive service, as they assist you in
            navigating our established onboarding procedure.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <MdFace />
          </Icon>
          <Title>Step 6. Nurturing</Title>
          <Desc>
            Throughout your collaboration with STEADFAST, you can expect to
            receive continuous check-ins to provide support for both you and
            your talent.
          </Desc>
        </Step>
      </Wrapper>
    </Container>
  );
};

export default Process;
