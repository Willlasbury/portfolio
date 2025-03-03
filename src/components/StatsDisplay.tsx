import { GridLoader } from "react-spinners"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Label } from 'recharts';
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
        <section className="flex flex-col justify-center items-center">
            <h2 className="h-1/6 text-3xl font-bold mb-2 text-center">Code Wars User Stats</h2>
            {isLoadingCW ? <GridLoader /> :
                <div className="flex justify-center items-center p-4 w-11/12 ">

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
            }
        </section>
    )
}
