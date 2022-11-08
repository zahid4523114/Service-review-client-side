import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const { userRegister, signWithGmail, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  console.log(userRegister);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const password = form.password.value;
    //register
    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        profileUpdate(name, photo);
        console.log(user);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };
  const profileUpdate = (name, photo) => {
    updateUser(name, photo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleRegister} className="w-75 mx-auto my-5">
      <h1 className="my-3">Register</h1>
      <div id="emailHelp" class="form-text">
        We'll never share your email and password with anyone else.
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          User name
        </label>
        <input
          required
          type="text"
          placeholder="name"
          name="name"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Photo url
        </label>
        <input
          required
          type="text"
          placeholder="url"
          name="photo"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <p className="text-danger">{error}</p>
      <Link className="text-primary" to="/logIn">
        <p> Already have an account?</p>
      </Link>
      <button type="submit" class="btn btn-primary rounded-5">
        Sign Up
      </button>
      <div className="mx-auto text-center">
        <Link onClick={signWithGmail}>
          <button className="btn rounded-5 shadow-lg mt-4">
            <FcGoogle className="fs-5"></FcGoogle> Sign Up with Google
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Register;
