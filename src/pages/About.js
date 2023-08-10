import { Helmet } from "react-helmet";
import Header from "../components/About/Header";
import Process from "../components/About/Process";
import Programme from "../components/About/Programme";
import Stories from "../components/About/Stories";
import New from "../components/Home/New";
import titles from "../title";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{titles.about}</title>
      </Helmet>
      <Header />
      <Stories />
      <Process />
      <Programme />
      <New />
    </>
  );
}

export default AboutPage;
