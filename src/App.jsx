import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";

import { useEffect, useState } from "react";

import getStats from "./utils/fetch/codewars";
import getProjects from "./utils/fetch/github"

function App() {
  const [stats, setStats] = useState();
  const [projects, setProjects] = useState();

  const getData = async () => {
    const stats = await getStats();
    const projects = await getProjects();
    setStats(stats);
    setProjects(projects)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <AboutMe stats={stats} />
    </>
  );
}

export default App;
