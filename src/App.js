import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="border border-black rounded-md p-[20px]  flex flex-row gap-5">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col">
            <h1 className="font-bold text-zinc-500">Card Number</h1>
          </div>
          <div className="border-b border-0 flex flex-row justify-between">
            <input
              className="outline-none"
              type="text"
              placeholder="1234 2345 1234 1234"
            />
            <img src="Images/mastercard.png" width={25} />
          </div>
          <div className="flex flex-row ">
            <div>
              <h1 className="font-bold text-zinc-500 justify-items ">MM YY</h1>
            </div>
            <div>
            
              <h1 className="font-bold text-zinc-500 ">CVC Code</h1>
            </div>
          </div>

          <div className="flex flex-row outline-none border-b border-0 border-black">
            <div>          
              <input
                type="date"
                className=""
                placeholder="mm/dd/yy"
              />
            </div>
            <div>
            <div>
              <input
                type="text"
                className="outline-none "
                placeholder="1 2 3"
              />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-zinc-500">Name</h1>
          </div>
          <div className="flex">
            <input
              className="outline-none border-b border-0 border-black w-[200px]"
              type="text"
              placeholder="Name"
            />
            <button className="px-5 py-1 w-fit rounded-full bg-purple-500 text-white fount-bold text-lg">
              Pay Now
            </button>
          </div>
        </div>
        <div>Section2</div>
      </div>
    </div>
  );
}

export default App;
