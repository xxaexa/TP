import MediumText from "../texts/MediumText";
import { CategoryBoxProps } from "../../types";
import SmallText from "../texts/SmallText";
import { formatToRupiah } from "../../helper";

const CategoryBox = ({ category, categoryIndex }: CategoryBoxProps) => {
  return (
    <div key={categoryIndex} className="mb-8">
      <MediumText text={category.category_name} className="font-bold mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {category.menu.map((product, productIndex) => (
          <div
            key={productIndex}
            id={product.name}
            className="border p-4 rounded-lg shadow-lg bg-white flex justify-center gap-4"
          >
            <img
              src={product.photo}
              alt={product.name}
              className="w-1/5 object-cover"
            />
            <div className="w-3/5">
              <SmallText
                text={product.name}
                className="text-sm font-semibold mb-2"
              />
              <SmallText
                text={product.description}
                className="text-gray-600 mb-2 text-xs"
              />
            </div>
            <p></p>

            <SmallText
              text={formatToRupiah(product.price)}
              className="w-1/5 text-sm font-bold text-right"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBox;
