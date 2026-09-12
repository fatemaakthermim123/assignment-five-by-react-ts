import { RxCross1 } from "react-icons/rx";
import type { TechnologyProps } from "./Technology";
import type { Dispatch, SetStateAction } from "react";

interface SelectedStackCardProps {
  technology:TechnologyProps,
  selectedStacks:TechnologyProps[];
     setSelectedStacks:Dispatch<SetStateAction<TechnologyProps[]>>;
   }

const SelectedStackCard = ({technology,selectedStacks,setSelectedStacks}: SelectedStackCardProps) => {
 
 
 
 
 
 
  return (
    <div>
     
      <div className="flex items-center gap-3 border-gray-400
       rounded-xl p-3 mb-3 shadow-sm justify-between w-70  h-15 mx-auto">

       <div className="flex items-center gap-3">
         <img className="w-6 h-6" src={technology.icon}/>
        <div>
            <h1 className="font-semibold text-sm">{technology.name}</h1>
            <p className="text-xs text-gray-500">{technology.tag}</p>
        </div>


       </div>
       <div>
          <RxCross1 />
        </div>
      </div>

    </div>
  );
};

export default SelectedStackCard;