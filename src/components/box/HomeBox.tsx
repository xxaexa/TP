import MediumText from "../texts/MediumText";
import { HomeBoxProps } from "../../types";
import { formatToRupiah } from "../../helper";

const HomeBox = ({ onClick, user }: HomeBoxProps) => {
  return (
    <div className="absolute inset-0 bg-white bg-opacity-50 m-4 rounded-xl flex flex-col shadow-xl p-4">
      <MediumText text={user.result.greeting} className="font-semibold mb-1" />
      <MediumText text={user.result.name} className="font-bold" />

      <div className="flex flex-row items-center justify-center mt-3">
        <div className="w-1/4 flex items-center justify-center">
          <img
            src={user.result.qrcode}
            alt="qr-icon"
            className="w-[80px] shadow-xl rounded-full p-1 cursor-pointer"
            onClick={onClick}
          />
        </div>
        <div className="border-dashed border-l-2 border-gray-300 h-16 mx-4" />
        <div className="w-3/4 flex items-center">
          <div className="w-full">
            <div className="flex justify-between">
              <MediumText text={"Saldo"} />
              <MediumText
                text={formatToRupiah(user.result.saldo)}
                className="font-bold"
              />
            </div>
            <div className="flex justify-between mt-2">
              <MediumText text={"Points"} />
              <MediumText
                text={user.result.point.toString()}
                className="font-bold text-green-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBox;
