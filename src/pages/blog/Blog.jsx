import styled from "styled-components";
import blogImg from "../../assets/blog.jpg";
import { employers } from "../../data.js";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  @media (min-width: 425px) and (max-width: 768px) {
    .blog-heading {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 375px) and (max-width: 424px) {
    .blog-heading {
      font-size: 2rem;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .blog-heading {
      font-size: 1.8rem;
    }
    .blogger {
      width: 310px;
    }
  }
`;
const Wrapper = styled.div``;
const Cover = styled.div`
  background-image: url(${({ background }) => background});
  width: 100vw;
  min-height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
  color: #e7582c;
  font-size: 4rem;
  font-weight: 700;
  border-bottom: 3px solid #f1b502;
`;
const Bloggers = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
const Blogger = styled.div`
  width: 370px;
  border-radius: 10px;
  overflow: hidden;
  min-height: fit-content;
  border: 1px solid #ccd4d8;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.35);
`;
const ArticleContainer = styled.div`
  padding: 30px;
`;
const PictureContainer = styled.div`
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Picture = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  color: #2d3133;
  text-align: center;
  padding-bottom: 10px;
  font-weight: 600;
`;
const Article = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
`;

const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Cover background={blogImg}>
          <Heading className="blog-heading">STEADFAST BlOG</Heading>
        </Cover>
        <Bloggers>
          {employers.map((employer) => (
            <Blogger key={employer.id} className="blogger">
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
