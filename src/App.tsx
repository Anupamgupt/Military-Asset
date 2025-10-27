import Navbar from "./components/Navbar";
import AssignAndExpenditure from "./pages/assignAndExpenditure/AssignAndExpenditure";
import Dashboard from "./pages/dashboard/Dashboard";
import Purchase from "./pages/purchase/Purchase";
import Role from "./pages/role/Role";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
