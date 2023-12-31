import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../../reducers/loginReducer";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.login.loginData.token);
  const error = useSelector((state) => state.login.error);

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
    //When the user logs in, the token is saved in the local storage then the user is redirected to the home page
    if (token) {
      localStorage.setItem("loggedInUser", JSON.stringify(token));
      navigate("/home");
    }
    //This checks if the user is logged in and redirects to the home page
    if (localStorage.getItem("loggedInUser")) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <section className="animate__animated animate__fadeInLeft h-screen bg-white pt-10 dark:bg-black xl:pt-32">
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
          <p className="inline-flex items-center p-4 text-lg font-medium text-blue-600 hover:underline dark:text-blue-500 md:p-1">
            <Link to="/">Read more about Brainy</Link>
            <svg
              className="ml-2 h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </p>
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
                <p className="py-2 text-blue-600 hover:underline dark:text-blue-500">
                  <Link to="/register">Create an account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
