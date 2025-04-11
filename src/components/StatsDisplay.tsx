import { GridLoader } from "react-spinners"
import UserStats from "../utils/types/codeWarsData";
import LeetCodeStats from "./dataCharts/leetCode"; 
import CodeWarsStats from "./dataCharts/codeWars";

type StatsDisplayProps = {
    data: UserStats
    isFetching: boolean
    leetData: any
}

export default function StatsDisplay({ data, isFetching, leetData }: StatsDisplayProps) {

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="h-1/6 text-3xl font-bold mb-2 text-center">Various User Stats</h2>
            {/* TODO: replace isloading stuff with <Suspense> https://react.dev/reference/react/Suspense */}
            {isFetching ? <GridLoader /> :
                <div className="flex flex-col justify-center items-center p-4 w-11/12 md:flex-row ">
                    <LeetCodeStats leetData={leetData} />
                    <CodeWarsStats data={data} leetData={leetData} />
                </div>
            }
        </section>
    )
}
