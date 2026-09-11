import { use } from "react";
import type { TechnologyProps } from "./Technology";


interface TechnologiesProps{
  TechnologiesPromise:Promise<TechnologyProps[]>;

}
 
 const Technologies = ({TechnologiesPromise}:TechnologiesProps) => {
  const Technologies= use(TechnologiesPromise);
  console.log(Technologies)
   return (
     <div>
        
     </div>
   );
 };
 
 export default Technologies;