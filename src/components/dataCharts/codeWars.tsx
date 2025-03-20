import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import UserStats from "../../utils/types/codeWarsData"

type StatsDisplayProps = {
    data: UserStats
    isLoadingCW: boolean
    leetData: any
}

export default function CodeWarsStats({data}:StatsDisplayProps) {
    const stats = Object.entries(data.ranks.languages)
    const maxValue = Math.max(...stats.map(([_, obj]) => obj.rank * -1))
    const minValue = Math.min(...stats.map(([_, obj]) => obj.rank * -1))
    const formData = stats.map(([lang, obj]) => {
        return { language: lang.toUpperCase(), rank: obj.rank * -1, score: obj.score }
    })
    return (
        <div className="flex flex-col justify-center items-center p-4 w-11/12 ">
            <h3>Code Wars Stats</h3>
            <ResponsiveContainer minWidth="100px" minHeight="260px">
                <RadarChart outerRadius="80%" data={formData}>
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="language"
                    //  dx={10}
                    // dy={-10}
                    />
                    <PolarRadiusAxis
                        angle={90}
                        cx={-100}
                        domain={[minValue, 8]}
                        reversed={true}
                        tickCount={maxValue - minValue + 2}
                    />
                    <Radar
                        name="CodeWarsRadialGraph"
                        dataKey="rank"
                        label={'rank'}
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}