import { BsStarFill } from "react-icons/bs";
import type { TechnologyProps } from "./Technology";

 interface AvailableTechnologyCardProps {
   availableTecnology:TechnologyProps
 }
 const AvailableTechnologyCard = ({availableTecnology}: AvailableTechnologyCardProps) => {
   return (
    //  <div>
    //    {/* topLevel */}
    //    <div>
    //     <img/>
    //     <p></p>
    //    </div>

    //    {/* middleLevel */}
    //    <div>
    //     <h1></h1>
    //     <p></p>
    //    </div>

    //    {/* endlevel */}
 //  </div>



 <div className="card w-96 bg-base-100 card-lg shadow-sm p-5 flex flex-col mt-8">

     <div className="flex justify-between items-center mb-5">
      <img className="w-12 h-12" src={availableTecnology.icon}/>
        <p className={`px-3 py-2 border rounded-full 
        text-xs font-medium ${availableTecnology.tagBg} 
        ${availableTecnology.tagBorder} ${availableTecnology.tagText}`}>
            {availableTecnology.tag}
        </p>
        </div>


  <div className="flex flex-col items-start mb-5">
    <h2 className="card-title">{availableTecnology.name}</h2>
    <p className="text-gray-500">{availableTecnology.description}</p>
    
  </div>

    <div className="flex text-gray-500 justify-between mb-5">
      <p>{availableTecnology.category}</p>
      <p>{availableTecnology.level}</p>
      <p className="flex items-center"><BsStarFill className="text-yellow-500" />{availableTecnology.rating}</p>
    </div>
    <button className="btn bg-black text-white border-black rounded-xl">
  Add to Stack
</button>
  </div>
  
   );
 };
 
 export default AvailableTechnologyCard;