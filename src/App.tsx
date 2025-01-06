import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import getGithub from './utils/api/getGithub/getGithub'

export default function App() {

  const projects = getGithub()

  const test = () => {
    console.log("projects:", projects)
  }
  return (
    // <div className="min-h-screen flex flex-col">
    //   <Header />
    //   <main className="flex-grow">
    //     <Hero />
    //     <Projects projects={projects}/>
    //   </main>
    //   <Footer />
    // </div>
    <button onClick={test}>fdsafdsa</button>
  )
}

