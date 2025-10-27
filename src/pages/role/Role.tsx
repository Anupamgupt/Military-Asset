function Role() {
  return (
    <div className="pt-20 p-7 flex justify-center gap-5 text-amber-50">
      {/* Left Table */}
      <div className="bg-[#263441] p-6 rounded-md flex-[0.6] shadow-md shadow-black/30 h-fit">
        <div className="bg-[#1c2b31] rounded-md overflow-hidden">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-xs bg-[#4d5a66] uppercase border border-[#4d5a66]">
              <tr>
                <th className="px-6 py-3">Role Name</th>
                <th className="px-6 py-3">User Assigned</th>
              </tr>
            </thead>
            <tbody>
              {[
                { role: "Admin", users: 2 },
                { role: "Base Commander", users: 5 },
                { role: "Logistic Officer", users: 12 },
              ].map(({ role, users }) => (
                <tr
                  key={role}
                  className="border border-[#4d5a66] hover:bg-[#37424d] transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-white">{role}</td>
                  <td className="px-6 py-4 font-medium text-white">{users}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-[#263441] p-6 rounded-md flex-[1.4] shadow-md shadow-black/30">
        <h1 className="text-3xl font-bold mb-3">Asset Transfer Page</h1>

        <form>
          <h2 className="mt-4 text-[20px] font-medium">Search User :</h2>
          <input
            type="text"
            placeholder="Anupam"
            className="w-full mt-2 mb-5 px-3 py-2 rounded-md bg-[#1c2b31] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#4d5a66]"
          />

          <h2 className="mt-4 text-[20px] font-medium">Permissions :</h2>
          <h3 className="mt-4 text-lg font-medium text-gray-300">
            Asset Management
          </h3>

          <div className="flex flex-col pl-3 mt-2 space-y-2">
            {["View Assets", "Add Assets", "Edit Assets", "Delete Assets", "Transfer Assets"].map(
              (perm) => (
                <label
                  key={perm}
                  className="flex items-center gap-3 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    className="
                      w-5 h-5 
                      border-2 border-[#4d5a66] 
                      rounded-sm 
                      bg-[#1c2b31] 
                      checked:bg-blue-500 
                      checked:border-blue-500 
                      transition-all 
                      duration-200 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-blue-400 
                      cursor-pointer
                    "
                  />
                  <span className="text-[15px] font-normal text-gray-200">
                    {perm}
                  </span>
                </label>
              )
            )}
          </div>
          <button className="btn mt-6">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Role;
