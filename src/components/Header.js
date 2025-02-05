
// import { Link, useNavigate } from "react-router-dom"
// import { useUser } from "../utils/UserContext";
// const Header=()=>{
   
//     const { user, logout } = useUser();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout(); // Clears user data
//         navigate("/"); // Redirects to Home page after logout
//     }; 
//       return (
//           <div className="mx-40 " style={{
//             backgroundColor:""
//           }}>
               

                    
//                     <div className="fixed top-0 right-0 left-0 bg-zinc-200 bg-opacity-50 rounded-lg max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-50">
//                       <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyeO534hl4tYdD0EsPUjlW2Bp6CdjRSgc9T72AvZNSWUfpvh5v5nmkS2waNP164sKNDqI&usqp=CAU" className="w-10 h-10 rounded-full" alt="Food Villa Logo" />
//                           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WildMars</span>
//                       </Link>
//                       <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//                           <span className="sr-only">Open main menu</span>
//                           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//                           </svg>
//                       </button>
//                       <div className="hidden w-full md:block md:w-auto">
//                         <ul className="  bg-opacity-50 font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse">
//                           <li>
//                             <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
//                           </li>
//                           <li>
//                             <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
//                           </li>
//                           <li>
//                           <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
//                           </li>
//                           <li>
//                             <div className="relative">
//                             <Link to="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</Link>
//                             <p className=" absolute -right-3 -top-3 w-5 h-5 flex justify-center item-center rounded-full text-sm bg-green-600 text-white">{}</p>
//                             </div>
                         
//                           </li>
//                           {!user? 
//                           <li>
//                          <Link to="/login"> <h1  className="p-2 ml-4 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</h1></Link>
//                           </li>
//                          :
//                          <button 
//                          onClick={handleLogout} 
//                          className="p-2 ml-4 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//                      >
//                          Logout
//                      </button>
//                          }
//                         </ul>
//                       </div>
//                     </div>
                      
//           </div>
//       )
//   }
// export default Header  



import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../utils/UserContext";
import { useState } from "react";

const Header = ({ cartItems }) => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-zinc-200 bg-opacity-50 shadow-md z-50 ">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyeO534hl4tYdD0EsPUjlW2Bp6CdjRSgc9T72AvZNSWUfpvh5v5nmkS2waNP164sKNDqI&usqp=CAU" 
                        className="w-10 h-10 rounded-full" 
                        alt="Food Villa Logo" 
                    />
                    <span className="text-2xl font-semibold text-gray-900">WildMars</span>
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
                        <li><Link to="/" className="text-gray-900 hover:text-blue-700">Home</Link></li>
                        <li><Link to="/about" className="text-gray-900 hover:text-blue-700">About</Link></li>
                        {/* <li><Link to="/contact" className="text-gray-900 hover:text-blue-700">Contact</Link></li> */}
                        <li className="relative">
                            <Link to="/cart" className="text-gray-900 hover:text-blue-700">Cart</Link>
                            {cartItems > 0 && (
                                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartItems}
                                </span>
                            )}
                        </li>
                        {!user ? (
                            <li>
                                <Link to="/login">
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