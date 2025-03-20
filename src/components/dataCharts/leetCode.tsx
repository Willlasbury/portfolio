import { ResponsiveContainer, Funnel, FunnelChart, Tooltip, TooltipProps, LabelList } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';


const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip border border-gray-300 bg-white p-2 rounded-md shadow-xl">
                <p className="label">{`${payload[0].payload.difficulty} Problems completed: ${payload[0].value}`}</p>
            </div>
        );
    }
}

const CustomLabel = (props: any) => {
    console.log("props:", props)
    const styleProps = {
        fill: props.fill,
        height: props.height,
        textAnchor: 'middle',
        width: props.width,
        viewBox: props.viewBox,
        x: props.x + props.width / 2,
        y: props.y + props.height / 2,
    };
    
    // Apparently the key can not be added through the spread operator
    return (
        <text key={props.index} {...styleProps} onMouseEnter={props.onMouseEnter}>
            {props.value} {props.count}
        </text>
    );
}

export default function LeetCodeStats({ leetData }: any) {

    const colorHexCodes = [
        "#B0BEC5", // Purple
        "#81C784", // Green
        "#FFEB3B", // Yellow
        "#F44336"  // Red
    ]
    const displayedLeetData = leetData.data.matchedUser.submitStats.totalSubmissionNum.filter((obj: any, i: number) => {
        obj.fill = colorHexCodes[i]
        return obj.count != 0
    })

    
    return (

        <div className="flex flex-col justify-center items-center p-4 w-11/12 ">
            <h3>Leet Code Stats</h3>
            <ResponsiveContainer minWidth="100px" minHeight="260px">
                <FunnelChart width={730} height={250}>
                    <Tooltip content={<CustomTooltip />} />
                    <Funnel
                        dataKey="count"
                        data={displayedLeetData}
                        

                    >
                        <LabelList dataKey="difficulty" position={'center'} fill='black'
                         content={<CustomLabel />}
                         />
                    </Funnel>

                </FunnelChart>
            </ResponsiveContainer>
        </div>

    )
}
