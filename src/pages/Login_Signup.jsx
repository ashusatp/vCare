// import { useContext, useEffect, useState, Fragment } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../firebase'
// // import { AuthContext } from '../App';
// // import './css/form.css';

// // function authenticateUser(email, password, set) {
// //   const endpoint = 'https://v-care-groups-backend-41436rrho-zodiac3k.vercel.app/login';

// //   fetch(endpoint, {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify({ email, password }),
// //   })
// //     .then(response => response.json())
// //     .then(data => {
// //       if (data.success) {
// //         set(data.success)
// //       } else {
// //         alert('Authentication failed. User not found!');
// //       }
// //     })
// //     .catch(error => {
// //       console.error('Error:', error);
// //       alert('An error occurred. Please try again.');
// //     });
// // }

// function registerUser(name, email, password) {
//   console.log(name, email, password);
//   const endpoint =
//     "https://v-care-groups-backend-41436rrho-zodiac3k.vercel.app/register";

//   fetch(endpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, password }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         alert("User registered successfully. You can now log in.");
//       } else {
//         alert("Registration failed. " + data.message);
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     });
// }

// const Login_Signup = () => {
//   const [isRegistered, setRegistered] = useState(true);
//   // const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
//   const navigate = useNavigate();

//   function handleLogin(e) {
//     if (!email || !password) {
//       return;
//     }
//     setSubmitButtonDisabled(true);
//   }

//   function handleSignup(e) {
//     // e.preventDefault();
//     // registerUser(name, email, password);
//   }

//   function toggleSignup() {
//     setRegistered(!isRegistered);
//   }

//   // useEffect(() => {
//   //   if (isLoggedIn) {
//   //     console.log(isLoggedIn);
//   //     navigate('/');
//   //   }
//   // }, [isLoggedIn, navigate]);

