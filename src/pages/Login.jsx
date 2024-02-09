import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  const toggleSignup = () => {
    navigate("/signup");
  };
  return (
    <section className="bg-[#4169E1] ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white "
        >
          <img className="w-8 h-8 mr-2" src="img/logo.png" alt="logo" />
          VCare Groups
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#4FA097] md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#4FA097] "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="signUpEmail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#4FA097] "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="signUpPassword"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#4FA097] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleLogin}
                disabled={submitButtonDisabled}
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <a
                  onClick={toggleSignup}
                  className="font-medium text-primary-600 hover:underline hover:cursor-pointer"
                >
                  Sign up
                </a>
              </p>
              <p className="text-sm text-red-600 ">{errorMsg}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
