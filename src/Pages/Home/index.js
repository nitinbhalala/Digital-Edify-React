import Compaines from "./Compaines";
import OneLearnCircle from "../../Components/HomePage/OneLearnCircle";
import LmsProject from "./LmsProject";
import Certificate from "./Certificate";
import GitHubProfile from "./GitHubProfile";
import ItEngineers from "./ItEngineers";
import UpcomingBatch from "./UpcomingBatch";
import WhyDigitalEdify from "./WhyDigitalEdify";
import OnlineTaining from "./OnlineTaining";
import OurLocations from "./OurLocations";
import IndiaInstitute from "./IndiaInstitute";
import Courses from "./Courses";
import Programs from "./Programs";
import GetJob from "./GetJob";
import Build from "./Build";

const Home = () => {

  return (
    <>
      <IndiaInstitute />

      <Compaines />

      <OneLearnCircle title="Learn" number="1" mainTitle="Explore the Digital Edify way" discription="Experience the New way of Learning with AI Digital Edify offers best technologies in the work, Curated for your Career Growth" />

      <Courses title="Courses" />

      <Programs title="Programs" />

      <Build />

      <LmsProject />

      <Certificate />

      <GetJob />

      <GitHubProfile />

      <ItEngineers />

      <UpcomingBatch />

      <WhyDigitalEdify />

      <OnlineTaining />

      <OurLocations />

    </>
  );
};

export default Home;
