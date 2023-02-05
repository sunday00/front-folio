import {useRecoilValue} from "recoil";
import {threeProjectsStates} from "@/store/main.store";

const Home = () => {
  const threeProjects = useRecoilValue(threeProjectsStates())

  return (
    <div className="home-wrap">
      <section className="hero min-h-screen">

      </section>
    </div>
  );
}

export default Home;