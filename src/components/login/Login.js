import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { userLogin, signWithGmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //log in
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <form onSubmit={handleLogin} className="w-75 mx-auto my-5">
      <h1 className="my-3">Log In</h1>
      <div id="emailHelp" class="form-text">
        We'll never share your email and password with anyone else.
      </div>
      <div class="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <p className="text-danger">{error}</p>
      <button type="submit" class="btn btn-primary rounded-5">
        Log In
      </button>
      <div className="mx-auto text-center">
        <Link onClick={signWithGmail}>
          <button className="btn rounded-5 shadow-lg mt-4">
            <FcGoogle className="fs-5"></FcGoogle> Sign In with Google
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
