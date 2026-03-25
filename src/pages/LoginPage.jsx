import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import api from "../services/api";

function LoginPage() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((values) => ({ ...values, [name]: value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    const url = "/auth/login";
    api
      .post(url, inputValue)
      .then((response) => {
        // console.log("res", response.data);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        navigate("/");
      })
      .catch((err) => console.log("err", err));
  }

  return (
    <div>
      <h2>This is Login page</h2>
      <Login
        submithandler={submitHandler}
        changehandler={changeHandler}
        inputvalue={inputValue}
      />
    </div>
  );
}

export default LoginPage;