//   return (
//     <Fragment>
//       {isRegistered ? (
//         <section className="bg-[#4169E1] ">
//           <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
//             <a
//               href="#"
//               className="flex items-center mb-6 text-2xl font-semibold text-white "
//             >
//               <img className="w-8 h-8 mr-2" src="img/logo.png" alt="logo" />
//               VCare Groups
//             </a>
//             <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
//               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight text-[#4FA097] md:text-2xl ">
//                   Sign in to your account
//                 </h1>
//                 <form className="space-y-4 md:space-y-6" action="#">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-medium text-[#4FA097] "
//                     >
//                       Your email
//                     </label>
//                     <input
//                       type="email"
//                       id="signUpEmail"
//                       onChange={(e) => {
//                         setUserEmail(e.target.value);
//                       }}
//                       name="email"
//                       className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 "
//                       placeholder="name@company.com"
//                       required=""
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block mb-2 text-sm font-medium text-[#4FA097] "
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="signUpPassword"
//                       onChange={(e) => {
//                         setUserPassword(e.target.value);
//                       }}
//                       name="password"
//                       placeholder="••••••••"
//                       className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 "
//                       required=""
//                     />
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-start">
//                       <div className="flex items-center h-5">
//                         <input
//                           id="remember"
//                           aria-describedby="remember"
//                           type="checkbox"
//                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
//                           required=""
//                         />
//                       </div>
//                       <div className="ml-3 text-sm">
//                         <label htmlFor="remember" className="text-gray-500">
//                           Remember me
//                         </label>
//                       </div>
//                     </div>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-primary-600 hover:underline"
//                     >
//                       Forgot password?
//                     </a>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full text-white bg-[#4FA097] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                     onClick={handleLogin}
//                   >
//                     Sign in
//                   </button>
//                   <p className="text-sm font-light text-gray-500 ">
//                     Don’t have an account yet?{" "}
//                     <a
//                       onClick={toggleSignup}
//                       className="font-medium text-primary-600 hover:underline hover:cursor-pointer"
//                     >
//                       Sign up
//                     </a>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <section className="bg-[#4FA097] ">
//           <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
//             <a
//               href="#"
//               className="flex items-center mb-6 text-2xl font-semibold text-white "
//             >
//               <img className="w-8 h-8 mr-2" src="img/logo.png" alt="logo" />
//               VCare Groups
//             </a>
//             <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
//               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight text-[#4FA097] md:text-2xl ">
//                   Create Account
//                 </h1>
//                 <form className="space-y-4 md:space-y-6" action="#">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block mb-2 text-sm font-medium text-[#4FA097] "
//                     >
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="signName"
//                       onChange={(e) => {
//                         setName(e.target.value);
//                       }}
//                       name="name"
//                       className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 "
//                       placeholder="name@company.com"
//                       required=""
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-medium text-[#4FA097] "
//                     >
//                       Your email
//                     </label>
//                     <input
//                       type="email"
//                       id="signEmail"
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                       name="email"
//                       className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 "
//                       placeholder="name@company.com"
//                       required=""
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block mb-2 text-sm font-medium text-[#4FA097] "
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="signPassword"
//                       name="password"
//                       onChange={(e) => {
//                         setPassword(e.target.value);
//                       }}
//                       placeholder="••••••••"
//                       className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 "
//                       required=""
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full text-white bg-[#4FA097] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
//                     onClick={handleSignup}
//                     id="signUp"
//                   >
//                     Sign Up
//                   </button>
//                   <p className="text-sm font-light text-gray-500 ">
//                     Already have a account?{" "}
//                     <a
//                       onClick={toggleSignup}
//                       className="font-medium text-primary-600 hover:underline hover:cursor-pointer"
//                     >
//                       Log in
//                     </a>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* <section className="bg-[#4FA097] ">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
//           <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white ">
//             <img className="w-8 h-8 mr-2" src="img/logo.png" alt="logo" />
//             VCare Groups
//           </a>
//           <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-[#4FA097] md:text-2xl ">
//                 Sign in to your account
//               </h1>
//               <form className="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label for="email" className="block mb-2 text-sm font-medium text-[#4FA097] ">Your email</label>
//                   <input type="email" id="signUpEmail" onChange={(e)=>{setEmail(e.target.value)}} name="email" className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 " placeholder="name@company.com" required="" />
//                 </div>
//                 <div>
//                   <label for="password" className="block mb-2 text-sm font-medium text-[#4FA097] ">Password</label>
//                   <input type="password" id="signUpPassword" onChange={(e)=>{setPassword(e.target.value)}}  name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 " required="" />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-start">
//                     <div className="flex items-center h-5">
//                       <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
//                     </div>
//                     <div className="ml-3 text-sm">
//                       <label for="remember" className="text-gray-500">Remember me</label>
//                     </div>
//                   </div>
//                   <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
//                 </div>
//                 <button  type="submit" className="w-full text-white bg-[#4FA097] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"onClick={handleLogin}>Sign in</button>
//                 <p className="text-sm font-light text-gray-500 ">
//                   Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline ">Sign up</a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="bg-[#4FA097] ">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
//           <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white ">
//             <img className="w-8 h-8 mr-2" src="img/logo.png" alt="logo" />
//             VCare Groups
//           </a>
//           <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-[#4FA097] md:text-2xl ">
//               Create Account
//               </h1>
//               <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                   <label for="name" className="block mb-2 text-sm font-medium text-[#4FA097] ">Your Name</label>
//                   <input type="text" id="signName" onChange={(e)=>{setName(e.target.value)}} name="name" className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 " placeholder="name@company.com" required="" />
//                 </div>
//                 <div>
//                   <label for="email" className="block mb-2 text-sm font-medium text-[#4FA097] ">Your email</label>
//                   <input type="email" id="signEmail" onChange={(e)=>{setEmail(e.target.value)}}  name="email" className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 " placeholder="name@company.com" required="" />
//                 </div>
//                 <div>
//                   <label for="password" className="block mb-2 text-sm font-medium text-[#4FA097] ">Password</label>
//                   <input type="password" id="signPassword" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-[#4FA097] sm:text-sm rounded-lg focus:ring-[#4FA097] block w-full p-2.5 " required="" />
//                 </div>
               
//                 <button type="submit" className="w-full text-white bg-[#4FA097] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleSignup} id="signUp">Sign Up</button>
//                 <p className="text-sm font-light text-gray-500 ">
//                   Already have a account? <a href="#" className="font-medium text-primary-600 hover:underline ">Log in</a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>  */}
//     </Fragment>
//   );
// };

// export default Login_Signup;
