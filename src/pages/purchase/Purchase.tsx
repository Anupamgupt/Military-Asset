import PurchaseForm from "../../components/PurchaseForm";
import PurchaseHistory from "../../components/PurchaseHistory";

function Purchase() {
  return (
    <div className="pt-20 p-7 flex justify-center gap-5 text-amber-50">
      <div className="bg-[#263441]  p-6 rounded-sm flex-[0.6]">
        <PurchaseForm/>
      </div>
      <div className="bg-[#263441] p-6 rounded-sm flex-[1.4]">
        <PurchaseHistory/>
      </div>
    </div>
  );
}

export default Purchase;
