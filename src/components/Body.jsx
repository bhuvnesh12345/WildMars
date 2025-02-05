// // //import 'react' from React;
// // import React from 'react'
// // import { shoesData } from '../utils/shoesData';
// // import { Link } from 'react-router-dom';

// // const Body=()=>{

// //     console.log(shoesData)
// //     return(
// //         <div className=" flex flex-wrap justify-start gap-4 ml-20 mt-20">
// //            {shoesData.map((shoe)=>{
            
// //             return (

// //                <Link to={'shoedetails/'+shoe?.id}>
// //                 <div className=" w-64  bg-white   rounded-lg dark:bg-gray-800 dark:border-gray-700">
// //                 <div className="m-2 transform transition-transform duration-300  hover:scale-90">
// //                   <div className="relative">
// //                      <img className=" w-full h-40 rounded-lg object-cover" src={shoe.image}></img>
// //                      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
// //                       <p className="absolute bottom-0 left-0 text-xl text-white shadow-2xl font-extrabold ml-2">{shoe.price}</p>
// //                   </div>
                 
// //                   <p className="font-bold text-lg">{shoe?.name}</p>
// //                   <div className="flex">
// //                      <svg className="w-4 h-4 text-green-600  mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
// //                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
// //                      </svg>
                  
      
// //                   </div>
// //                 </div>
                 
// //       </div>
// //       </Link>
      
// //             //     <div className='flex'>
// //             //     <div key={shoe.id}>
// //             //      <img src={shoe.image} style={{width:"200px", height:"200px"}}></img>
// //             //      <h3 className='text-3xl font-bold underline'>{shoe.name}</h3>
// //             //      <h3>{shoe.price}</h3>  
// //             //    </div>
// //             //    </div>
// //             )
            
// //            })}
// //         </div>
// //     )
// // }

// // export default Body;


// import React from 'react';
// import { shoesData } from '../utils/shoesData';
// import { Link } from 'react-router-dom';
// import HeroBanner from './HeroBanner';

// const Body = () => {
//     console.log(shoesData);
//     return (
//         <div className="max-w-screen-xl flex flex-wrap justify-start gap-6  ">
//               <HeroBanner/>
               
//             {shoesData.map((shoe) => {
//                 return (
//                   <div className=''>
//                     <Link to={'shoedetails/' + shoe?.id} key={shoe?.id}>
//                         <div className="w-64 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                             <div className="relative">
//                                 <img className="w-full h-48 rounded-lg object-cover" src={shoe.image} alt={shoe.name} />
//                                 <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
//                                 <p className="absolute bottom-3 left-3 text-xl text-white shadow-xl font-extrabold">{shoe.price}</p>
//                             </div>
//                             <div className="px-4 py-3">
//                                 <p className="font-bold text-xl text-gray-800 dark:text-white truncate">{shoe?.name}</p>
//                                 <p className="text-lg text-gray-600 dark:text-gray-300">{shoe?.type}</p>
//                             </div>
//                         </div>
//                     </Link>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Body;



import React from 'react';
import { shoesData } from '../utils/shoesData';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';

const Body = () => {
  return (
    <div>
      {/* Hero Banner placed at the top */}
      <HeroBanner />

      {/* Container for shoe cards */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: 1 column on small, 2 on sm, 3 on md, 4 on lg screens */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shoesData.map((shoe) => (
            <Link to={`shoedetails/${shoe.id}`} key={shoe.id}>
              <div className="bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={shoe.image}
                    alt={shoe.name}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                  <p className="absolute bottom-3 left-3 text-xl text-white shadow-xl font-extrabold">
                    {shoe.price}
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="font-bold text-xl text-gray-800 dark:text-white truncate">
                    {shoe.name}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {shoe.type}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
