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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGithub().then((repos) => {
      const newRepo: ProdRepository[] = repos.map(repo => {
        getRepoLanguages(repo.languages_url).then(data => {
          console.log("data:", data)
          return { ...repo, languages: data } as ProdRepository
          
        })
        return repo as ProdRepository
      })
      console.log("newRepos:", newRepo)
      return newRepo
    }
    ).then((data) => {

      setProjects(data)
    })

  }, [])

  const test = () => {
    console.log("projects:", projects)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <button onClick={test}>fdsafdsa</button>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  )
}

