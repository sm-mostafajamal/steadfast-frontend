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
  /* background: linear-gradient(to right, #000000 0%, #f1b502 37%, #00b077 100%);
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
          <Title>Step 1. Sales Call</Title>
          <Desc>
            Meet with your Solutions Consultant to identify your exact needs and
            pain points to determine if we are fit. If so, we’ll send you an
            agreement to sign and you’ll be assigned a Client Success
            Consultant.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <RiUserSearchLine />
          </Icon>
          <Title>Step 2. Discovery Call</Title>
          <Desc>
            Meet with your Client Success Consultant to deep dive into your
            tasks, tools, culture and personality requirements to ensure we
            match you with the right talent.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <MdOutlinePeopleAlt />
          </Icon>
          <Title>Step 3. Placement Process</Title>
          <Desc>
            Now, for our Secret Sauce. Your Client Success Consultant will meet
            with the Placement Team to discuss, vet and select 2-3 top
            candidates from our bench of nearly 2,000 U.S.-based talent to then
            interview and select the best match for you. The best part? On
            average, our clients are matched within one week.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <MdOutlinePhonelinkRing />
          </Icon>
          <Title>Step 4. Kickoff Call</Title>
          <Desc>
            You, your Client Success Consultant and your talent will have a
            kickoff call – the official start to your partnership – to meet your
            talent, set initial goals, discuss communication plans, and set
            yourselves up for success.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <FaHandshake />
          </Icon>
          <Title>Step 5. Onboarding</Title>
          <Desc>
            Your Client Success Consultant stays close to provide high-touch
            relational service to guide you through our proven onboarding
            process.
          </Desc>
        </Step>
        <Step>
          <Icon>
            <MdFace />
          </Icon>
          <Title>Step 6. Nurturing</Title>
          <Desc>
            You will have ongoing check-ins to support both you and your talent
            throughout your partnership with BELAY.
          </Desc>
        </Step>
      </Wrapper>
    </Container>
  );
};

export default Process;
