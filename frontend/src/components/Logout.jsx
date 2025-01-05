import { useMutation } from "@apollo/client";
import { MdLogout } from "react-icons/md";
import errorInfo from "../utils/error";
import Loading from "./Loading";
import gql from "../graphql";

const Logout = () => {

    const [logout, { loading, client }] = useMutation(gql.mutation.logout,
        { refetchQueries: [gql.query.getAuthenticatedUser] }
    );

    const handleLogout = async () => {
        try {
            await logout();
            // Clear the Apollo Client cache FROM THE DOCS
            // https://www.apollographql.com/docs/react/caching/advanced-topics/#:~:text=Resetting%20the%20cache,any%20of%20your%20active%20queries
            client.resetStore();
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