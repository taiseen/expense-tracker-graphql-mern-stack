import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAuthUserQuery } from "../graphql/api";
import { Doughnut } from "react-chartjs-2";
import useStatisticsChart from "../hooks/useStatisticsChart";
import TransactionForm from "../components/TransactionForm";
import Logout from "../components/Logout";
import Cards from "../components/Cards";


ChartJS.register(ArcElement, Tooltip, Legend);


const HomePage = () => {

    const { data } = useAuthUserQuery();

    const chartData = useStatisticsChart();

    
    return (
        <>
            <div className='flex flex-col gap-6 items-center max-w-7xl mx-auto z-20 relative justify-center'>
                <div className='flex items-center'>
                    <p className='md:text-4xl text-2xl lg:text-4xl font-bold text-center relative z-50 mb-4 mr-4 bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text'>
                        Spend wisely, track wisely
                    </p>

                    <img
                        // src={"https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
                        className='w-11 h-11 rounded-full border cursor-pointer'
                        src={data?.authUser.profilePicture}
                        title={data?.authUser.name}
                        alt='Avatar'
                    />

                    <Logout />
                </div>

                <div className='flex flex-wrap w-full justify-center items-center gap-6'>
                    {
                        chartData?.labels?.length > 0 && (
                            <div className='h-[330px] w-[330px] md:h-[360px] md:w-[360px]'>
                                <Doughnut data={chartData} />
                            </div>
                        )
                    }

                    <TransactionForm />
                </div>

                <Cards />
            </div>
        </>
    );
};

export default HomePage;