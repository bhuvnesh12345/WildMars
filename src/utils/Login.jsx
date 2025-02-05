// import React, { useState } from "react";
// import { useUser } from "./UserContext";

// const Login = () => {
//     const { user, login, logout } = useUser();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = () => {
//         const userData = { email, password }; // In real app, validate from backend
//         login(userData);
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                 <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//                 {user ? (
//                     <div className="text-center">
//                         <h3 className="text-lg font-medium">Welcome, {user.email}</h3>
//                         <button 
//                             onClick={logout} 
//                             className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full"
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 ) : (
//                     <div>
//                         {/* Email Input */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-medium mb-2">Email</label>
//                             <input 
//                                 type="email"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                 placeholder="Enter your email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         {/* Password Input */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-medium mb-2">Password</label>
//                             <input 
//                                 type="password"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                 placeholder="Enter your password"
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>

//                         {/* Login Button */}
//                         <button 
//                             onClick={handleLogin}
//                             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition duration-200"
//                         >
//                             Login
//                         </button>

//                         {/* Footer */}
//                         <p className="mt-4 text-gray-600 text-sm text-center">
//                             Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Login;




// import React, { useState, useEffect } from "react";
// import { useUser } from "./UserContext";
// import { useNavigate, useLocation } from "react-router-dom";

// const Login = () => {
//     const { user, login, logout } = useUser();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showWelcome, setShowWelcome] = useState(false);
    
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleLogin = () => {
//         const userData = { email, password }; // In real app, validate from backend
//         login(userData);

//         if (location.state?.from) {
//             // If the user was redirected from a product page, go back there
//             navigate(location.state.from);
//         } else {
//             // Show welcome message for 2 seconds before redirecting to home
//             setShowWelcome(true);
//             setTimeout(() => {
//                 navigate("/");
//             }, 1000);
//         }
//     };

//     useEffect(() => {
//         if (user) {
//             setTimeout(() => {
//                 navigate("/");
//             }, 2000);
//         }
//     }, [user, navigate]);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                 <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//                 {user ? (
//                     <div className="text-center">
//                         {showWelcome && <p className="text-green-500">Welcome, {user.email}!</p>}
//                         <button 
//                             onClick={logout} 
//                             className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full"
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 ) : (
//                     <div>
//                         {/* Email Input */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-medium mb-2">Email</label>
//                             <input 
//                                 type="email"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                 placeholder="Enter your email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         {/* Password Input */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-medium mb-2">Password</label>
//                             <input 
//                                 type="password"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                 placeholder="Enter your password"
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>

//                         {/* Login Button */}
//                         <button 
//                             onClick={handleLogin}
//                             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition duration-200"
//                         >
//                             Login
//                         </button>

//                         {/* Footer */}
//                         <p className="mt-4 text-gray-600 text-sm text-center">
//                             Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const { user, login, logout } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State for error message
    const [showWelcome, setShowWelcome] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            setError("Email and Password are required!");
            return;
        }

        setError(""); // Clear error if valid
        const userData = { email, password }; // In real app, validate from backend
        login(userData);

        if (location.state?.from) {
            navigate(location.state.from); // Redirect back to product page
        } else {
            setShowWelcome(true);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }, [user, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                {user ? (
                    <div className="text-center">
                        {showWelcome && <p className="text-green-500">Welcome, {user.email}!</p>}
                        <button 
                            onClick={logout} 
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input 
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input 
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Login Button */}
                        <button 
                            onClick={handleLogin}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition duration-200"
                        >
                            Login
                        </button>

                        {/* Footer */}
                        <p className="mt-4 text-gray-600 text-sm text-center">
                            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;