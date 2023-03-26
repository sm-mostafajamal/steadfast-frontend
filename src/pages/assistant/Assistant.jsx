import { Link } from "react-router-dom";
import styled from "styled-components";
import cover from "../../assets/virtual_assist.jpeg";
import {
  AccessTimeOutlined,
  BorderColorOutlined,
  ChatBubbleOutlined,
  ClassOutlined,
  Diamond,
  LocationOnOutlined,
  MoveToInboxOutlined,
  SpeakerNotesOffOutlined,
  SupportOutlined,
  TravelExploreOutlined,
  TrendingDownOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import Process from "../../components/process/Process";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  @media (min-width: 769px) and (max-width: 1024px) {
    .coverHeading,
    .questionHeading {
      font-size: 1.5rem !important;
    }
    .virtualAssistantHeading,
    .assistHeading {
      font-size: 1.4rem !important;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .coverHeading {
      padding: 10px !important;
    }
    .coverHeading,
    .questionHeading {
      font-size: 1.5rem !important;
    }
    .virtualAssistantHeading,
    .assistHeading {
      font-size: 1.4rem !important;
    }
    .article-wrapper {
      flex-direction: column;
    }
    .assist-container {
      flex-direction: column !important;
      text-align: center;
    }
    .assistHeading {
      align-items: center !important;
    }
  }
  @media (min-width: 375px) and (max-width: 424px) {
    .coverHeading {
      padding: 10px !important;
    }
    .coverHeading,
    .questionHeading {
      font-size: 1.2rem !important;
    }
    .virtualAssistantHeading,
    .assistHeading {
      font-size: 1.2rem !important;
    }
    .article-wrapper {
      flex-direction: column;
    }
    .assist-container {
      flex-direction: column !important;
      text-align: center;
    }
    .assistHeading {
      align-items: center !important;
    }

    .quesStep {
      width: 370px;
    }
    .assistTitle {
      font-size: 1rem !important;
    }
  }
  @media (min-width: 320px) and (max-width: 374px) {
    .coverHeading {
      padding: 10px !important;
    }
    .coverHeading,
    .questionHeading {
      font-size: 1.2rem !important;
    }
    .virtualAssistantHeading,
    .assistHeading {
      font-size: 1.2rem !important;
    }
    .article-wrapper {
      flex-direction: column;
    }
    .assist-container {
      flex-direction: column !important;
      text-align: center;
    }
    .assistHeading {
      align-items: center !important;
    }

    .quesStep {
      width: 320px;
    }
    .assistTitle {
      font-size: 14px !important;
    }
  }
`;
const Wrapper = styled.div``;
const Cover = styled.div`
  background-image: url(${({ background }) => background});
  width: 100vw;
  min-height: 100vh;
  /* background-attachment: ; */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .coverHeading {
    width: fit-content;
    padding-left: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .coverSteps {
    color: white;
    /* margin-top: 5rem; */
  }
  .coverDesc {
    color: #c8cfcf;
  }
  .coverIcon {
    font-size: 4rem;
    margin: 20px;
  }
`;
const Heading = styled.h1`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bolder;
  font-size: 2rem;
  /* line-height: 3.5rem; */
`;
const Design = styled.span`
  border-bottom: 3px solid #dda601;
  padding-bottom: 8px;
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #dda601;
  margin-top: 50px;

  &:hover {
    background-color: white;
    color: #2d3133;
    transition: all 0.5s ease;
  }
`;
const Steps = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;
const Step = styled.div`
  width: 400px;
  padding: 20px;
`;

const Title = styled.h5`
  font-weight: 700;
  letter-spacing: 1px;
`;

const QuestionCointainer = styled.div`
  padding: 8rem 0;
  background-color: #f4f4f4;
  .questionHeading {
    color: #2d3133;
    font-size: 2rem;
    font-weight: 700;
    display: block;
    text-align: center;
  }
  .quesTitle {
    color: #2d3133;
  }
  .quesDesc {
    color: #787878;
  }
  .quesIcon {
    color: #f1b502;
    font-size: 4rem;
    margin: 20px;
  }
`;
const Article = styled.div`
  padding: 50px;

  .virtualAssistantHeading {
    text-align: center;
    font-size: 2rem;
    color: #f1b502;
  }
`;
const ArticleWrapper = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  color: #6b6b6b;
  gap: 30px;
  text-align: justify;
`;
const Desc = styled.p`
  letter-spacing: 1px;
`;

const AssistContainer = styled.div`
  display: flex;
  background-color: #f4f4f4;
  padding: 50px;
  color: #444444;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .assistHeading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.5rem;
  }
  .assistIcon {
    font-size: 3rem;
    margin: 20px;
    color: #c8c8c8;
  }
  .assistTitle {
    font-size: 18px;
  }
`;
const Assists = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;
const Assist = styled.div`
  /* margin: 10px; */
  width: 30%;
  text-align: center;
`;

const Assistant = () => {
  return (
    <Container>
      <Wrapper>
        <Cover background={cover}>
          <Heading className="coverHeading">
            <Design>Instead of attempting to handle everything,</Design>
            <br /> achieve greater results by enlisting the help of <br />a
            virtual assistant.
            <Link to="/hire-steadfast">
              <Button>Hire STEADFAST</Button> {/* for employer */}
            </Link>
          </Heading>
          <Steps>
            <Step className="coverSteps">
              <LocationOnOutlined className="coverIcon" />
              <Title>U.S. Based</Title>
              <Desc className="coverDesc">
                Our efforts involve scouring the whole country to locate the
                ideal individual to serve as your Virtual Assistant for your
                organization.
              </Desc>
            </Step>
            <Step className="coverSteps">
              <SupportOutlined className="coverIcon" />
              <Title>Extensively Evaluated and Verified</Title>
              <Desc className="coverDesc">
                We have a thorough hiring process that involves multiple video
                interviews and skill assessments to identify capable and
                compassionate candidates, among other methods that may also be
                used.
              </Desc>
            </Step>
            <Step className="coverSteps">
              <Diamond className="coverIcon" />
              <Title>Professionals</Title>
              <Desc className="coverDesc">
                Our expertise lies in identifying and connecting you with the
                most suitable expert to cater to your needs.
              </Desc>
            </Step>
          </Steps>
        </Cover>
        <QuestionCointainer>
          <Heading className="questionHeading">
            In what ways are you falling behind?
          </Heading>
          <Steps>
            <Step className="quesStep">
              <AccessTimeOutlined className="quesIcon" />
              <Title className="quesTitle">Time</Title>
              <Desc className="quesDesc">
                Do you have the impression that you are unable to go on a
                vacation?
              </Desc>
            </Step>
            <Step className="quesStep">
              <SpeakerNotesOffOutlined className="quesIcon" />
              <Title className="quesTitle">Communication</Title>
              <Desc className="quesDesc">
                Do you lack crucial information that is essential for the growth
                of your business?
              </Desc>
            </Step>
            <Step className="quesStep">
              <TrendingDownOutlined className="quesIcon" />
              <Title className="quesTitle">Results</Title>
              <Desc className="quesDesc">
                Due to your disorganization, how many chances for business do
                you overlook?
              </Desc>
            </Step>
          </Steps>
        </QuestionCointainer>
        <Article>
          <Title className="virtualAssistantHeading">
            It's not necessary for you to handle everything by yourself.
            <br />
            Consider taking the assistance of a Virtual Assistant.
          </Title>
          <ArticleWrapper className="article-wrapper">
            <Desc>
              Being a leader who is occupied with numerous responsibilities can
              be quite challenging. From handling emails, keeping up-to-date
              with project developments to generating crucial documents, there
              are numerous intricacies involved in effectively managing an
              organization. Unfortunately, all of these tasks demand a
              significant amount of time, which can be a considerable burden.
              Many leaders make the mistake of assuming that they have the
              capacity to be super-productive like a superhero, without
              considering the reality of their limitations. This mindset tends
              to remain a mere fantasy and never materializes in the real world.
            </Desc>
            <Desc>
              To achieve greater success, you require a group of people to
              assist you. STEADFAST can assist you by providing an experienced
              Virtual Assistant, beginning at a cost of $1,580 per month, who
              can help you take your organization to new heights. Our rigorous
              search process ensures that you receive a Virtual Assistant that
              is suitable for your requirements, with an acceptance rate that is
              even lower than that of Harvard. As a result, instead of devoting
              your time to important but time-consuming administrative
              activities, you may concentrate on the most crucial aspect of
              business: dedicating more time to what is most important.
            </Desc>
          </ArticleWrapper>
        </Article>
        <AssistContainer className="assist-container">
          <Heading className="assistHeading">
            How may a STEADFAST virtual assistant be of assistance?
            <Button>Hire STEADFAST</Button>
          </Heading>

          <Assists>
            <Assist>
              <TrendingUpOutlined className="assistIcon" />
              <Title className="assistTitle">Investigation & Documenting</Title>
            </Assist>
            <Assist>
              <MoveToInboxOutlined className="assistIcon" />
              <Title className="assistTitle">INBOX & SCHEDULE MANAGEMENT</Title>
            </Assist>
            <Assist>
              <TravelExploreOutlined className="assistIcon" />
              <Title className="assistTitle">
                Schedule a journey & expense reporting
              </Title>
            </Assist>
            <Assist>
              <BorderColorOutlined className="assistIcon" />
              <Title className="assistTitle">PROJECT MANAGEMENT </Title>
            </Assist>
            <Assist>
              <ChatBubbleOutlined className="assistIcon" />
              <Title className="assistTitle">SOCIAL MEDIA SUPPORT </Title>
            </Assist>
            <Assist>
              <ClassOutlined className="assistIcon" />
              <Title className="assistTitle">EFFICIENT BOOKKEEPING </Title>
            </Assist>
          </Assists>
        </AssistContainer>
        <Process />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Assistant;
