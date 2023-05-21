import styled from "styled-components";
import { VscOrganization } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  width: 100%;
  @media (min-width: 425px) and (max-width: 768px) {
    .hire-title {
      font-size: 1.6rem !important;
    }
    .hire-form {
      width: 90%;
    }
  }
  @media (min-width: 375px) and (max-width: 424px) {
    .hire-title {
      font-size: 1.5rem !important;
    }
    .hire-form {
      width: 95%;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .hire-title {
      font-size: 1.4rem !important;
    }
    .hire-form {
      width: 95%;
    }
  }
  /* background: rgb(241, 196, 2);
  background: linear-gradient(
    313deg,
    rgba(241, 196, 2, 0.867366929682029) 15%,
    rgba(1, 177, 120, 0.9345938204383316) 100%
  ); */
`;
const Steps = styled.div`
  height: fit-content;
  background-color: #b4f7d4;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  /* gap: 20px; */
`;
const Step = styled.div`
  width: 400px;
  padding: 20px;
`;
const Icon = styled.div`
  font-size: 6rem;
  text-align: center;
`;

const Heading = styled.h6`
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  color: #2d3133;
  text-transform: uppercase;
`;

const Explanation = styled.p`
  text-align: center;
  color: #2d3133;
  letter-spacing: 1px;
  font-weight: 500;
`;
const Title = styled.p`
  width: 70%;
  margin: auto;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 5rem;
`;
const SubTitle = styled.span`
  display: block;
  width: fit-content;
  margin: auto;
  font-size: 18px;
  margin-bottom: 50px;
`;
const FormContainer = styled.div`
  width: 60%;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 6rem;
  -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
  margin: auto;
`;
const Label = styled.label`
  font-size: 17px;
  font-weight: 500;
`;
const Input = styled.input`
  height: 40px;
  border-radius: 5px;

  border: none;
  background-color: #f1f1f1;
`;
const Required = styled.span`
  color: #c02c0b;
  font-style: italic;
  font-weight: 400;
`;
const Select = styled.select`
  height: 40px;
  border: none;
  padding-left: 15px;
  font-size: 18px;
  color: #33475b;
`;
const Button = styled.button`
  width: 100px;
  border: none;
  background-color: #009d6a;
  color: white;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  height: 40px;
  margin-top: 20px;
  &:hover {
    background-color: #b4f7d4;
    color: black;
  }
`;

const Hire = () => {
  return (
    <Container>
      <Steps>
        <Step>
          <Icon>
            <VscOrganization />
          </Icon>
          <Heading>1. Tell Us About Yourself And Your Organization</Heading>
          <Explanation>
            Complete this form to talk with someone on our team. They’ll
            discover your unique needs so we understand how to help you be more
            successful.
          </Explanation>
        </Step>
        <Step>
          <Icon>
            <FaRegHandshake />
          </Icon>
          <Heading>2. Meet Your Client Success Consultant</Heading>
          <Explanation>
            Once you sign your custom agreement, a Client Success Consultant
            guides you every step of the way.
          </Explanation>
        </Step>
        <Step>
          <Icon>
            <RiTeamLine />
          </Icon>
          <Heading>3. Work With Your New Virtual Team Member</Heading>
          <Explanation>
            We embark on a proven search process to find the right person to
            help grow your business.
          </Explanation>
        </Step>
      </Steps>
      <Title className="hire-title">
        The easiest thing for you to accomplish today is to get started.
      </Title>
      <SubTitle>All fields required</SubTitle>
      <FormContainer className="hire-form">
        <Form>
          <Label>
            First Name <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            Last Name <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            What is your email address? <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            What is your organization's name? <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            Please enter your valid phone number.{" "}
            <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            Where are you located? <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            Where can we find your website? <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label htmlFor="role">
            What is your role/title? <Required> (Required)</Required>
          </Label>
          <Select id="role" required>
            <option value="">Please Select</option>
            <option value="founder">Founder (Co-Founder)</option>
            <option value="owner">Owner</option>
            <option value="ceo">CEO</option>
            <option value="cfo">CFO</option>
            <option value="coo">COO</option>
            <option value="president">President</option>
            <option value="vicePresident">Vice President</option>
            <option value="manager">Manager</option>
            <option value="operations">Director of Operations</option>
            <option value="director">Director</option>
            <option value="executivePastor">Executive Pastor</option>
            <option value="paster">Paster</option>
            <option value="other">Other</option>
          </Select>
          <Label htmlFor="organization">
            What industry is your organization a part of?{" "}
            <Required> (Required)</Required>
          </Label>
          <Select id="organization" required>
            <option value="">Please Select</option>
            <option value="advertising">Advertising</option>
            <option value="business">Business Services</option>
            <option value="church">Church</option>
            <option value="construction">Construction</option>
            <option value="consulting">Consulting</option>
            <option value="consumer">Consumer</option>
            <option value="energy">Energy</option>
            <option value="entertainment">Entertainment</option>
            <option value="financial">Financial</option>
            <option value="government">Government</option>
            <option value="healthcare">Healthcare</option>
            <option value="legal">Legal</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="marketing">Marketing</option>
            <option value="nonProfit">Non-Profit Org</option>
            <option value="personal">Personal</option>
            <option value="publishing">Publishing/Authors</option>
            <option value="restaurant">Restaurant/Retail</option>
            <option value="school">School (Education)</option>
            <option value="technology">Technology</option>
            <option value="transportation">Transportation/Travel</option>
            <option value="other">Other</option>
          </Select>
          <Label htmlFor="companySize">
            What is your company size? <Required> (Required)</Required>
          </Label>
          <Select id="companySize" required>
            <option value="">Please Select</option>
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="11-25">11-25</option>
            <option value="26-50">26-50</option>
            <option value="50-99">50-99</option>
            <option value="100-199">100-199</option>
            <option value="200+">200+</option>
          </Select>
          <Label htmlFor="service">
            What service are you most interested in?{" "}
            <Required> (Required)</Required>
          </Label>
          <Select id="service" required>
            <option value="">Please Select</option>
            <option value="virtualAssistant">Virtual Assistant</option>
            <option value="consulting">Consulting</option>
            <option value="businessDevelopment">Business Development</option>
          </Select>
          <Button>SUBMIT</Button>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  );
};

export default Hire;
