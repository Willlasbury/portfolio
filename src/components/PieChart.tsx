import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts'
import RepoLanguages from '@/utils/types/githubRepoLang'
import { useCallback, useState } from 'react'
import { ChartData } from '../utils/types/pieChartProps'

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

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${calculatePercent(value, valueSum)}`}</text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState<number| undefined>(undefined);
  const onPieEnter = useCallback(
    (_:ChartData, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const onPieLeave = useCallback(
    () => {
      setActiveIndex(undefined)
    }, [setActiveIndex]
    
  )

  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Pie
          data={chartData}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={25}
          outerRadius={50}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
          {chartData.map(({ name, value }) => (
            <Cell key={`cell-${value}`} fill={colorMap[name]['hex']} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

  )
}

