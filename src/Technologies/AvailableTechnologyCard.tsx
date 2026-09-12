import { BsStarFill } from "react-icons/bs";
import type { TechnologyProps } from "./Technology";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

 interface AvailableTechnologyCardProps {
   availableTecnology:TechnologyProps,
   selectedStacks:TechnologyProps[];
      setSelectedStacks:Dispatch<SetStateAction<TechnologyProps[]>>;
    }
 
 const AvailableTechnologyCard = ({availableTecnology,selectedStacks,setSelectedStacks}: AvailableTechnologyCardProps) => {
   
  const handleStackBtn=()=>{
    setSelectedStacks([...selectedStacks,availableTecnology])
    toast.success(' Added to stack successfully', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }
  
  
  return (

 <div className="card w-75  bg-base-100 card-lg shadow-sm p-5 flex flex-col mt-8">

     <div className="flex justify-between items-center mb-3">
      <img className="w-12 h-12" src={availableTecnology.icon}/>
        <p className={`px-3 py-2 border rounded-full 
        text-xs font-medium ${availableTecnology.tagBg} 
        ${availableTecnology.tagBorder} ${availableTecnology.tagText}`}>
            {availableTecnology.tag}
        </p>
        </div>


  <div className="flex flex-col items-start mb-6">
    <h2 className="card-title">{availableTecnology.name}</h2>
    <p className="text-gray-500">{availableTecnology.description}</p>
    
  </div>

    <div className="flex text-gray-500 justify-between mb-3">
      <p>{availableTecnology.category}</p>
      <p>{availableTecnology.level}</p>
      <p className="flex items-center"><BsStarFill className="text-yellow-500" />{availableTecnology.rating}</p>
    </div>
    <button onClick={handleStackBtn} className="btn bg-black text-white border-black rounded-xl hover:scale-105 transition duration-200">
  Add to Stack
</button>
  </div>
  
   );
 };
 
 export default AvailableTechnologyCard;