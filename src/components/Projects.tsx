import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DataPieChart from "./PieChart"
import ProdRepository from "@/utils/types/prodRepo"

type Props = {
 projects: ProdRepository[]
}

export default function Projects({ projects }: Props) {
  // console.log("projects:", projects)
  setTimeout(() => {
    console.log("projects[0].languages:", projects[0].languages)

  }, 1000)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <p>Languages:</p>
                  <ul>
                    { project.languages && 
                      Object.entries(project.languages).map(([name, value])=>{
                        return (
                          <li key={name}>
                            <Badge variant="secondary">{name}</Badge>

                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              {/* {project.language && <DataPieChart data={project.languages} /> } */}
              </CardContent>
              <CardFooter>
                <a href={project.deployments_url} className="text-blue-500 hover:underline">View Project</a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

