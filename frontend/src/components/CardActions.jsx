import { useDeleteTransactionMutation } from "../graphql/api"
import { HiPencilAlt } from "react-icons/hi"
import { FaTrash } from "react-icons/fa6"
import { Link } from "react-router-dom"
import errorInfo from "../utils/error"
import toast from "react-hot-toast"
import Loading from "./Loading"


const CardActions = ({ id }) => {

    const { deleteTransaction, loading } = useDeleteTransactionMutation();


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
    )
}

export default CardActions