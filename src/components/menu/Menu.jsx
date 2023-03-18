import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  /* width: 5%;
  height: 200px; */
  /* background-color: blue; */
`;
const Wrapper = styled.div`
  /* position: absolute; */
  margin-top: 100px;
  width: 100%;
  height: 100vh;
`;
const Li = styled.span`
  background-color: blue;
  padding: 100px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Li>hello</Li>
      </Wrapper>
    </Container>
  );
};

export default Menu;
