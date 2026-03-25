import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");
  const [validatedUser, setValidatedUser] = useState(false);
  const baseurl = "https://happyshop-render.onrender.com";

  const getUserInfo = async (token) => {
    try {
      let res = await fetch(baseurl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        let data = res.json().data;
        setUserId(data.userid);
        setUsername(data.name);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  const authenticateUser = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`${baseurl}/get_user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        let data = res.json().data;
        setValidatedUser(true);
        setUserId(data.userid);
        setUsername(data.username);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(authenticateUser, []);

  return (
    <AuthContext value={{ userId, setUserId, getUserInfo }}>
      {children}
    </AuthContext>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuth };
