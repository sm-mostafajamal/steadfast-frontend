import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: green;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* display: block; */
  /* height: 100vh; */
  /* text-align: center; */
`;
const Li = styled.span`
  padding: 100px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Li>
          <Link to="/contact">CONTACT</Link>
        </Li>
        <Li>
          <Link to="/join-us">JOIN US</Link>
        </Li>
        <Li>
          <Link to="/virtual-assistant">Virtual Assistants</Link>
        </Li>
        <Li>
          <Link to="/blog">BLOG</Link>
        </Li>
      </Wrapper>
    </Container>
  );
};

export default Menu;
