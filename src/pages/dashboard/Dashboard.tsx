import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dashboard.css";
import Card from "../../components/Card";

const Dashboard: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [equipmentType, setEquipmentType] = useState("");

  return (
    <div className="pt-20 p-7 flex items-center justify-center">
      <div className=" py-5 px-6 w-full bg-[#263441]  rounded-sm">
        <h1 className="text-4xl font-bold text-center text-gray-100">
          Asset Management Dashboard
        </h1>

        <form className="flex  justify-between mt-4 bg-[#1c2b31] p-5 rounded-sm">
          <div className="flex items-center gap-3 flex-wrap ">
            <p className="text-gray-100">Date Range: </p>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                className="cursor-pointer flex items-center justify-center "
                calendarClassName="shadow-lg"
              />
            </div>
            <select
              value={equipmentType}
              onChange={(e) => setEquipmentType(e.target.value)}
              className="
                  px-4 py-[10px]
                  rounded-lg
                  bg-[#1F2937]        
                  text-gray-100     
                  border border-gray-600
                  shadow-sm
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-blue-400
                  transition-all duration-200 ease-in-out
                  cursor-pointer
                   appearance-none 
                  "
            >
              <option value="">Select Base</option>
              <option value="vehicle">Vehicle</option>
              <option value="weapon">Weapon</option>
              <option value="ammunition">Ammunition</option>
              <option value="communication">Communication Equipment</option>
            </select>
            <select
              value={equipmentType}
              onChange={(e) => setEquipmentType(e.target.value)}
              className="
                  px-4 py-[10px]
                  rounded-lg
                  bg-[#1F2937]        
                  text-gray-100     
                  border border-gray-600
                  shadow-sm
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-blue-400
                  transition-all duration-200 ease-in-out
                  cursor-pointer
                   appearance-none 
                  "
            >
              <option value="">Select Base</option>
              <option value="vehicle">Vehicle</option>
              <option value="weapon">Weapon</option>
              <option value="ammunition">Ammunition</option>
              <option value="communication">Communication Equipment</option>
            </select>
          </div>

          <button type="submit" className="btn">Apply Filters</button>
        </form>
        <div className="flex flex-wrap items-center justify-between mt-6 text-amber-50 gap-5">
          <Card data="Opening Balance" />
          <Card data="Closing Balance" />
          <Card data="Net Movement" />
          <Card data="Assigned Assets" />
          <Card data="Expended Assets" />
        </div>
        <div className="bg-[#1c2b31] p-4 rounded-sm mt-6">
          <h2 className="text-white text-xl font-medium leading-tight tracking-[-0.015em] px-4 pb-3 pt-2">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400  ">
              <thead className="text-xs text-gray-400 uppercase ">
                <tr>
                  <th className="px-6 py-3 " scope="col">Asset ID</th>
                  <th className="px-6 py-3" scope="col">Asset Name</th>
                  <th className="px-6 py-3" scope="col">Status</th>
                  <th className="px-6 py-3" scope="col">Base</th>
                  <th className="px-6 py-3 " scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b border-b-[#4d5a66]">
                  <td className="px-6 py-4 font-medium text-white">#A458B</td>
                  <td className="px-6 py-4 text-white">Humvee M1151</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">Assigned</span>
                  </td>
                  <td className="px-6 py-4 text-white">2023-10-26</td>
                  <td className="px-6 py-4 text-white">Fort Bragg</td>
                </tr>
                <tr className="border-b border-b-[#4d5a66]">
                  <td className="px-6 py-4 font-medium text-white">#A458B</td>
                  <td className="px-6 py-4 text-white">Humvee M1151</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">Assigned</span>
                  </td>
                  <td className="px-6 py-4 text-white">2023-10-26</td>
                  <td className="px-6 py-4 text-white">Fort Bragg</td>
                </tr>
                <tr className=" border-b border-b-[#4d5a66] ">
                  <td className="px-6 py-4 font-medium text-white">#A458B</td>
                  <td className="px-6 py-4 text-white">Humvee M1151</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">Assigned</span>
                  </td>
                  <td className="px-6 py-4 text-white">2023-10-26</td>
                  <td className="px-6 py-4 text-white">Fort Bragg</td>
                </tr>
                <tr className=" border-b border-b-[#4d5a66]">
                  <td className="px-6 py-4 font-medium text-white">#A458B</td>
                  <td className="px-6 py-4 text-white">Humvee M1151</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">Assigned</span>
                  </td>
                  <td className="px-6 py-4 text-white">2023-10-26</td>
                  <td className="px-6 py-4 text-white">Fort Bragg</td>
                </tr>
                <tr className=" border-b border-b-[#1a242d]">
                  <td className="px-6 py-4 font-medium text-white">#A458B</td>
                  <td className="px-6 py-4 text-white">Humvee M1151</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">Assigned</span>
                  </td>
                  <td className="px-6 py-4 text-white">2023-10-26</td>
                  <td className="px-6 py-4 text-white">Fort Bragg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
