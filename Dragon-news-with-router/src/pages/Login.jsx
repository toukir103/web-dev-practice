// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     // Dummy authentication (replace with your backend logic)
//     if (formData.email === "test@example.com" && formData.password === "123456") {
//       navigate("/dashboard");
//     } else {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login your account</h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 mb-1">Email address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-600 text-sm mt-5">
//           Don’t Have An Account?{" "}
//           <span
//             onClick={() => navigate("/register")}
//             className="text-red-500 cursor-pointer hover:underline"
//           >
//             Register
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
