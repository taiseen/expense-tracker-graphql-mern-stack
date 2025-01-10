import { useLogoutMutation } from "../graphql/api";
import { MdLogout } from "react-icons/md";
import errorInfo from "../utils/error";
import Loading from "./Loading";


const Logout = () => {

    const { logout, loading, client } = useLogoutMutation();


    const handleLogout = async () => {
        try {
            await logout();
            client.resetStore(); // clear the previous cache data...

            // Clear the Apollo Client cache FROM THE DOCS
            // https://www.apollographql.com/docs/react/caching/advanced-topics/#:~:text=Resetting%20the%20cache,any%20of%20your%20active%20queries

        } catch (error) {
            errorInfo("Logout", error);
        }
    };


    return (
        <div className="flex items-center gap-1 mx-2">
            {/* {!loading && <MdLogout className='mx-2 w-5 h-5 cursor-pointer' onClick={handleLogout} />} */}

            {
                loading
                    ? <Loading />
                    : <MdLogout className='w-5 h-5 cursor-pointer' onClick={handleLogout} />
            }
        </div>
    )
}

export default Logout