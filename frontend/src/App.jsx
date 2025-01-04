import { GET_AUTHENTICATED_USER } from "./graphql/queries/userQuery";
import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import TransactionPage from "./pages/TransactionPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import Loading from "./components/Loading";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {

  const { loading, data } = useQuery(GET_AUTHENTICATED_USER);
  const isAuthUser = data?.authUser;


  if (loading) return <div className="w-full h-screen flex justify-center items-center">
    <Loading />
  </div>;


  return (
    <>
      {isAuthUser && <Header />}

      <Routes>

        <Route path='/' element={isAuthUser ? <HomePage /> : <Navigate to='/login' />} />

        <Route path='/login' element={!isAuthUser ? <LoginPage /> : <Navigate to='/' />} />

        <Route path='/signup' element={!isAuthUser ? <SignUpPage /> : <Navigate to='/' />} />

        <Route
          path='/transaction/:id'
          element={isAuthUser ? <TransactionPage /> : <Navigate to='/login' />}
        />

        <Route path='*' element={<NotFoundPage />} />

      </Routes>


      <Toaster />
    </>
  );
}

export default App;