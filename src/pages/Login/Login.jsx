import React, { useRef, useState } from "react";
import useForm from "../../hooks/Form/useForm";

export default function Login() {
  const { username, email, password, handleChange, handleSubmit} = useForm({email: '', password: '', username: ''});
  const inputRef = useRef(null)
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="username"
          value={username}
          onChange={handleChange}
          name="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="text-white">
          Email address
        </label>
        <input
        ref={inputRef}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
