// import React, { useState } from 'react';

// const BuyNowPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     type: '',
//     rupees: '',
//     quantity: '',
//     size: '',
//     deliveryDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Buy Now</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Type</label>
//           <input
//             type="text"
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Rupees</label>
//           <input
//             type="number"
//             name="rupees"
//             value={formData.rupees}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Size</label>
//           <input
//             type="text"
//             name="size"
//             value={formData.size}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Expected Delivery Date</label>
//           <input
//             type="date"
//             name="deliveryDate"
//             value={formData.deliveryDate}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Buy Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BuyNowPage;


// import React, { use, useState } from 'react';
// import { useUser } from "../utils/UserContext"; // Assuming you have a UserContext
// import { shoesData } from '../utils/shoesData';
// import { useParams } from 'react-router-dom';
// const BuyNowPage = () => {
//   const { user} = useUser();
  
//   const {id}=useParams()

//   const [formData, setFormData] = useState({
//     name: shoesData[id-1].name,
//     type: shoesData[id-1].type, // Passed from ShoeCard
//     rupees: shoesData[id-1].price, // Passed from ShoeCard
//     quantity: '',
//     size: '',
//     deliveryDate: '',
//     email: '', // Will be set from context
//     pinCode: '',
//     landmark: '',
//   });
//   const [orderPlaced, setOrderPlaced] = useState(false);

  
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Send email to user and owner after order
//     const orderInfo = {
//       ...formData,
//       email: userEmail, // Add logged-in user email
//     };

//     // Call the buyNow function (you can integrate your email sending logic here)
//     //buyNow(orderInfo); 

//     setOrderPlaced(true); // Show order success message
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
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

// import React, { useState } from 'react';
// import { useUser } from "../utils/UserContext"; // Assuming you have a UserContext
// import { shoesData } from '../utils/shoesData';
// import { useParams } from 'react-router-dom';

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
//     email: user?.email || '', // Set user email from context
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
//     const ownerEmail = "bhuvneshpsingh05062001@gmail.com"; // Replace with actual owner's email
//     const customerEmail = formData.email;

//     const emailBody = `
//       <h3>Order Details</h3>
//       <p><strong>Customer Name:</strong> ${formData.name}</p>
//       <p><strong>Email:</strong> ${formData.email}</p>
//       <p><strong>Product:</strong> ${formData.name}</p>
//       <p><strong>Price:</strong> ₹${formData.rupees}</p>
//       <p><strong>Quantity:</strong> ${formData.quantity}</p>
//       <p><strong>Total Price:</strong> ₹${formData.rupees * formData.quantity}</p>
//       <p><strong>Size:</strong> ${formData.size}</p>
//       <p><strong>Expected Delivery Date:</strong> ${formData.deliveryDate}</p>
//       <p><strong>Shipping Address:</strong> ${formData.landmark}, ${formData.pinCode}</p>
//       <p><strong>For tracking, contact us at: +91-8279549681</strong></p>
//     `;

//     // Function to send email using SMTP.js
//     const sendSMTPMail = (toEmail) => {
//       window.Email.send({
//         Host: "smtp.gmail.com", // Use Gmail's SMTP server
//         Username: toEmail, // Your email address
//         Password: "Bhuvnesh@2001", // Your app password (for Gmail, or regular password for other providers)
//         To: "bhuvneshpratap877@gmail.com", // Recipient's email address
//         From: toEmail, // Your email address (this is the "From" address)
//         Subject: "Order Confirmation", // Subject of the email
//         Body: emailBody, // The content of the email
//         Port: 587, // Port for TLS (use 465 for SSL)
//         SecureToken: "", // You can leave this empty if you're using the traditional SMTP approach
//       }).then((message) => {
//         console.log(`Email sent:`, message);
//       }).catch((error) => {
//         console.error(`Error sending email:`, error);
//       });
      
      
//       // window.Email.send({
//       //   SecureToken: "YOUR_SECURE_TOKEN", // Replace with your SMTP.js secure token
//       //   To: toEmail,
//       //   From: "bhuvneshpratap877@gmail.com", // Replace with your email
//       //   Subject: "Order Confirmation",
//       //   Body: emailBody,
//       // }).then((message) => {
//       //   console.log(`Email sent to ${toEmail}:`, message);
//       // }).catch((error) => {
//       //   console.error(`Error sending email to ${toEmail}:`, error);
//       // });
//     };

