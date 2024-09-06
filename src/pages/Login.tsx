import { useState, useEffect } from "react";
import { Input, Button } from "../components";
import Logo from "./../assets/icons/logo technopartner.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/userSlice";

import { useLoginUserMutation } from "../redux/api/authApi";
import { AuthRequest } from "../types";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser, { isError, isSuccess, error }] = useLoginUserMutation();

  const [values, setValues] = useState<AuthRequest>({
    grant_type: "password",
    client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
    client_id: "e78869f77986684a",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (values.username === "" || values.password === "") {
      alert("Username and password cannot be empty");
      return;
    }
    try {
      const response = await loginUser(values).unwrap();

      const { access_token, token_type } = response;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("token_type", token_type);

      dispatch(setUser(response));

      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Login Successful");
      navigate("/");
    } else if (isError && error && (error as any).data?.msg) {
      alert((error as any).data.msg);
    }
  }, [isSuccess, isError, error, navigate]);

  return (
    <div className="md-flex md-flex-row">
      <img src={Logo} alt="logo" className="px-8 mt-12 mx-auto [w-120px]" />
      <form onSubmit={handleLogin} className="space-y-6 py-6 text-center mw-2/">
        <Input
          label="Email"
          id="username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <div className="mt-12"></div>
        <Button text="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
