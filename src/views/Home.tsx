import {useRecoilValue} from "recoil";
import {RepoCode, projectsState} from "@s/main_store";
import Section from "@c/HomeServices/Section";

const Home = () => {
  const threeProjects = useRecoilValue(projectsState(
    {repoCode: RepoCode.THREE, page: 1}
  ))

  const basicProjects = useRecoilValue(projectsState(
    {repoCode: RepoCode.BASIC, page: 1}
  ))

  return (
    <div className="home-wrap flex flex-col w-full border-opacity-50">
      <Section title="Three" contents={threeProjects}></Section>
      <Section title="Basic Html, Css" contents={basicProjects}></Section>
    </div>
  );
}

export default Home;