import { useNavigate } from "react-router-dom";
import logo from "./../../assets/icons/logo technopartner.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token_type");

    navigate("/login");
  };

  return (
    <div className="bg-white p-2 flex justify-between items-center">
      <img src={logo} alt="logo-technopartner" className="w-[150px]" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
