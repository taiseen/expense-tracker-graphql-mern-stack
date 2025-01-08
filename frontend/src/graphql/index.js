import { GET_TRANSACTION, GET_TRANSACTION_STATISTICS, GET_TRANSACTIONS } from "./queries/transactionQuery";
import { CREATE_TRANSACTION, DELETE_TRANSACTION, UPDATE_TRANSACTION } from "./mutations/transactionMutation";
import { GET_AUTHENTICATED_USER, GET_USER_AND_TRANSACTIONS } from "./queries/userQuery";
import { LOGIN, LOGOUT, SIGN_UP } from "./mutations/userMutation";


const gql = {

    mutation: {
        login: LOGIN,
        logout: LOGOUT,
        signUp: SIGN_UP,
        createTransaction: CREATE_TRANSACTION,
        deleteTransaction: DELETE_TRANSACTION,
        updateTransaction: UPDATE_TRANSACTION,
    },

    query: {
        // getAuthenticatedUser: 'GetAuthenticatedUser',
        getAuthenticatedUser: GET_AUTHENTICATED_USER,
        getTransaction: GET_TRANSACTION,
        // getTransactions: 'GetTransactions',
        getTransactions: GET_TRANSACTIONS,
        // getTransactionStatistics: 'GetTransactionStatistics',
        getTransactionStatistics: GET_TRANSACTION_STATISTICS,
        getUserAndTransactions: GET_USER_AND_TRANSACTIONS,
    },
}

export default gql