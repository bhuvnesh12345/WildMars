import { shoesData } from "../utils/shoesData"
import { useEffect } from "react"
const Carousel=()=>{

    let left=[]
   
   

    useEffect(()=>{
      left=document.getElementById("scroll-container")
     
    },[]) 

    return(
        <div className="mx-40 mt-24 overflow-hidden">
            <div className="flex justify-between mt-12">

<div>
  <p className="font-sans font-bold text-3xl sm:text-sm md:text-xl lg:text-2xl"> what's in your mind?</p>
</div>

<div className="flex">
  <div className="w-8 h-8 rounded-full bg-slate-200 text-center mr-2">
      <button className="font-bold text-2xl" onClick={()=>{
        const itemwidth=160
        left.scrollLeft -= (itemwidth + 500 )
        }}>&#8592;</button>
  </div>

  <div className="w-8 h-8 rounded-full bg-slate-200 text-center">
        <button className="font-bold text-2xl"  onClick={()=>{
                  const itemwidth=160
                  left.scrollLeft += (itemwidth + 500 )
          }}>&#8594;</button>
  </div>
  
    
</div>
   
</div>

<div id="scroll-container" className="flex overflow-x-auto scroll-container scroll-smooth snap-x snap-mandatory">

{shoesData.map((x)=>{
  return(
       <div key={x?.id} className="m-4">
          <img className="min-w-40" src={x?.image}></img>
       </div>
  )
})}

</div>
        </div>
    )
}

export default Carousel