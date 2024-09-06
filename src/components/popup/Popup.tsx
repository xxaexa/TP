import { PopupProps } from "../../types";

const Popup = ({ onClick, photo }: PopupProps) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="w-full h-full bg-white p-4 relative flex flex-col">
        <button
          className="absolute top-4 right-4 text-2xl p-"
          onClick={onClick}
        >
          X
        </button>
        <h2 className="text-lg font-semibold mt-32 mb-6 text-center">
          Show the QR Code below to the cashier
        </h2>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Popup;
