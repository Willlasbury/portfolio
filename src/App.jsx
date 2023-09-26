import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import { useEffect, useState } from "react";

import getStats from "./utils/fetch/codewars";
import getProjects from "./utils/fetch/github";

function App() {
  const [stats, setStats] = useState();
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const stats = await getStats();
    const projects = await getProjects();
    
    if (!stats.message) {
      setStats(stats);
    }
    if (!projects.message){
      setProjects(projects);
    }

    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Body loading={loading} projects={projects} />
    </>
  );
}

export default App;
