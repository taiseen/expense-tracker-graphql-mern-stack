import toast from "react-hot-toast";

const errorInfo = (location, error) => {
    console.error(`🔴 Error from:- ${location} 🔴`, error);
    toast.error(error.message);
}

export default errorInfo;