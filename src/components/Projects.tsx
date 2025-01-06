import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Props = {
  projects: Object[]
}

export default function Projects({projects}: Props) {
  
  return (
    <section id="projects" className="py-20">
      {/* <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div> */}
    </section>
  )
}

