import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  background-color: #f2f2f2;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333333;
  text-transform: capitalize;
`;
const LogoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* margin: 50px; */
`;
const Logo = styled.img`
  width: 20%;
  /* height: 20%; */
  margin: 0 20px;
`;

const Clients = () => {
  return (
    <Container>
      <Title>Some of our clients.</Title>
      <LogoContainer>
        <Logo src="./steadfast_images/clients/mmc.png" />
        <Logo src="./steadfast_images/clients/dtcc.png" />
        <Logo src="./steadfast_images/clients/dupont.png" />
        <Logo src="./steadfast_images/clients/canon.png" />
        <Logo src="./steadfast_images/clients/benchmark.png" />
        <Logo src="./steadfast_images/clients/nooter.png" />
        <Logo src="./steadfast_images/clients/ups.png" />
        <Logo src="./steadfast_images/clients/gillig.png" />
      </LogoContainer>
    </Container>
  );
};

export default Clients;
