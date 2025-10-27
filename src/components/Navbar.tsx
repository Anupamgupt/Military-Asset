import { BsShield } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center items-center  w-full bg-[#263441]  h-14 p-3 border-b border-gray-700 fixed top-0 z-20">
        <div className="flex-1 flex items-center gap-3 text-amber-50 pl-4 ">
            <BsShield strokeWidth={1}/>
            <p className="text-xl font-light ">Military Asset Management</p>
        </div>
        <div className="flex-1 flex items-center gap-4 text-sm  justify-end font-light  pr-4 text-amber-50">
          <Link to="/"> <p className="cursor-pointer">Dashboard</p></Link>
          <Link to="/purchase"> <p className="cursor-pointer">Purchase</p></Link>
          <Link to="/transfer"> <p className="cursor-pointer">Transfer</p></Link>
          <Link to="/assignAndExpenditure"> <p className="cursor-pointer">Assigned</p></Link>
          <Link to="/role"> <p className="cursor-pointer">Role</p></Link>          
            <button className="flex  cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#334147] text-white text-sm font-normal ">Logout</button>
            <div className="w-[30px] h-[30px] rounded-full bg-amber-800">
            </div>
        </div>
    </nav>
  )
}

export default Navbar