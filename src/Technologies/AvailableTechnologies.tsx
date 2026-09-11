import AvailableTechnologyCard from "./AvailableTechnologyCard";
import type { TechnologyProps } from "./Technology";

 interface AvailableTechnologiesProps {
   technologies:TechnologyProps[];
 }
 const AvailableTechnologies = ({technologies}: AvailableTechnologiesProps) => {
   return (
     <div>
       { technologies.map(technology=>{
        return (
           <AvailableTechnologyCard availableTecnology={technology} key={technology.id}></AvailableTechnologyCard>
        )
       })
       
     }
     </div>
   );
 };
 
 export default AvailableTechnologies;