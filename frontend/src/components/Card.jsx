import { DELETE_TRANSACTION } from "../graphql/mutations/transactionMutation";
import { MdOutlinePayments } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { HiPencilAlt } from "react-icons/hi";
import { BsCardText } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import errorInfo from "../utils/error";
import toast from "react-hot-toast";
import Loading from "./Loading";

const categoryColorMap = {
    saving: "from-green-700 to-green-400",
    expense: "from-pink-800 to-pink-600",
    investment: "from-blue-700 to-blue-400",
    // Add more categories and corresponding color classes as needed
};


const Card = ({ transaction, authUser }) => {

    const { _id: id, category, amount, location, date, paymentType, description } = transaction;

    const cardClass = categoryColorMap[category];

    const [deleteTransaction, { loading }] = useMutation(DELETE_TRANSACTION,
        { refetchQueries: ["GetTransactions", "GetTransactionStatistics"] }
    );


    const handleDelete = async () => {
        try {
            if (confirm("Are you sure you want to delete this transaction?")) {
                await deleteTransaction({ variables: { transactionId: id } });
                toast.success("Transaction deleted successfully");
            }
        } catch (error) {
            errorInfo("Card deleting transaction", error);
        }
    };


    return (
        <div className={`rounded-md p-4 bg-gradient-to-br ${cardClass}`}>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row items-center justify-between'>
                    <h2 className='text-lg font-bold text-white'>Saving</h2>

                    <div className='flex items-center gap-2'>
                        {
                            loading
                                ? <Loading />
                                : <FaTrash
                                    className={"cursor-pointer"}
                                    title="Delete Transaction"
                                    onClick={handleDelete}
                                />
                        }

                        <Link to={`/transaction/${id}`}>
                            <HiPencilAlt title="Edit Transaction" className='cursor-pointer' size={20} />
                        </Link>
                    </div>
                </div>

                <p className='text-white flex items-center gap-1'>
                    <BsCardText />
                    Description: {description}
                </p>

                <p className='text-white flex items-center gap-1'>
                    <MdOutlinePayments />
                    Payment Type: {paymentType}
                </p>

                <p className='text-white flex items-center gap-1'>
                    <FaSackDollar />
                    Amount: ${amount}
                </p>

                <p className='text-white flex items-center gap-1'>
                    <FaLocationDot />
                    Location: {location || "N/A"}
                </p>

                <div className='flex justify-between items-center'>
                    <p className='text-xs text-black font-bold'>{formatDate(date)}</p>

                    <img
                        className='h-8 w-8 border rounded-full'
                        src={authUser?.profilePicture}
                        alt={authUser?.name}
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;