//     // Send email to both the shop owner and customer
//     sendSMTPMail(ownerEmail);
//     //sendSMTPMail(customerEmail);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Call the sendEmail function after form submission
//     sendEmail();

//     setOrderPlaced(true); // Mark order as placed and show success message
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
import { useUser } from "../utils/UserContext"; // Assuming you have a UserContext
import { shoesData } from '../utils/shoesData';
import { useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';

const BuyNowPage = () => {
  const { user } = useUser(); // Getting user context data
  const { id } = useParams(); // Get the shoe ID from the URL params

  const [formData, setFormData] = useState({
    name: shoesData[id-1].name,
    type: shoesData[id-1].type,
    rupees: shoesData[id-1].price,
    quantity: '',
    size: '',
    deliveryDate: '',
    email: user?.email || '', // Set user email from context
    pinCode: '',
    landmark: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false); // State for order status

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send email to both user and owner after order is placed
  const sendEmail = () => {
    const ownerEmail = "bhuvneshpratap877@gmail.com"; // Replace with actual owner's email
    const customerEmail = formData.email;

    const emailBody = `
     
     Name: ${formData.name}
     Email: ${formData.email}
      ${formData.name}
     Price: ${formData.rupees}
     Quantity:${formData.quantity}
     
      Size: ${formData.size}
      
      Lndmark: ${formData.landmark}
      Pincode:  ${formData.pinCode}
      For tracking, contact us at: +91-8279549681
    `;
//     const emailBody = `
//   <html>
//     <head>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           color: #333;
//           line-height: 1.6;
//         }
//         .container {
//           width: 100%;
//           max-width: 600px;
//           margin: 0 auto;
//           padding: 20px;
//           background-color: #f4f4f4;
//           border-radius: 8px;
//         }
//         .header {
//           background-color: #4CAF50;
//           color: white;
//           padding: 15px;
//           text-align: center;
//           border-radius: 8px 8px 0 0;
//         }
//         .order-details {
//           background-color: #ffffff;
//           padding: 15px;
//           border-radius: 0 0 8px 8px;
//         }
//         .order-details p {
//           margin: 8px 0;
//         }
//         .footer {
//           font-size: 12px;
//           color: #777;
//           text-align: center;
//           margin-top: 20px;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>Order Confirmation</h2>
//         </div>
//         <div class="order-details">
//           <p><strong>Customer Name:</strong> ${formData.name}</p>
//           <p><strong>Email:</strong> ${formData.email}</p>
//           <p><strong>Product:</strong> ${formData.name}</p>
//           <p><strong>Price:</strong> ₹${formData.rupees}</p>
//           <p><strong>Quantity:</strong> ${formData.quantity}</p>
//           <p><strong>Total Price:</strong> ₹${formData.rupees * formData.quantity}</p>
//           <p><strong>Size:</strong> ${formData.size}</p>
//           <p><strong>Expected Delivery Date:</strong> ${formData.deliveryDate}</p>
//           <p><strong>Shipping Address:</strong> ${formData.landmark}, ${formData.pinCode}</p>
//         </div>
//         <div class="footer">
//           <p>For tracking, contact us at: +91-8279549681</p>
//         </div>
//       </div>
//     </body>
//   </html>
// `;


    // Send email using EmailJS
    const sendEmailWithEmailJS = (toEmail) => {
      const templateParams = {
        to_email: toEmail,
        name: formData.name,
        message: emailBody,
      };

      emailjs.send("service_or4n8mj", "template_0e6n77s", templateParams, 'clZw4YNz20eJ3oIKp')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error.text);
        });
    };

    // Send email to both the shop owner and customer
    sendEmailWithEmailJS(ownerEmail);
    //sendEmailWithEmailJS(customerEmail);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the sendEmail function after form submission
    sendEmail();

    setOrderPlaced(true); // Mark order as placed and show success message
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {orderPlaced ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Order Has Been Successfully Placed</h2>
            <p>For tracking the order, call us at: <strong>+91-8279549681</strong></p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Buy Now</h2>

            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Rupees</label>
              <input
                type="text"
                name="rupees"
                value={formData.rupees}
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Size</label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Expected Delivery Date</label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user?.email} // Using email from context
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Landmark</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
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