import { use, useState } from "react";
import type { TechnologyProps } from "./Technology";
import AvailableTechnologies from "./AvailableTechnologies";
import SelectedStack from "./SelectedStack";



interface TechnologiesProps{
  technologiesPromise:Promise<TechnologyProps[]>;

}
 
 const Technologies = ({technologiesPromise}:TechnologiesProps) => {
  const technologies= use(technologiesPromise);
  const [selectedStacks, setSelectedStacks]=useState<TechnologyProps[]>([]);
  
   return (
    <div className=" w-full md:container mx-auto">
     <div className=" grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className=" md:col-span-9">
          <AvailableTechnologies  technologies={technologies} selectedStacks={selectedStacks}
          setSelectedStacks={setSelectedStacks}></AvailableTechnologies>
        </div>
          

          <div className=" md:col-span-3">
            
            <SelectedStack   selectedStacks={selectedStacks}
          setSelectedStacks={setSelectedStacks}></SelectedStack>

          </div>
          
        </div>
     </div>
   );
 };
 
 export default Technologies;