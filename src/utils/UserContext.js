// import { createContext, useContext, useEffect, useState } from "react";

// // Create Context
// const UserContext = createContext();

// // Provider Component
// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [cart, setCart] = useState([]);

//     // Load user from localStorage on app start
//     useEffect(() => {
//         const savedUser = JSON.parse(localStorage.getItem("user"));
//         const storedCart=JSON.parse(localStorage.getItem("cart"))
//         if (savedUser) {
//             setUser(savedUser);
//         }
//         if(storedCart)
//         {
//             setCart(storedCart)
//         }
//     }, []);

//     useEffect(()=>{
//        if(cart.length>0)
//        {
//         localStorage.setItem("cart",JSON.stringify(cart))
//        }
//     },[cart])
//     // Login function
//     const login = (userData) => {
//         localStorage.setItem("user", JSON.stringify(userData));
//         setUser(userData);
//     };

//     // Logout function
//     const logout = () => {
//         localStorage.removeItem("user");
//         localStorage.removeItem("cart")
//         setUser(null);
//         setCart([]); // Clear cart on logout
//     };

//     // Add item to cart
//     const addToCart = (item) => {
//         if (!user) {
//             alert("Please log in to add items to cart");
//             return;
//         }
//         setCart((prevCart) => [...prevCart, item]);
//     };

//     return (
//         <UserContext.Provider value={{ user, cart, login, logout, addToCart }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// // Custom Hook to use the context
// export const useUser = () => useContext(UserContext);




// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [cart, setCart] = useState([]);
//     const navigate=useNavigate

//     // Load user & their cart from localStorage when the app starts
//     useEffect(() => {
//         const storedUser = localStorage.getItem("user");

//         if (storedUser) {
//             const parsedUser = JSON.parse(storedUser);
//             setUser(parsedUser);

//             // Load the cart for the logged-in user
//             const userCart = localStorage.getItem(`cart_${parsedUser.email}`);
//             if (userCart) {
//                 setCart(JSON.parse(userCart));
//             }
//         }
//     }, []);

//     // Save cart to localStorage whenever it changes
//     useEffect(() => {
//         if (user) {
//             localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
//         }
//     }, [cart, user]);

//     const login = (userData) => {
//         setUser(userData);
//         localStorage.setItem("user", JSON.stringify(userData));

//         // Load cart for this user on login
//         const userCart = localStorage.getItem(`cart_${userData.email}`);
//         setCart(userCart ? JSON.parse(userCart) : []);
//     };

//     const logout = () => {
//         setUser(null);
//         setCart([]); // Clear cart from state
//         localStorage.removeItem("user"); // Remove user data from localStorage
//     };

//     const addToCart = (product) => {
//         if(!user)
//         {
//             navigate("/login")
//             return
//         }
//         setCart((prevCart) => {
//             const updatedCart = [...prevCart, product];
//             if (user) {
//                 localStorage.setItem(`cart_${user.email}`, JSON.stringify(updatedCart)); 
//             }
//             return updatedCart;
//         });
//     };

//     return (
//         <UserContext.Provider value={{ user, cart, login, logout, addToCart }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserContext;




import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children, navigate }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    // const [ShoeId, setShoeId]=useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            const userCart = localStorage.getItem(`cart_${parsedUser.email}`);
            if (userCart) {
                setCart(JSON.parse(userCart));
            }
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
        }
    }, [cart, user]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        const userCart = localStorage.getItem(`cart_${userData.email}`);
        setCart(userCart ? JSON.parse(userCart) : []);
    };

    const logout = () => {
        setUser(null);
        setCart([]);
        localStorage.removeItem("user");
    };

    const addToCart = (product) => {
        let message=""
        console.log(product)
        if (!user) {
            navigate("/login"); // Redirect to login page
            return;
        }

        setCart((prevCart) => {
            const itemExists = prevCart.some(item => item.id === product.id);
            
            if (!itemExists) {
                const updatedCart = [...prevCart, product];
                localStorage.setItem(`cart_${user.email}`, JSON.stringify(updatedCart));
                message="Item added to the cart"
                return updatedCart; // Add only if not exists
            }
            //window.alert("shoe is already added in the cart");
            message="Item already exits in cart"
            return prevCart; // Return same cart if item exists
        });
         
        return message;
    };

    const buyNow = (product) => {
        if (!user) {
            navigate("/login"); // Redirect to login page
            return;
        }
        else{
            //updateShoeId(product)
            console.log(product+1)
            navigate("/buynow/"+ product)
            return
        }
    };

    const removeFromCart=(itemToRemove)=>{
        setCart(cart.filter((item)=>item?.id!==itemToRemove?.id))
    }
    // const updateShoeId=(id)=>{
    //     setShoeId(id);
    // }

    return (
        <UserContext.Provider value={{ user, cart, login, logout, addToCart, buyNow, removeFromCart }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;