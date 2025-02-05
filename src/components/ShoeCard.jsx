// import { shoesData } from "../utils/shoesData";
// import { Link } from "react-router-dom";
// import { useUser } from "../utils/UserContext";
// import { useParams } from "react-router-dom";
// const ShoeCard=()=>{
    
//     const {id}=useParams()
//     const {buyNow,addToCart}=useUser()
//     console.log(id)
//     return(
//         <div className="mt-32">
//             <div class="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto">
 
//   <div class="lg:w-1/2">
//     <img
//       src={shoesData[id]?.image}
//       alt="Shoe Image"
//       class="w-full h-full object-cover"
//     />
//   </div>

  
//   <div class="lg:w-1/2 p-6 flex flex-col justify-between">
   
//     <h2 class="text-2xl font-bold text-gray-800 mb-4">
//       Premium Leather Shoe
//     </h2>

    
//     <p class="text-md text-gray-600 mb-3">
//       <span class="font-semibold">Leather Quality:</span> Genuine Leather
//     </p>

   
//     <p class="text-xl font-bold text-blue-600 mb-6">
//       {shoesData[id]?.price}
//     </p>

 
//     <div class="flex gap-4">
//       <button
//         class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-5 rounded transition" onClick={(e)=>{
//           e.preventDefault()
//           addToCart(shoesData[id])}}>
//         Add to Cart
//       </button>

//      <Link to="/buynow"> <button
//         class="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded transition"
//         onClick={(e)=>{
//           e.preventDefault()
//           buyNow(shoesData[id])}}>
//         Buy Now
//       </button></Link>
//     </div>
//   </div>
// </div>
//         </div>
//     )
// }

// export default ShoeCard;

import { shoesData } from "../utils/shoesData";
import { Link } from "react-router-dom";
import { useUser } from "../utils/UserContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ShoeCard = () => {
  const { id } = useParams();
  const {user, buyNow, addToCart } = useUser();
  const navigate=useNavigate()
   var t=id-1;
  console.log(t);
  console.log(shoesData[id-1])
  

  return (
    <div className="mt-32">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto">
        <div className="lg:w-1/2">
          <img
            src={shoesData[id-1]?.image}
            alt="Shoe Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Premium Leather Shoe
          </h2>

          {/* Display the type of the shoe */}
          <p className="text-md text-gray-600 mb-3">
            <span className="font-semibold">Type:</span> {shoesData[id]?.type} {/* Added Type */}
          </p>

          <p className="text-md text-gray-600 mb-3">
            <span className="font-semibold">Leather Quality:</span> Genuine Leather
          </p>

          <p className="text-xl font-bold text-blue-600 mb-6">
            {shoesData[id-1]?.finalPrice}
          </p>

          <div className="flex gap-4">
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-5 rounded transition"
              onClick={(e) => {
                e.preventDefault();
                addToCart(shoesData[id-1]);
              }}
            >
              Add to Cart
            </button>

            <Link to={'/buynow/'+id }>
              <button
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded transition"
                // onClick={(e) => {
                //   e.preventDefault();
                //  // buyNow(shoesData[id-1]);
                //  // handlebuynow()
                // }}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;