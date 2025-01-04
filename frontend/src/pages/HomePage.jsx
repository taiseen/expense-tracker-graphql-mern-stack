import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/userQuery";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from "@apollo/client";
import TransactionForm from "../components/TransactionForm";
import Cards from "../components/Cards";
import Logout from "../components/Logout";

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {

    const { data: authUserData } = useQuery(GET_AUTHENTICATED_USER);

    const chartData = {
        labels: ["Saving", "Expense", "Investment"],
        datasets: [
            {
                label: "%",
                data: [13, 8, 3],
                backgroundColor: ["rgba(75, 192, 192)", "rgba(255, 99, 132)", "rgba(54, 162, 235)"],
                borderColor: ["rgba(75, 192, 192)", "rgba(255, 99, 132)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
                borderRadius: 30,
                spacing: 10,
                cutout: 130,
            },
        ],
    };

    return (
        <>
            <div className='flex flex-col gap-6 items-center max-w-7xl mx-auto z-20 relative justify-center'>
                <div className='flex items-center'>
                    <p className='md:text-4xl text-2xl lg:text-4xl font-bold text-center relative z-50 mb-4 mr-4 bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text'>
                        Spend wisely, track wisely
                    </p>

                    <img
                        // src={"https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
                        src={authUserData?.authUser.profilePicture}
                        className='w-11 h-11 rounded-full border cursor-pointer'
                        alt='Avatar'
                    />

                    <Logout />
                </div>

                <div className='flex flex-wrap w-full justify-center items-center gap-6'>
                    <div className='h-[330px] w-[330px] md:h-[360px] md:w-[360px]  '>
                        <Doughnut data={chartData} />
                    </div>

                    <TransactionForm />
                </div>

                <Cards />
            </div>
        </>
    );
};
export default HomePage;