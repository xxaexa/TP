import { InputProps } from "../../types";

const Input = ({
  id,
  style,
  name,
  type,
  label,
  value,
  onChange,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-lg text-gray-400 mb-3">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        className={`px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-100 rounded-lg shadow-lg w-[280px] outline-none ${style}`}
      />
    </div>
  );
};

export default Input;
