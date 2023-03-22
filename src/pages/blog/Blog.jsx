import styled from "styled-components";
import blogImg from "../../assets/blog.jpg";
import { employers } from "../../data.js";
import Footer from "../../components/footer/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;
const Cover = styled.div`
  background-image: url(${({ background }) => background});
  width: 100vw;
  min-height: 100vh;
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Heading = styled.h1`
  color: white;
`;
const Bloggers = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
const Blogger = styled.div`
  width: 360px;
  border-radius: 10px;
  overflow: hidden;
  /* height: 500px; */
  min-height: max-content;

  border: 1px solid #ccd4d8;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.35);
`;
const ArticleContainer = styled.div`
  padding: 30px;
`;
const PictureContainer = styled.div`
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Picture = styled.img`
  /* background-image: url(${({ photo }) => photo}); */
  width: 100%;
  /* position: absolute; */
  /* height: 400px; */
  /* text-align: center; */
`;

const Title = styled.h3`
  color: #2d3133;
`;
const Article = styled.p`
  font-weight: 500;
`;

const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Cover background={blogImg}>
          <Heading>
            STEADFAST Blog: How To's & Tips on Leadership & Remote Working
          </Heading>
        </Cover>
        <Bloggers>
          {employers.map((employer) => (
            <Blogger key={employer.id}>
              <PictureContainer>
                <Picture
                  src={`./steadfast_images/employers/${employer.picture}`}
                />
              </PictureContainer>
              <ArticleContainer>
                <Title>{employer.name}</Title>
                <Article>{employer.narration}</Article>
              </ArticleContainer>
            </Blogger>
          ))}
        </Bloggers>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Blog;
