import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DataPieChart from "./PieChart"
import ProdRepository from "@/utils/types/prodRepo"

type Props = {
  projects: ProdRepository[] | undefined
}

type ColorMapProps = {
  [key: string]: {[key:string]: string}
}

export default function Projects({ projects }: Props) {

  const languageColorMap: ColorMapProps = {
    JavaScript: {hex: "#F7DF1E", tw: 'bg-yellow-400'},
    Handlebars: {hex:"#F1C40F",tw: 'bg-yellow-500'},
    HTML:{ hex:"#E34F26", tw: 'bg-red-600'},
    CSS: {hex:"#1572B6",tw: 'bg-blue-600'},
    Python: {hex:"#306998",tw: 'bg-blue-700'},
    TypeScript: {hex:"#3178C6",tw: 'bg-blue-600'},
    Procfile: {hex: '#00000', tw: 'bg-black'}
  }

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
                  <ul className="flex flex-row">
                    {
                      Object.entries(project.languages).map(([lang, value]) => {
                        return (
                          <li key={lang} className="pr-1">
                            <Badge className={`${languageColorMap[lang]['tw']}` || 'bg-slate-400'} variant="secondary">{lang}</Badge>

                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                {project.language && <DataPieChart data={project.languages} colorMap={languageColorMap}/> }
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

