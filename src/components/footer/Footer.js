import React from "react";
import { FaFacebook, FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <h3 className="text-white">Contact Me</h3>
        <section class="mb-4">
          <a
            class="btn text-white  btn-floating m-1"
            style={{ backgroundColor: " #3b5998" }}
            href="#!"
            role="button"
          >
            <FaFacebook></FaFacebook>
          </a>

          <a
            class="btn text-white  btn-floating m-1"
            style={{ backgroundColor: " #55acee" }}
            href="#!"
            role="button"
          >
            <FaTwitter></FaTwitter>
          </a>

          <a
            class="btn text-white  btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <FaGoogle></FaGoogle>
          </a>
          <a
            class="btn text-white  btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <FaGithub></FaGithub>
          </a>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <span class="text-white" href="https://mdbootstrap.com/">
          Dewan Mohammod Zahid Hasan
        </span>
      </div>
    </footer>
  );
};

export default Footer;
