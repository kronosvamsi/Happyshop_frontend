import { useState } from "react";

function Login() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  function changeHandler(e) {
    // console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((values) => ({ ...values, [name]: value }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        // example: store token
        localStorage.setItem("token", data.access_token);
      } else {
        console.log("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username/Email</label>
          <input
            type="text"
            name="username"
            value={inputValue.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label> Password</label>
          <input
            type="text"
            name="password"
            value={inputValue.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit"> Login </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
