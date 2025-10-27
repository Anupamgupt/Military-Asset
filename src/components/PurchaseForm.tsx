

function PurchaseForm() {
  return (
     <form className="flex  flex-col">
          <h1 className="text-[20px] text-medium">Record New Asset Purchase</h1>
          <h2 className="mt-4">Asset Name/Description</h2>
          <input
            className="input-container"
            type="text"
            name=""
            id=""
            placeholder="e.g. M416"
          />
          <div className="flex mt-2 gap-2 items-center justify-center">
            <div>
              <h2>Serial Number</h2>
              <input
                className="input-container"
                type="text"
                name=""
                id=""
                placeholder="e.g. M416"
              />
            </div>
            <div>
              <h2>Quantity</h2>
              <input
                className="input-container"
                type="text"
                name=""
                id=""
                placeholder="e.g. M416"
              />
            </div>
          </div>
          <h2>Equipment Type</h2>
          <input
            className="input-container"
            type="text"
            name=""
            id=""
            placeholder="e.g. M416"
          />
          <div className="flex mt-2 gap-2 items-center justify-center">
            <div>
              <h2>Serial Number</h2>
              <input
                className="input-container"
                type="text"
                name=""
                id=""
                placeholder="e.g. M416"
              />
            </div>
            <div>
              <h2>Quantity</h2>
              <input
                className="input-container"
                type="text"
                name=""
                id=""
                placeholder="e.g. M416"
              />
            </div>
          </div>
          <h2>Notes/Comments</h2>
          <textarea
            className="input-container"
            typeof="text"
            placeholder="comments"
          />
        </form>
  )
}

export default PurchaseForm