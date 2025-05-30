import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DataPieChart from "./PieChart"
import ProdRepository from "@/utils/types/prodRepo"
import { GridLoader } from "react-spinners"
type Props = {
  projects: ProdRepository[] | undefined
  isLoadingProjects: boolean
}

type ColorMapProps = {
  [key: string]: { [key: string]: string },
}

export default function Projects({ projects, isLoadingProjects }: Props) {

  const languageColorMap: ColorMapProps = {
    JavaScript: { hex: "#F7DF1E", tw: 'bg-yellow-400' },
    Handlebars: { hex: "#F1C40F", tw: 'bg-yellow-500' },
    HTML: { hex: "#E34F26", tw: 'bg-red-600' },
    CSS: { hex: "#0F766E", tw: 'bg-teal-600' },
    Python: { hex: "#10B981", tw: 'bg-emerald-500' },
    TypeScript: { hex: "#3178C6", tw: 'bg-blue-600' },
    Procfile: { hex: '#10B981', tw: 'bg-green-500' }
  }

  return (
    <section id="projects" className="flex flex-col flex-grow items-center py-1 max-h-[500px] lg:max-h-[1000px]">
      <h2 className="h-1/6 text-3xl font-bold mb-2 text-center">My Projects</h2>

      {isLoadingProjects ?
        <div className=" h-5/6 flex flex-grow items-center">
          <GridLoader />
        </div>
        :
        <div className="h-5/6 justify-items-center grid grid-cols-1 px-1 overflow-y-scroll no-scrollbar lg:grid-cols-2 lg:min-h-[500px] md:48rem md:overflow-y-scroll xl:grid-cols-3 gap-8">
          {projects && projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.description}</CardTitle>
                <CardDescription><b>Github Repo: </b><a target={"_blank"} href={project.html_url}>{project.name}</a></CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <p>Languages:</p>
                  <ul className="flex flex-row max-w-64 overflow-x-scroll no-scrollbar">
                    {
                      Object.entries(project.languages).map(([lang,]) => {
                        return (
                          <li key={lang} className="pr-1">
                            <Badge className={`${languageColorMap[lang]['tw']}` || 'bg-slate-400'} variant="secondary">{lang}</Badge>

                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                {project.language && <DataPieChart data={project.languages} colorMap={languageColorMap} />}
              </CardContent>
              <CardFooter>
                {project.homepage &&
                <a target={"_blank"} href={project.homepage} className="text-blue-500 hover:underline">View Deploymnet</a>
                }
              </CardFooter>
            </Card>
          ))}
        </div>
      }
    </section>
  )
}

