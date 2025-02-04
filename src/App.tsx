import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import getGithub from './utils/api/getGithub/getGithub'
import { useState, useEffect } from 'react'
import ProdRepository from './utils/types/prodRepo'
import getRepoLanguages from './utils/api/getGithub/getRepoLangs'

export default function App() {
  const [projects, setProjects] = useState<ProdRepository[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      const repos = await getGithub()
      for (let i = 0; i < repos.length; i++) {
        const data = await getRepoLanguages(repos[i].languages_url)
        repos[i] = { ...repos[i], languages: data } as ProdRepository
      }
      setProjects(repos as ProdRepository[])
      setIsLoading(false)
    }
    //  fetchRepoData()
  }, [])



  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects projects={projects} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  )
}

