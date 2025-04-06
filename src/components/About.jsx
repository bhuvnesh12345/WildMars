// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
//         <p className="mt-4 text-lg text-gray-500">
//           Our journey, mission, and commitment to excellence.
//         </p>
//       </div>

//       <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {/* Company Logo and Overview */}
//         <div className="flex flex-col items-center justify-center space-y-6">
//           <img
//             src="https://via.placeholder.com/150" // Replace with your company logo
//             alt="Company Logo"
//             className="w-32 h-32 object-cover rounded-full shadow-lg"
//           />
//           <h3 className="text-xl font-semibold text-gray-900">Our Company</h3>
//           <p className="text-gray-600 text-center">
//             We are a leading company in the industry, dedicated to providing the best services and solutions to our clients.
//           </p>
//         </div>

//         {/* Mission */}
//         <div className="flex flex-col items-center justify-center space-y-6">
//           <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
//           <p className="text-gray-600 text-center">
//             Our mission is to innovate and deliver high-quality solutions that meet the evolving needs of our clients.
//           </p>
//         </div>

//         {/* Values */}
//         <div className="flex flex-col items-center justify-center space-y-6">
//           <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
//           <p className="text-gray-600 text-center">
//             Integrity, innovation, and customer satisfaction are at the core of everything we do.
//           </p>
//         </div>
//       </div>

//       {/* Our Team */}
//       <div className="mt-16 text-center">
//         <h3 className="text-3xl font-semibold text-gray-900">Meet Our Team</h3>
//         <p className="mt-4 text-lg text-gray-500">
//           Our team of professionals is dedicated to delivering the best results for our clients.
//         </p>
//       </div>

//       <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {/* Team Member 1 */}
//         <div className="flex flex-col items-center justify-center space-y-4 bg-white rounded-lg shadow-lg p-6">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Team Member"
//             className="w-32 h-32 object-cover rounded-full"
//           />
//           <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
//           <p className="text-gray-500">CEO & Founder</p>
//         </div>

//         {/* Team Member 2 */}
//         <div className="flex flex-col items-center justify-center space-y-4 bg-white rounded-lg shadow-lg p-6">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Team Member"
//             className="w-32 h-32 object-cover rounded-full"
//           />
//           <h4 className="text-xl font-semibold text-gray-900">Jane Smith</h4>
//           <p className="text-gray-500">Chief Marketing Officer</p>
//         </div>

//         {/* Team Member 3 */}
//         <div className="flex flex-col items-center justify-center space-y-4 bg-white rounded-lg shadow-lg p-6">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Team Member"
//             className="w-32 h-32 object-cover rounded-full"
//           />
//           <h4 className="text-xl font-semibold text-gray-900">Emily Johnson</h4>
//           <p className="text-gray-500">Chief Technology Officer</p>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="mt-16 text-center">
//         <p className="text-lg text-gray-500">
//           © 2025 Company Name. All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;


// import React from "react";
// import { Link } from "react-router-dom";
// const About = () => {
//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center" 
//         style={{ backgroundImage: "url('https://images.pexels.com/photos/207300/pexels-photo-207300.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
//         <div className="bg-black bg-opacity-50 p-10 text-center rounded-md">
//           <h1 className="text-4xl md:text-6xl font-bold text-white">Crafting Excellence in Leather Shoes</h1>
//           <p className="text-lg md:text-xl text-gray-300 mt-3">Premium Handmade Leather Shoes for Timeless Elegance</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="max-w-6xl mx-auto py-16 px-6">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
//           <p className="mt-4 text-gray-600 leading-relaxed">
//             Established in 2000, our journey started with a passion for crafting **premium leather shoes**.  
//             Every pair is meticulously designed using the finest full-grain leather, ensuring unmatched durability,  
//             comfort, and timeless style. Our artisans blend tradition with modern techniques to deliver  
//             **shoes that tell a story**.
//           </p>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="bg-white py-16 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Card 1 */}
//           <div className="p-6 shadow-lg rounded-lg bg-gray-50 hover:shadow-2xl transition">
//             {/* <img src="https://source.unsplash.com/300x200/?leather,craft" alt="Quality Leather" className="w-full rounded-md" /> */}
//             <h3 className="text-xl font-bold mt-4 text-gray-900">Premium Leather</h3>
//             <p className="mt-2 text-gray-600">We source only the finest full-grain leather, ensuring every shoe ages gracefully.</p>
//           </div>

