import {useRecoilValue} from "recoil";
import {RepoCode, projectsState} from "@s/main.store";
import Section from "@c/HomeServices/Section";

const Home = () => {
  const threeProjects = useRecoilValue(projectsState(
    {repoCode: RepoCode.THREE, page: 1}
  ))

  return (
    <div className="home-wrap flex flex-col w-full border-opacity-50">
      <Section title="Three" contents={threeProjects}></Section>
    </div>
  );
}

export default Home;