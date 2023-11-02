import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../../reducers/loginReducer";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.loginData.token);
  const error = useSelector((state) => state.login.error);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginReducer(loginData));
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("loggedInUser", JSON.stringify(token));
      navigate("/home");
    }
    if (localStorage.getItem("loggedInUser")) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <section className="h-screen bg-gray-50 pt-10 dark:bg-gray-900 xl:pt-32">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Embrace Pure Expression. Welcome to Brainy!
          </h1>
          <p className="mb-6 p-4 text-lg font-normal text-gray-500 dark:text-gray-400 md:p-1 lg:text-xl">
            Welcome to Brainy! Immerse yourself in a realm where the power of
            words takes the lead. Join us in celebrating genuine expression.
            Here, your thoughts hold significance. Let's cultivate creativity
            together!
          </p>
          <a
            href="/"
            className="inline-flex items-center p-4 text-lg font-medium text-blue-600 hover:underline dark:text-blue-500 md:p-1"
          >
            Read more about Brainy
            <svg
              className="ml-2 h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div>
          <div className="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 sm:p-8 lg:max-w-xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in to Brainy
            </h2>
            <form className="mt-8 space-y-6" action="#" onSubmit={onSubmit}>
              <div>
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  onChange={handleInputChange}
                />
              </div>
              {error && (
                <p className="text-md font-semibold text-red-500">
                  Incorrect email or password.
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                {!loading ? (
                  "Login to Brainy"
                ) : (
                  <BeatLoader size={10} color={"#ffffff"} />
                )}
              </button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?{" "}
                <a
                  href="/register"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
