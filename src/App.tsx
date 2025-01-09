import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import getGithub from './utils/api/getGithub/getGithub'
import { useState, useEffect } from 'react'
import Repository from './utils/types/githubReops'

export default function App() {
  const [projects, setProjects] = useState<Array<Repository> | undefined>(undefined);

  useEffect(() => { 
    getGithub().then((data) => {
      setProjects(data)
    })

    
  }, [])

  // const test = () => {
  //   console.log("projects:", projects)
  // }
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* <button onClick={test}>fdsafdsa</button> */}
      <Header />
      <main className="flex-grow">
        <Hero />
        {projects && <Projects projects={projects} />}
      </main>
      <Footer />
    </div>
  )
}

