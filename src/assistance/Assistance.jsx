import styled from "styled-components";

const Container = styled.div`
  /* width: 100%; */
  background-color: #f2f2f2;
`;
const Wrapper = styled.div`
  display: flex;
  /* padding: 20px; */
  height: 50vh;
`;
const Virtual = styled.div`
  flex: 1;
  border: 1px solid black;
`;
const Consulting = styled.div`
  flex: 1;
  border: 1px solid black;
`;
const BusinessDev = styled.div`
  flex: 1;
  border: 1px solid black;
`;
const Header = styled.h1`
  color: #444444;
`;
const Desc = styled.p``;

const Assistance = () => {
  return (
    <Container>
      <Wrapper>
        <Virtual>
          <Header>Virtual Assistant Services</Header>
          <Desc>
            Committed workers that contribute their experience and knowledge to
            your organization. They serve as your own personal superheroes.
            There is no need for a phone booth.
          </Desc>
        </Virtual>
        <Consulting>
          <Header>Consulting</Header>
          <Desc>
            We work closely with our clients to understand their unique
            challenges and develop customized solutions that meet their specific
            needs to achieve their goals. our goal is to help our clients
            succeed by providing them with the expertise and resources they need
            to overcome obstacles and achieve sustainable growth.
          </Desc>
        </Consulting>
        <BusinessDev>
          <Header>Business Development</Header>
          <Desc>
            We offer business development services to help businesses grow and
            expand their operations. As business development consultants, we
            work with our clients to identify new opportunities and develop
            strategies to capitalize on them.We help our clients develop
            sustainable growth plans that align with their business objectives
            and support their long-term success.
          </Desc>
        </BusinessDev>
      </Wrapper>
    </Container>
  );
};

export default Assistance;
