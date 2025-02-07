// import React from "react";
// import { useUser } from "../utils/UserContext";

// const Cart = () => {
//     const { user, cart } = useUser();

//     if (!user) {
//         return <h3>Please log in to view your cart</h3>;
//     }

//     return (
//         <div>
//             <h3>Your Cart</h3>
//             {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item, index) => <p key={index}>{item.name}</p>)}
//         </div>
//     );
// };

// export default Cart;


// import React, { useState, useEffect } from "react";

// // Placeholder image for empty cart
// const emptyCartImage = "https://via.placeholder.com/500x300?text=Your+Cart+is+Empty";

// const Cart = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating login state
//   const [cartItems, setCartItems] = useState([]); // Simulating cart state

//   // Simulating a check to see if the user is logged in
//   useEffect(() => {
//     // You can replace this with actual authentication check logic
//     const userLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Or use context if needed
//     setIsLoggedIn(userLoggedIn);

//     // Simulating fetching cart data
//     if (userLoggedIn) {
//       // Fetch cart items if logged in
//       setCartItems([]); // Empty cart for demonstration
//     }
//   }, []);

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       {/* If user is not logged in */}
//       {!isLoggedIn ? (
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">Please Log In to View Your Cart</h2>
//           <p className="mt-4 text-lg text-gray-500">
//             You need to be logged in to view and manage your cart. Please log in to proceed.
//           </p>
//           <button
//             className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700"
//             onClick={() => alert("Redirecting to login...")}
//           >
//             Log In
//           </button>
//         </div>
//       ) : (
//         // If user is logged in and the cart is empty
//         <div className="text-center">
//           {cartItems.length === 0 ? (
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900">Your Cart is Empty</h2>
//               <p className="mt-4 text-lg text-gray-500">
//                 It looks like you haven't added anything to your cart yet.
//               </p>
//               <img
//                 src={emptyCartImage}
//                 alt="Empty Cart"
//                 className="mx-auto mt-8 w-96 h-auto object-contain"
//               />
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900">Your Cart</h2>
//               <p className="mt-4 text-lg text-gray-500">Here are the items in your cart.</p>
//               <ul className="mt-8 space-y-6">
//                 {cartItems.map((item, index) => (
//                   <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
//                       <p className="text-gray-600">{item.price}</p>
//                     </div>
//                     <button className="text-red-600 hover:text-red-700">
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-8 text-right">
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   Total: $
//                   {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
//                 </h3>
//                 <button
//                   className="mt-4 px-6 py-2 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700"
//                   onClick={() => alert("Proceeding to checkout...")}
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


// import React from 'react';
// //import { useUserContext } from './UserContext';
// import { useUser } from '../utils/UserContext';
// // Placeholder image for empty cart
// const emptyCartImage = "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png";

// const Cart = () => {
//   const {  addToCart,cart, user } = useUser();

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       {/* If user is not logged in */}
//       {!user ? (
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">Please Log In to View Your Cart</h2>
//           <p className="mt-4 text-lg text-gray-500">
//             You need to be logged in to view and manage your cart. Please log in to proceed.
//           </p>
//           <button
//             className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700"
//             onClick={() => alert("Redirecting to login...")}
//           >
//             Log In
//           </button>
//         </div>
//       ) : (
//         // If user is logged in and the cart is empty
//         <div className="text-center">
//           {cart.length === 0 ? (
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900">Your Cart is Empty</h2>
//               <p className="mt-4 text-lg text-gray-500">
//                 It looks like you haven't added anything to your cart yet.
//               </p>
//               <img
//                 src={emptyCartImage}
//                 alt="Empty Cart"
//                 className="mx-auto mt-8 w-96 h-auto object-contain"
//               />
//               <button
//                 className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700"
//                 onClick={() => addToCart({ name: "Sample Item", price: 29.99 })}
//               >
//                 Add Sample Item to Cart
//               </button>
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900">Your Cart</h2>
//               <p className="mt-4 text-lg text-gray-500">Here are the items in your cart.</p>
//               <ul className="mt-8 space-y-6">
//                 {cart.map((item, index) => (
//                   <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
//                       <p className="text-gray-600">${item.price}</p>
//                     </div>
//                     <button
//                       className="text-red-600 hover:text-red-700"
//                       onClick={() => alert("Removing item...")}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-8 text-right">
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   Total: $
//                   {/* {cart.reduce((total, item) => total + item.price, 0).toFixed(2)} */}
//                 </h3>
//                 <button
//                   className="mt-4 px-6 py-2 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700"
//                   onClick={() => alert("Proceeding to checkout...")}
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useUser } from '../utils/UserContext';
import { Link } from 'react-router-dom';
  
// Placeholder image for an empty cart
const emptyCartImage = "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png";

const Cart = () => {
  const { user, cart, removeFromCart } = useUser();

  console.log(cart)

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      {!user ? (
        // If user is not logged in
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Please Log In to View Your Cart
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            You need to be logged in to view and manage your cart.
          </p>
          <Link to="/login">
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700"
            onClick={() => alert("Redirecting to login...")}
          >
            Log In
          </button>
          </Link>
        </div>
      ) : (
        // If user is logged in
        <div className="max-w-screen-xl mx-auto">
          {cart.length === 0 ? (
            // If cart is empty
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Your Cart is Empty
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                It looks like you haven't added anything to your cart yet.
              </p>
              <img
                src={emptyCartImage}
                alt="Empty Cart"
                className="mx-auto mt-8 w-96 h-auto object-contain"
              />
            </div>
          ) : (
            // If cart has items, display each item as a card
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cart.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.type}</p>
                    <p className="mt-2 font-semibold text-blue-600">₹{item.finalPrice}</p>
                  </div>
                  <div className="flex justify-between items-center p-4 border-t">
                    <Link to={"/buynow/"+ item?.id}>
                    <button
                    //   onClick={() => handleBuyNow(item)}
                      className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700"
                    >
                      Buy Now
                    </button>
                    </Link>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
