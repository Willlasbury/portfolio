import { GridLoader } from "react-spinners"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import UserStats from "../utils/types/codeWarsData";

type StatsDisplayProps = {
    data: UserStats
    isLoadingCW: boolean
}

export default function StatsDisplay({ data, isLoadingCW }: StatsDisplayProps) {
    const stats = Object.entries(data.ranks.languages)
    const maxValue = Math.max(...stats.map(([_, obj]) => obj.rank * -1))
    const minValue = Math.min(...stats.map(([_, obj]) => obj.rank * -1))
    const formData = stats.map(([lang, obj]) => {
        return { language: lang.toUpperCase(), rank: obj.rank * -1, score: obj.score }
    })
    return (
        <section>
            {isLoadingCW ? <GridLoader /> :
                <ResponsiveContainer minWidth="500px" minHeight="500px" >
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="language" />
                        <PolarRadiusAxis
                            angle={90}
                            domain={[minValue, 8]}
                            reversed={true}
                            tickCount={maxValue - minValue + 2}
                            />
                        <Radar name="Mike" dataKey="rank" label={'rank'} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            }
        </section>
    )
}
