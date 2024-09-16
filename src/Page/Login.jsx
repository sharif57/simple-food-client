import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return <div>
    <div className="mt-10 mb-10">
      <div>
        {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
        <form >
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account                </p>
                <p className="text-center space-y-3 mb-3">Please enter your email and password to continue</p>


                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your Email
                  </label>
                  <input
                    placeholder="johndoe@example.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
                    placeholder="••••••••"
                    type="password"
                    name="password"
                    required
                  />
                </div>

                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                  type="submit"
                >
                  Log in
                </button>
                <h1 className="text-center">
                  Create a new account?
                  <Link to={'/register'} className="font-bold text-yellow-400 ml-4">Register</Link>
                </h1>
              </div>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  </div>;
};
export default Login;