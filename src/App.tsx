import './App.css'
import { useState, useEffect } from 'react'

import Resume from './components/Resume'
import { Carousel } from './components/carousel'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import StatsDisplay from './components/StatsDisplay'

import getGithub from './utils/api/getGithub/getGithub'
import getCW from './utils/api/getCodeWars/getCW'
import getLeetData from './utils/api/getLeetCode/getLeetCode'
import ProdRepository from './utils/types/prodRepo'
import getRepoLanguages from './utils/api/getGithub/getRepoLangs'
import UserStats from './utils/types/codeWarsData'
import { storedCWdata } from './tests/mock/fakeData/cwData'
import { storedLeetData } from './tests/mock/fakeData/leetData'
import { StoredLeetData } from './utils/types/leetCodeData'

export default function App() {
  const [projects, setProjects] = useState<ProdRepository[]>();
  const [isLoadingProjects, setIsLoadingProjects] = useState<boolean>(true);
  const [codeWarsData, setCodeWarsData] = useState<UserStats>(storedCWdata);
  const [isFetching, setIsFetching] = useState(true);
  const [leetData, setLeetData] = useState<StoredLeetData>(storedLeetData);

  useEffect(() => {
    const fetchData = async () => {
      // get github repos
      const repos = await getGithub()
      for (let i = 0; i < repos.length; i++) {
        const data = await getRepoLanguages(repos[i].languages_url)
        repos[i] = { ...repos[i], languages: data } as ProdRepository
      }
      setProjects(repos as ProdRepository[])
      setIsLoadingProjects(false)
      // get leet code data
      // const leetData = await getLeetData()

      const data = await getCW()

      setCodeWarsData(data)
      // setLeetData(leetData)
      setIsFetching(false)
      
      

    }
    fetchData()
  }, [])



  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-grow">
        <Hero />
        <Carousel>
          <StatsDisplay data={codeWarsData} isFetching={isFetching} leetData={leetData}/>
          <Projects projects={projects} isLoadingProjects={isLoadingProjects} />
          <Resume />
        </Carousel>
      </main>
      <Footer />
    </div>
  )
}

