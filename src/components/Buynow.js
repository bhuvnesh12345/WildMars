

// // export default BuyNowPage;
// import React, { useState } from 'react';
// import { useUser } from "../utils/UserContext"; // Assuming you have a UserContext
// import { shoesData } from '../utils/shoesData';
// import { useParams } from 'react-router-dom';
// import emailjs from 'emailjs-com';

// const BuyNowPage = () => {
//   const { user } = useUser(); // Getting user context data
//   const { id } = useParams(); // Get the shoe ID from the URL params

//   const [formData, setFormData] = useState({
   
//     name: shoesData[id-1].name,
//     type: shoesData[id-1].type,
//     rupees: shoesData[id-1].price,
//     quantity: '',
//     size: '',
//     deliveryDate: '',
//     email: user?.email || '',
   
//    // Set user email from context
//     pinCode: '',
//     landmark: '',
//   });

//   const [orderPlaced, setOrderPlaced] = useState(false); // State for order status

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Send email to both user and owner after order is placed
//   const sendEmail = () => {
//     const ownerEmail = "bhuvneshpratap877@gmail.com"; // Replace with actual owner's email
//     const customerEmail = formData.email;

//     const emailBody = `
     
//      Name: ${formData.name}
//      Email: ${formData.email}
//       ${formData.name}
//      Price: ${formData.rupees}
//      Quantity:${formData.quantity}
     
//       Size: ${formData.size}
      
//       Lndmark: ${formData.landmark}
//       Pincode:  ${formData.pinCode}
//       For tracking, contact us at: +91-8279549681
//     `;



//     // Send email using EmailJS
//     const sendEmailWithEmailJS = (toEmail) => {
//       const templateParams = {
//         to_email: toEmail,
//         name: formData.name,
//         message: emailBody,
//       };

//       emailjs.send("service_or4n8mj", "template_0e6n77s", templateParams, 'clZw4YNz20eJ3oIKp')
//         .then((result) => {
//           console.log('Email sent successfully:', result.text);
//         })
//         .catch((error) => {
//           console.error('Error sending email:', error.text);
//         });
//     };

//     // Send email to both the shop owner and customer
//     sendEmailWithEmailJS(ownerEmail);
//     //sendEmailWithEmailJS(customerEmail);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Call the sendEmail function after form submission
//     sendEmail();

//     setOrderPlaced(true); // Mark order as placed and show success message
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         {orderPlaced ? (
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-4">Your Order Has Been Successfully Placed</h2>
//             <p>For tracking the order, call us at: <strong>+91-8279549681</strong></p>
//           </div>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Buy Now</h2>

//             <div className="mb-4">
//               <label className="block text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Type</label>
//               <input
//                 type="text"
//                 name="type"
//                 value={formData.type}
//                 readOnly
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Rupees</label>
//               <input
//                 type="text"
//                 name="rupees"
//                 value={formData.rupees}
//                 readOnly
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Quantity</label>
//               <input
//                 type="number"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Size</label>
//               <input
//                 type="text"
//                 name="size"
//                 value={formData.size}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Expected Delivery Date</label>
//               <input
//                 type="date"
//                 name="deliveryDate"
//                 value={formData.deliveryDate}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={user?.email} // Using email from context
//                 readOnly
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Pin Code</label>
//               <input
//                 type="text"
//                 name="pinCode"
//                 value={formData.pinCode}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Landmark</label>
//               <input
//                 type="text"
//                 name="landmark"
//                 value={formData.landmark}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Buy Now
//             </button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default BuyNowPage;


import React, { useState } from 'react';
import { useUser } from "../utils/UserContext"; // Your user context
import { shoesData } from '../utils/shoesData';
import { useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';

const BuyNowPage = () => {
  const { user } = useUser(); // Getting user context data
  const { id } = useParams(); // Get the shoe ID from the URL params

  // Get the product details from shoesData based on id
  const product = shoesData[Number(id) - 1] || {};

  // Set initial form state including product info and customer details
  const [formData, setFormData] = useState({
    productId: id,
    productName: product.name || '',
    productType: product.type || '',
    rupees: product.price || '',
    quantity: '',
    size: '',
    deliveryDate: '',
    customerName: '', // New field for customer's name
    email: user?.email || '',
    address: '', // New field for complete address
    pinCode: '',
    landmark: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false); // State for order status

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Build the email body using a formatted HTML string
  const buildEmailBody = () => {
    return `
      ID: ${formData.productId}
      Product Name: ${formData.productName}
      Product Type: ${formData.productType}
      Ruppees ₹${formData.rupees}
      Quantity: ${formData.quantity}
      Size: ${formData.size}
      Delivery date: ${formData.deliveryDate}
      Customer Name: ${formData.customerName}
      Email: ${formData.email}
      Customer Address: ${formData.address}
      Customer Pincode: ${formData.pinCode}
      LandMark: ${formData.landmark}
            
             
    `;
  };

  // Send email using EmailJS
  const sendEmail = () => {
    const ownerEmail = "bhuvneshpratap877@gmail.com"; // Replace with actual owner's email
    // Using the built email body
    const emailBody = buildEmailBody();

    const sendEmailWithEmailJS = (toEmail) => {
      const templateParams = {
        to_email: toEmail,
        // Pass individual fields as needed by your EmailJS template:
        product_id: formData.productId,
        product_name: formData.productName,
        product_type: formData.productType,
        price: formData.rupees,
        quantity: formData.quantity,
        size: formData.size,
        delivery_date: formData.deliveryDate,
        customer_name: formData.customerName,
        email: formData.email,
        address: formData.address,
        pin_code: formData.pinCode,
        landmark: formData.landmark,
        message: emailBody, // Alternatively, use a formatted message body
      };

      emailjs.send('service_or4n8mj', 'template_0e6n77s', templateParams, 'clZw4YNz20eJ3oIKp')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error.text);
        });
    };

    // Send email to the shop owner (and optionally to customer)
    sendEmailWithEmailJS(ownerEmail);
    // Optionally, uncomment the following line to also send to customer:
    // sendEmailWithEmailJS(formData.email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check that all required fields are filled (HTML required attribute will help enforce this)
    // Call sendEmail after submission
    sendEmail();
    setOrderPlaced(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {orderPlaced ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Your Order Has Been Successfully Placed
            </h2>
            <p>
              For tracking the order, call us at: 
              <strong> +91-8279549681</strong>
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Buy Now</h2>

            {/* Display Product ID */}
            <div className="mb-4">
              <label className="block text-gray-700">Product ID</label>
              <input
                type="text"
                name="productId"
                value={formData.productId}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Product Name (read-only) */}
            <div className="mb-4">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Product Type (read-only) */}
            <div className="mb-4">
              <label className="block text-gray-700">Type</label>
              <input
                type="text"
                name="productType"
                value={formData.productType}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Price (read-only) */}
            <div className="mb-4">
              <label className="block text-gray-700">Price (₹)</label>
              <input
                type="text"
                name="rupees"
                value={formData.rupees}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Customer Name */}
            <div className="mb-4">
              <label className="block text-gray-700">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Size */}
            <div className="mb-4">
              <label className="block text-gray-700">Size</label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Expected Delivery Date */}
            <div className="mb-4">
              <label className="block text-gray-700">Expected Delivery Date</label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email (read-only from context) */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pin Code */}
            <div className="mb-4">
              <label className="block text-gray-700">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Landmark */}
            <div className="mb-4">
              <label className="block text-gray-700">Landmark</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Buy Now
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default BuyNowPage;