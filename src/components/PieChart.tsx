import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import RepoLanguages from '@/utils/types/githubRepoLang'

type PieChartProps = {
  data: RepoLanguages
  colorMap: { [key: string]: { [key: string]: string } }
}

export default function DataPieChart({ data, colorMap }: PieChartProps) {
  const chartData = Object.entries(data).map(([name, value]) => ({ name, value }))
  const valueSum = chartData.reduce((a, b) => a + b.value, 0)

  const calculatePercent = (value: number, sum: number) => {

    const per = Math.round(value as number / sum * 100)

    if (per < 1) {
      return '<1%'
    }
    return `${per}%`
  }
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={50}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map(({ name, value }) => (
            <Cell key={`cell-${value}`} fill={colorMap[name]['hex']} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [calculatePercent(value as number, valueSum), `${name}`]} />
        {/* <Legend /> */}
      </PieChart>
    </ResponsiveContainer>

  )
}

