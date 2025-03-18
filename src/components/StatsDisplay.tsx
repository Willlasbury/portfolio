import { GridLoader } from "react-spinners"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import UserStats from "../utils/types/codeWarsData";
import LeetCodeStats from "./dataCharts/leetCode"; 
import CodeWarsStats from "./dataCharts/codeWars";

type StatsDisplayProps = {
    data: UserStats
    isLoadingCW: boolean
    leetData: any
}

export default function StatsDisplay({ data, isLoadingCW, leetData }: StatsDisplayProps) {
    const stats = Object.entries(data.ranks.languages)
    const maxValue = Math.max(...stats.map(([_, obj]) => obj.rank * -1))
    const minValue = Math.min(...stats.map(([_, obj]) => obj.rank * -1))
    const formData = stats.map(([lang, obj]) => {
        return { language: lang.toUpperCase(), rank: obj.rank * -1, score: obj.score }
    })
    

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="h-1/6 text-3xl font-bold mb-2 text-center">Various User Stats</h2>
            {/* TODO: replace isloading stuff with <Suspense> https://react.dev/reference/react/Suspense */}
            {isLoadingCW ? <GridLoader /> :
                <div className="flex justify-center items-center p-4 w-11/12 ">
                    <LeetCodeStats leetData={leetData} />
                    <CodeWarsStats data={data} isLoadingCW={isLoadingCW} leetData={leetData} />
                </div>
            }
        </section>
    )
}
