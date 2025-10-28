import Navbar from "./components/Navbar";
import AssignAndExpenditure from "./pages/assignAndExpenditure/AssignAndExpenditure";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Purchase from "./pages/purchase/Purchase";
import Role from "./pages/role/Role";
import SignUp from "./pages/signUp/SignUp";
import Transfer from "./pages/transfer/Transfer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Dashboard />}/>
          <Route path="/purchase" element={ <Purchase />}/>
          <Route path="/transfer" element={ <Transfer />}/>
          <Route path="/assignAndExpenditure" element={ <AssignAndExpenditure />}/>
          <Route path="/role" element={ <Role /> }/>
          <Route path="/signUp" element={ <SignUp/> }/>
          <Route path="/login" element={ <Login/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
