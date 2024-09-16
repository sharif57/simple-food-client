import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { registerUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const notify = () => toast.success("User registered successfully!");

    const handleRegister = (e) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(userName, photo, email, password);

        // Password validation
        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }

        setError(''); // Clear errors if password is valid

        // Register user
        registerUser(email, password)
            .then(() => {
                updateUserProfile(userName, photo)
                    .then(() => {
                        notify(); // Show success notification
                        navigate(location?.state ? location.state : '/');
                    })
                    .catch(err => setError(err.message));
            })
            .catch(err => setError(err.message));
    };

    return (
        <div className="mt-10 mb-10">
            <div>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleRegister}>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Sign up
                                </p>
                                <p className="text-center space-y-3 mb-3">Please Enter Your Personal Data</p>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Your Username
                                    </label>
                                    <input
                                        placeholder="JohnDoe"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
                                        type="text"
                                        name="userName"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Photo URL
                                    </label>
                                    <input
                                        placeholder="Photo URL"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
                                        type="text"
                                        name="photo"
                                    />
                                </div>
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
                                    Create an account
                                </button>
                                <h1 className="text-center">
                                    Already have an account? 
                                    <Link to={'/login'} className="font-bold text-yellow-400 ml-4">Sign in</Link>
                                </h1>
                            </div>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;

