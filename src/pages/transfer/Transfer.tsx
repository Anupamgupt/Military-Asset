
function Transfer() {
  return (
    <div className="pt-20 p-7 flex flex-col gap-5 text-amber-50">
      <h1 className="text-4xl font-bold">Asset Transfer Page</h1>
      <p className="w-[50%]  text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi
        quidem, consectetur dignissimos reprehenderit eligendi libero ipsa iure
        suscipit earum recusandae fuga facere minima doloribus vitae dolore
        dolorem repellendus necessitatibus.
      </p>
      <h2 className="text-2xl font-bold mt-4">Initiate New Asset Transfer</h2>
      <div className=" bg-[#263441] p-6 rounded-sm flex-[0.6] flex justify-between items-end flex-wrap gap-2">
        <div>
          <p>Origin base</p>
          <select
            value=""
            className=" px-4 py-[10px] w-[100%] mt-1 rounded-lg bg-[#1F2937] text-gray-100 border border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-all duration-200 ease-in-out cursor-pointer "
          >
            <option value="">Select Base</option>
            <option value="vehicle">Vehicle</option>
            <option value="weapon">Weapon</option>
            <option value="ammunition">Ammunition</option>
            <option value="communication">Communication Equipment</option>
          </select>
        </div>
        <div>
            <p>Destination base</p>
          <select
            value=""
            className="px-4 py-[10px] w-[100%] mt-1 rounded-lg bg-[#1F2937] text-gray-100 border border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-all duration-200 ease-in-out cursor-pointer  "
          >
            <option value="">Select Base</option>
            <option value="vehicle">Vehicle</option>
            <option value="weapon">Weapon</option>
            <option value="ammunition">Ammunition</option>
            <option value="communication">Communication Equipment</option>
          </select>
        </div>
        <div>
            <p>Asset to Transfer</p>
            <input type="text" className=" input-container" placeholder="Asset"></input>
        </div>
        <div>
            <p>Asset to Transfer</p>
            <input type="text" className=" input-container" placeholder="Asset"></input>
        </div>
        <button className="btn">Initiate Transfer</button>
      </div>
      <h2 className="text-[24px] font-bold mt-5">Initiate New Asset Transfer</h2>
      <div className="">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400 bg-[#263441] rounded-sm">
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

export default Transfer;
