import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4ecef;
  @media (min-width: 769px) and (max-width: 1024px) {
    .login-wrapper {
      width: 60%;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .login-wrapper {
      width: 80%;
    }
  }
  @media (min-width: 375px) and (max-width: 424px) {
    .login-wrapper {
      width: 100%;
      background: transparent;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .login-wrapper {
      width: 100%;
      background: transparent;
    }
  }
`;
const Wrapper = styled.div`
  width: 30%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Links = styled(Link)`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <div>
      <Container>
        <Wrapper className="login-wrapper">
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Links>FORGOT PASSWORD?</Links>
            <Links>CREATE NEW ACCOUNT</Links>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
