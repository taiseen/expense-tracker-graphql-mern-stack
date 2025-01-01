import { Navigate, Route, Routes } from "react-router-dom";
import TransactionPage from "./pages/TransactionPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

const App = () => {

  const data = null
  const loading = false

  if (loading) return null;

  return (
    <>
      {data?.authUser && <Header />}

      <Routes>
        {/* <Route path='/' element={data?.authUser ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/login' element={!data?.authUser ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='/signup' element={!data?.authUser ? <SignUpPage /> : <Navigate to='/' />} />
        <Route
          path='/transaction/:id'
          element={data?.authUser ? <TransactionPage /> : <Navigate to='/login' />}
        /> */}



        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route
          path='/transaction/:id'
          element={<TransactionPage />}
        />


        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;