//           {/* Card 2 */}
//           <div className="p-6 shadow-lg rounded-lg bg-gray-50 hover:shadow-2xl transition">
//             {/* <img src="https://source.unsplash.com/300x200/?shoes,handmade" alt="Handmade Craftsmanship" className="w-full rounded-md" /> */}
//             <h3 className="text-xl font-bold mt-4 text-gray-900">Handcrafted Perfection</h3>
//             <p className="mt-2 text-gray-600">Each pair is meticulously crafted by expert artisans, ensuring uniqueness and quality.</p>
//           </div>

//           {/* Card 3 */}
//           <div className="p-6 shadow-lg rounded-lg bg-gray-50 hover:shadow-2xl transition">
//             {/* <img src="https://source.unsplash.com/300x200/?shoe,fashion" alt="Timeless Style" className="w-full rounded-md" /> */}
//             <h3 className="text-xl font-bold mt-4 text-gray-900">Timeless Elegance</h3>
//             <p className="mt-2 text-gray-600">Our shoes combine classic designs with modern comfort, making them perfect for any occasion.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-black text-white py-16 text-center">
//         <h2 className="text-3xl font-bold">Experience the Luxury of Handmade Leather Shoes</h2>
//         <p className="mt-3 text-lg text-gray-300">Shop Now and Walk in Style</p>
//         <Link to="/" className="mt-6 inline-block px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600">
//           Explore Our Collection
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/207300/pexels-photo-207300.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 text-center rounded-md">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Crafting Excellence in Leather Shoes
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-3">
            Premium Handmade Leather Shoes for Timeless Elegance
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Established in 2000, our journey started with a passion for
            crafting <strong>premium leather shoes</strong>. Every pair is
            meticulously designed using the finest full-grain leather, ensuring
            unmatched durability, comfort, and timeless style. Our artisans
            blend tradition with modern techniques to deliver{" "}
            <strong>shoes that tell a story</strong>.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-lg bg-gray-50 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mt-4 text-gray-900">
              Premium Leather
            </h3>
            <p className="mt-2 text-gray-600">
              We source only the finest full-grain leather, ensuring every shoe
              ages gracefully.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg bg-gray-50 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mt-4 text-gray-900">
              Handcrafted Perfection
            </h3>
            <p className="mt-2 text-gray-600">
              Each pair is meticulously crafted by expert artisans, ensuring
              uniqueness and quality.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg bg-gray-50 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mt-4 text-gray-900">
              Timeless Elegance
            </h3>
            <p className="mt-2 text-gray-600">
              Our shoes combine classic designs with modern comfort, making them
              perfect for any occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Member Card */}
            {[
              {
                name: "Mrs. Anita Bhadoriya",
                position: "MD",
                img: "",
              },
      {
                name: "Mr. Rohit Gupta",
                position: "CEO",
                img: "",
              },
              {
                name: "Mr. Sandeep Goswami",
                position: "Quality & Production Head",
                img: "",
              },
              {
                name: "Mr. Amit Bhadoriya",
                position: "Marketing & Sales Head",
                img: "",
              },
              {
                name: "Mrs. Shalini Bhadoriya & Bhanu Pratap Singh",
                position: "Public Relations Head",
                img: "",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
              >
                <img
                  src={member.img}
                 
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold">
          Experience the Luxury of Handmade Leather Shoes
        </h2>
        <p className="mt-3 text-lg text-gray-300">
          Shop Now and Walk in Style
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600"
        >
          Explore Our Collection
        </Link>
      </section>
    </div>
  );
};

export default About;
