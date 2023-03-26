import styled from "styled-components";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  width: 100%;
  @media (min-width: 425px) and (max-width: 768px) {
    .applicant-title {
      font-size: 1.6rem !important;
    }
    .applicant-form {
      width: 90%;
    }
  }
  @media (min-width: 375px) and (max-width: 424px) {
    .applicant-title {
      font-size: 1.5rem !important;
    }
    .applicant-form {
      width: 95%;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .applicant-title {
      font-size: 1.4rem !important;
    }
    .applicant-form {
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
const Textarea = styled.textarea`
  border-radius: 5px;
  border: none;
  background-color: #f1f1f1;
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
const Applicant = () => {
  return (
    <Container>
      <Title className="applicant-title">
        The easiest thing for you to accomplish today is to get started.
      </Title>
      <SubTitle>All fields required</SubTitle>
      <FormContainer className="applicant-form">
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
            Please enter your valid phone number.{" "}
            <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            Where are you located? <Required> (Required)</Required>
          </Label>
          <Input required />
          <Label>
            Please provide the link to your LinkedIn profile.{" "}
            <Required> (Required)</Required>
          </Label>
          <Input required />

          <Label htmlFor="organization">
            What kind of industry you're a part of?{" "}
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
          <Label htmlFor="organization">
            Select the job funtion.
            <Required> (Required)</Required>
          </Label>
          <Select id="organization" required>
            <option value="">Please Select</option>
            <option value="Accounting">Accounting</option>
            <option value="Administrative">Administrative</option>
            <option value="Arts and Design">Arts and Design</option>
            <option value="Business Development">Business Development</option>
            <option value="Community and Social Services">
              Community and Social Services
            </option>
            <option value="Consulting">Consulting</option>
            <option value="Education">Education</option>
            <option value="Engineering">Engineering</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Legal">Legal</option>
            <option value="marketing">Marketing</option>
            <option value="Media and Communication">
              Media and Communication
            </option>
            <option value="product Management">Product Management</option>
            <option value="program and Project Management">
              Program and Project Management
            </option>
            <option value="Purchasing">Purchasing</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Research">Research</option>
            <option value="Sales">Sales</option>
            <option value="other">Other</option>
          </Select>
          <Label>
            Tell us about yourself. <Required> (Required)</Required>
          </Label>
          <Textarea rows={3} required></Textarea>

          <Label>
            Tell us your detailed work experiences:
            <Required> (Required)</Required>
          </Label>
          <Textarea rows={8} required></Textarea>
          <Button>SUBMIT</Button>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  );
};

export default Applicant;
