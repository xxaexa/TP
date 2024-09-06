import { TextProps } from "../../types";

const MediumText = ({ text, className }: TextProps) => {
  return <div className={`text-lg ${className}`}>{text}</div>;
};

export default MediumText;
