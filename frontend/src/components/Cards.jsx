import { useAuthUserQuery, useTransactionsQuery } from "../graphql/api";
import Loading from "./Loading";
import Card from "./Card";

const Cards = () => {

    const { data, loading } = useTransactionsQuery();

    const { data: authUser } = useAuthUserQuery();

    // const { userAndTransactions} = useUserAndTransactionsQuery(authUser?.authUser?._id);
  
    const notLoading = !loading;
    const noTransactionsData = notLoading && data?.transactions?.length === 0;


    return (
        <div className='w-full px-10 min-h-[40vh]'>
            <p className='text-5xl font-bold text-center my-10'>History</p>

            {
                noTransactionsData
                    ? (
                        <p className='text-2xl font-bold text-center w-full'>No transaction history found.</p>
                    )
                    : (
                        notLoading
                            ? (
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20'>
                                    {
                                        data.transactions.map((transaction) => (
                                            <Card
                                                key={transaction._id}
                                                transaction={transaction}
                                                authUser={authUser.authUser}
                                            />
                                        ))
                                    }
                                </div>
                            )
                            : (
                                <Loading />
                            )
                    )
            }
        </div>
    );
};

export default Cards;