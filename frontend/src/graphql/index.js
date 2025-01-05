import { CREATE_TRANSACTION, DELETE_TRANSACTION } from "./mutations/transactionMutation";
import { GET_AUTHENTICATED_USER, GET_USER_AND_TRANSACTIONS } from "./queries/userQuery";
import { LOGIN, LOGOUT, SIGN_UP } from "./mutations/userMutation";
import { GET_TRANSACTIONS } from "./queries/transactionQuery";

const gql = {
    mutation: {
        login: LOGIN,
        logout: LOGOUT,
        signUp: SIGN_UP,
        createTransaction: CREATE_TRANSACTION,
        deleteTransaction: DELETE_TRANSACTION,
    },
    query: {
        // getAuthenticatedUser: 'GetAuthenticatedUser',
        getAuthenticatedUser: GET_AUTHENTICATED_USER,
        // getTransactions: 'GetTransactions',
        getTransactions: GET_TRANSACTIONS,
        getTransactionStatistics: 'GetTransactionStatistics',
        getUserAndTransactions: GET_USER_AND_TRANSACTIONS,
    },
}

export default gql