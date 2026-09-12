import type { Dispatch, SetStateAction } from "react";
import AvailableTechnologyCard from "./AvailableTechnologyCard";
import type { TechnologyProps } from "./Technology";

 interface AvailableTechnologiesProps {
   technologies:TechnologyProps[];
   selectedStacks:TechnologyProps[];
   setSelectedStacks:Dispatch<SetStateAction<TechnologyProps[]>>;
 }
 const AvailableTechnologies = ({technologies,selectedStacks,setSelectedStacks}: AvailableTechnologiesProps) => {
   return (
    <div> 
        <h1 className="font-bold text-3xl">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] 
        bg-clip-text text-transparent">Technologies</span></h1>
        <p>Pick one technology per category to build your ideal stack.</p>
     <div className="grid grid-cols-3">
       { technologies.map(technology=>{
        return (
           <AvailableTechnologyCard availableTecnology={technology} key={technology.id}
            selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks}></AvailableTechnologyCard>
        )
       })
       
     }
     </div>
     </div>
   );
 };
 
 export default AvailableTechnologies;