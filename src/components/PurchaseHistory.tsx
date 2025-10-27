import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PurchaseHistory() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  // const [equipmentType, setEquipmentType] = useState("");
  return (
    <div>
      <h1 className="text-[20px] text-medium">Purchase History</h1>
      <form className="flex justify-between">
        <div className="flex items-center gap-2">
          <select value="" className="input-container">
            <option value="">Select Base</option>
            <option value="vehicle">Vehicle</option>
            <option value="weapon">Weapon</option>
            <option value="ammunition">Ammunition</option>
            <option value="communication">Communication Equipment</option>
          </select>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              className="input-container"
              calendarClassName="shadow-lg"
            />
          </div>
          <button className="btn">Submit</button>
        </div>
      </form>
       <div className=" p-4  mt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400 bg-[#263441] ">
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
  );
}

export default PurchaseHistory;
