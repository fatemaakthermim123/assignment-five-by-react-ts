import { use } from "react";
import type { TechnologyProps } from "./Technology";
import AvailableTechnologies from "./AvailableTechnologies";


interface TechnologiesProps{
  technologiesPromise:Promise<TechnologyProps[]>;

}
 
 const Technologies = ({technologiesPromise}:TechnologiesProps) => {
  const technologies= use(technologiesPromise);
  
   return (
     <div>
        
          <AvailableTechnologies technologies={technologies}></AvailableTechnologies>
        
     </div>
   );
 };
 
 export default Technologies;