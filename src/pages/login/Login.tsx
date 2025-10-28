
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <div className="pt-20 p-6 flex items-center  justify-center gap-5 text-amber-50">
        <div className="bg-[#263441]  w-[40%]  p-6 rounded-sm ">
            <form className="flex flex-col gap-1">
                <h1 className="font-bold text-2xl w-[80%]">Welcome to Asset Management</h1>
                <h2 className="mt-4">Email :</h2>
                <input type="text" className="input-container" placeholder="Email"/>
                <h2 className="mt-4">Password : </h2>
                <input type="password" className="input-container" placeholder="Password"/>     
                <button className="btn mt-4">Login</button>
            </form>
             <div className="mt-4 flex items-center justify-center gap-6">
                    <div className="h-[1px] bg-gray-500 flex-1"></div>
                    <h1 className="text-gray-500">Or</h1>
                    <div className="h-[1px] bg-gray-500 flex-1"></div>
            </div>
            <button className="btn w-full mt-4 gap-2">
                <FaGoogle/>
                Login in with Google
            </button>
            <p className="text-gray-400 text-sm mt-3">Don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login


