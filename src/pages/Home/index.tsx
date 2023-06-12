import { lazy } from "react";
import intro from "../../content/intro.json";
import MissionContent from "../../content/MissionContent.json";
import Numbers from "../../content/Numbers.json";
import About from "../../content/About.json";
import Nos from "../../content/Nos.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={Numbers.title}
        content={Numbers.text}
        section={Numbers.section}
        icon="about.svg"
        id="numeros"
      />
      <ContentBlock
        type="left"
        title={intro.title}
        content={intro.text}
        section={intro.section}
        icon="intro.svg"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon=""
        id="mission"
      />
      <ContentBlock
        type="left"
        title={About.title}
        content={About.text}
        icon="about.svg"
        id="voce"
      />
      <ContentBlock
        type="left"
        title={Nos.title}
        content={Nos.text}
        icon="nos.svg"
        id="nos"
      />
    </Container>
  );
};

export default Home;
