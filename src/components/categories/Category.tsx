import { CategoryProps } from "../../types";
import MediumText from "../texts/MediumText";

const Category = ({ text, active, onClick }: CategoryProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-full relative cursor-pointer py-2 ${
        active ? "border-b-4 border-black text-black" : "text-gray-400"
      }`}
    >
      <MediumText text={text} className="px-4" />
    </div>
  );
};

export default Category;
