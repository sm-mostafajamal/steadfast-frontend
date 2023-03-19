import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: green;
  margin-top: 100px;
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
  background-color: blue;
  padding: 100px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Li>hello</Li>
        <Li>hello</Li>
        <Li>hello</Li>
        <Li>hello</Li>
        <Li>hello</Li>
      </Wrapper>
    </Container>
  );
};

export default Menu;
