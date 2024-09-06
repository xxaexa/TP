import { ButtonProps } from "../../types";

const Button = ({ icon, text, type = "button" }: ButtonProps) => {
  return (
    <button
      className={`px-2 py-2.5 mt-32 text-gray-900 placeholder-gray-500 border border-gray-100 bg-white rounded-lg shadow-lg w-[240px]`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
