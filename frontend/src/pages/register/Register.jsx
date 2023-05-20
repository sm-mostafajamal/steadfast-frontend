import styled from "styled-components";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5fbfd;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) and (max-width: 1024px) {
    .register-wrapper {
      width: 60%;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .register-wrapper {
      width: 100%;
      background: transparent;
    }
  }
  @media (min-width: 375px) and (max-width: 424px) {
    .register-wrapper {
      width: 100%;
      background: transparent;
    }
    .register-form {
      flex-direction: column;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .register-wrapper {
      width: 100%;
      background: transparent;
    }
    .register-form {
      flex-direction: column;
    }
  }
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  return (
    <div>
      <Container>
        <Wrapper className="register-wrapper">
          <Title>CREATE AN ACCOUNT</Title>
          <Form className="register-form">
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
