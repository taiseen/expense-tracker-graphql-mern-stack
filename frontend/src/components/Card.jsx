import { MdOutlinePayments } from "react-icons/md";
import { categoryColorMap } from "../constants";
import { FaLocationDot } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import formatDate from "../utils/formatDate";
import CardActions from "./CardActions";


const Card = ({ transaction, authUser }) => {

    const { _id: id, category, amount, location, date, paymentType, description } = transaction;

    const cardClass = categoryColorMap[category];

    
    return (
        <div className={`rounded-md p-4 bg-gradient-to-br ${cardClass}`}>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row items-center justify-between'>
                    <h2 className='text-lg font-bold text-white capitalize'>{category}</h2>

                    <CardActions id={id} />
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
                        title={authUser?.name}
                        alt={authUser?.name}
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;