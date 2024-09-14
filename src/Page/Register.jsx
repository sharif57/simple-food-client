// import { useContext, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {
//     const { registerUser, updateUserProfile } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [error, setError] = useState('');

//     const notify = () => toast.success("User registered successfully!");

//     const handleRegister = (e) => {
//         e.preventDefault();
//         const userName = e.target.userName.value;
//         const photo = e.target.photo.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         console.log(userName, photo, email, password);

//         // Password validation
//         if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
//             setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
//             return;
//         }

//         setError(''); // Clear errors if password is valid

//         // Register user
//         registerUser(email, password)
//             .then(() => {
//                 updateUserProfile(userName, photo)
//                     .then(() => {
//                         notify(); // Show success notification
//                         navigate(location?.state ? location.state : '/');
//                     })
//                     .catch(err => setError(err.message));
//             })
//             .catch(err => setError(err.message));
//     };

//     return (
//         <div className="mt-10 mb-10">
//             <div>
//                 {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//                 <form onSubmit={handleRegister}>
//                     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
//                         <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
//                             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                                 <p className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
//                                     Sign up
//                                 </p>
//                                 <p className="text-center space-y-3 mb-3">Please Enter Your Personal Data</p>
//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900">
//                                         Your Username
//                                     </label>
//                                     <input
//                                         placeholder="JohnDoe"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
//                                         type="text"
//                                         name="userName"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900">
//                                         Photo URL
//                                     </label>
//                                     <input
//                                         placeholder="Photo URL"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
//                                         type="text"
//                                         name="photo"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900">
//                                         Your Email
//                                     </label>
//                                     <input
//                                         placeholder="johndoe@example.com"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
//                                         type="email"
//                                         name="email"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block mb-2 text-sm font-medium text-gray-900">
//                                         Password
//                                     </label>
//                                     <input
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-2xl block w-full p-2.5"
//                                         placeholder="••••••••"
//                                         type="password"
//                                         name="password"
//                                         required
//                                     />
//                                 </div>

//                                 <button
//                                     className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
//                                     type="submit"
//                                 >
//                                     Create an account
//                                 </button>
//                                 <h1 className="text-center">
//                                     Already have an account? 
//                                     <span className="font-bold text-yellow-400 ml-4">Sign in</span>
//                                 </h1>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// };

// export default Register;



import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hook/axiosPublic";



const Register = () => {


    const axiosPublic = UseAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm()

    const { registerUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(result => {
    //             console.log(result.user);
    //             const userInfo = {
    //                 email: result.user?.email,
    //                 name: result.user?.displayName
    //             };
    //             axiosPublic.post('/users', userInfo)
    //                 .then(res => {
    //                     if (res.data.insertedId) {
    //                         console.log('User added to the database');
    //                         navigate('/');
    //                     } else {
    //                         console.log(res.data.message); // Handle the case where the user already exists
    //                     }
    //                 });
    //         })
    //         .catch(error => {
    //             console.error('Login failed:', error.message);
    //         });
    // };

    const onSubmit = (data) => {
        console.log(data)
        registerUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <div>
            <div className="  ">
                <div className=" w-full font-Roboto max-w-md mx-auto p-4 rounded-md shadow-2xl mt-4   dark:text-gray-800 ">

                    <div className="card   shadow-xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <img
                                    alt="Your Company"
                                    src="https://i.ibb.co/vYxPFsF/Logo.png"
                                    className="mx-auto h-10 w-auto"
                                />
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                    Register Now!
                                </h2>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue="test" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" defaultValue="test" {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue="test" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" defaultValue="test" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]$/
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password is required</span>}

                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be less 20 character </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have one uppercase , one lower case and one number  </p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="sign up" />
                            </div>
                        </form>
                        <p className="text-center text-blue-700"><small>ALready have an account <Link to={'/login'} className="underline">LogIn</Link></small></p>

                        <div className='divider'>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;