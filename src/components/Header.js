 



// import { Link, useNavigate } from "react-router-dom";
// import { useUser } from "../utils/UserContext";
// import { useState } from "react";

// const Header = ({ cartItems }) => {
//     const { user, logout } = useUser();
//     const navigate = useNavigate();
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleLogout = () => {
//         logout();
//         navigate("/");
//     };

//     return (
//         <nav className="fixed top-0 left-0 right-0 bg-zinc-200 bg-opacity-50 shadow-md z-50 ">
//             <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
//                 {/* Logo */}
//                 <Link to="/" className="flex items-center space-x-3 ml-6">
//                     <img 
//                         src="logo.jpg" 
//                         // className="w-12 h-12 rounded-full" 
//                          className="w-12 h-12  rounded-full"
//                         alt="Wild Mars" 
//                     />
//                     {/* <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 drop-shadow-xl">
//   WildMars
// </h1> */}
//                 </Link>

//                 {/* Mobile Menu Toggle */}
//                 <button 
//                     onClick={() => setMenuOpen(!menuOpen)}
//                     className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
//                 >
//                     <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
//                     </svg>
//                 </button>

//                 {/* Navigation Links */}
//                 <div className={`absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
//                     <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
//                         <li><Link to="/" className="text-gray-900 hover:text-blue-700">Home</Link></li>
//                         <li><Link to="/about" className="text-gray-900 hover:text-blue-700">About</Link></li>
//                         {/* <li><Link to="/contact" className="text-gray-900 hover:text-blue-700">Contact</Link></li> */}
//                         <li className="relative">
//                             <Link to="/cart" className="text-gray-900 hover:text-blue-700">Cart</Link>
//                             {cartItems > 0 && (
//                                 <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                                     {cartItems}
//                                 </span>
//                             )}
//                         </li>
//                         {!user ? (
//                             <li>
//                                 <Link to="/login">
//                                     <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//                                         Login
//                                     </button>
//                                 </Link>
//                             </li>
//                         ) : (
//                             <li>
//                                 <button 
//                                     onClick={handleLogout} 
//                                     className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                                 >
//                                     Logout
//                                 </button>
//                             </li>
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Header;


import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../utils/UserContext";
import { useEffect, useState } from "react";

const Header = () => {
  console.log("header")
    const {cart, user, logout } = useUser();
    console.log(cart)
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
        setMenuOpen(false); // Close menu after logout
    };

    const handleNavClick = () => {
        setMenuOpen(false); // Close menu when clicking a link
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-zinc-200 bg-opacity-50 shadow-md z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 ml-6" onClick={handleNavClick}>
                    <img 
                        src="logo.jpg" 
                        className="w-12 h-12 rounded-full"
                        alt="Wild Mars" 
                    />
                </Link>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div className={`absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
                        <li><Link to="/" className="text-gray-900 hover:text-blue-700" onClick={handleNavClick}>Home</Link></li>
                        <li><Link to="/about" className="text-gray-900 hover:text-blue-700" onClick={handleNavClick}>About</Link></li>
                        <li className="relative">
                            <Link to="/cart" className="text-gray-900 hover:text-blue-700" onClick={handleNavClick}>Cart</Link>
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cart.length}
                                   
                                </span>
                                
                            )}
                             {console.log(cart.length)}
                        </li>
                        {!user ? (
                            <li>
                                <Link to="/login" onClick={handleNavClick}>
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                        Login
                                    </button>
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <button 
                                    onClick={handleLogout} 
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;