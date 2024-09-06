// Menu.tsx

import { useState, useEffect, useRef } from "react";
import {
  BotNav,
  MediumText,
  Category,
  Loading,
  CategoryBox,
} from "../components";
import { useGetCategoriesMutation } from "../redux/api/categoriesApi";
import { MenuResponse } from "../types";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [categories, setCategories] = useState<MenuResponse | null>(null);

  const [getCategories, { isLoading, isSuccess, data }] =
    useGetCategoriesMutation();

  const handleClick = (index: number) => {
    setActiveIndex(index);
    categoryRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    if (isSuccess && data) {
      setCategories(data);
    }
  }, [isSuccess, data]);

  return (
    <div>
      <div className="bg-white sticky top-0 left-0 w-full z-10">
        <MediumText text={"MENU"} className="text-center py-4" />

        {isLoading ? (
          <Loading />
        ) : (
          <div className="overflow-x-auto bg-white">
            <ul className="flex bg-white whitespace-nowrap">
              {categories?.result.categories.map((category, index) => (
                <Category
                  key={index}
                  text={category.category_name}
                  active={activeIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pb-12">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="p-4">
            {categories?.result.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                ref={(el) => (categoryRefs.current[categoryIndex] = el)}
              >
                <CategoryBox
                  category={category}
                  categoryIndex={categoryIndex}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <BotNav />
    </div>
  );
};

export default Menu;
