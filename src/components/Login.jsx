import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
export default function Login() {
  const [formState, setFomState] = useState({ email: "", password: "" });
  const auth = useContext(AuthContext);
  function handleChange(e) {
    const { name, value } = e.target;
    setFomState({ ...formState, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login0", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Success");
        console.log(res);
        auth.handleLogin(res.token);
      })
      .catch((err) => {});
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={handleChange} placeholder="username" />
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
}
