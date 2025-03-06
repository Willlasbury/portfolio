import { GridLoader } from "react-spinners"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Funnel, FunnelChart, LabelList, Tooltip } from 'recharts';
import UserStats from "../utils/types/codeWarsData";

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
    const colorHexCodes = [
        "#B0BEC5", // Purple
        "#81C784", // Green
        "#FFEB3B", // Yellow
        "#F44336"  // Red
      ]
    const displayedLeetData = leetData.data.matchedUser.submitStats.totalSubmissionNum
    displayedLeetData.forEach((obj: any, i: number) => {
        obj.fill = colorHexCodes[i]
    })
    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="h-1/6 text-3xl font-bold mb-2 text-center">Various User Stats</h2>
            {/* TODO: replace isloading stuff with <Suspense> https://react.dev/reference/react/Suspense */}
            {isLoadingCW ? <GridLoader /> :
                <div className="flex justify-center items-center p-4 w-11/12 ">
                    <ResponsiveContainer minWidth="100px" minHeight="260px">
                        <FunnelChart width={730} height={250}>
                            <Tooltip />
                            <Funnel
                                dataKey="count"
                                data={displayedLeetData}
                                isAnimationActive
                            >
                                <LabelList position="right" fill="#000" stroke="none" dataKey="difficulty" />
                            </Funnel>
                        </FunnelChart>
                    </ResponsiveContainer>
                    {/* <ResponsiveContainer minWidth="100px" minHeight="260px">
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
                    </ResponsiveContainer> */}
                </div>
            }
        </section>
    )
}
