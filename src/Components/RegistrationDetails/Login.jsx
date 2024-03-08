import React from "react";
import cta from "../../assets/png/CTA.png";
import { HiArrowLeft } from "react-icons/hi2";
const Login = () => {
  return (
    <div className="w-full">
      <div className="md:w-[80%] w-[90%] mx-auto">
        <div>
          <HiArrowLeft />
          <span>Login</span>
        </div>

        <div className="flex">
          <div className="">
            <img src={cta} width={589} height={550} alt="cta coaching" />
          </div>
          <div>
            <h1>Welcome to Lorem</h1>
            <div>
              <button>Login</button>
              <button>Register</button>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />{" "}
              typesetting industry.
            </p>
            <div>
              <label htmlFor="name">User name</label>
              <input type="text" placeholder="Enter your User name" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              <div>
                <input type="checkbox" />
                <label htmlFor="remember me">Remember me</label>
              </div>
              <div>
                <button>Forgot Password ? </button>
              </div>
            </div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
