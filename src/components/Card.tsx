function Card({ data }: { data: string }) {
  return <div className="w-[200px] shadow-xl/10 shadow-[#4086a0] bg-[#1c2b31] ring-1 ring-[#6998AB] rounded-2xl p-5   hover:ring-[#85e678]
                  transition-all duration-200 ease-in-out
                  cursor-pointer">
    <p className="w-[50%]">{data}</p>
    <h2 className="mt-2 text-3xl">26,200</h2>
  </div>;
}

export default Card;
