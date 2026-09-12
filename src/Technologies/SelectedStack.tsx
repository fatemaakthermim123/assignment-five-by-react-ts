import type { Dispatch, SetStateAction } from "react";
import SelectedStackCard from "./SelectedStackCard";
import type { TechnologyProps } from "./Technology";
import { Bounce, toast } from "react-toastify";

 interface SelectedStackProps {
   
   selectedStacks:TechnologyProps[];
      setSelectedStacks:Dispatch<SetStateAction<TechnologyProps[]>>;
    }
 
 const SelectedStack = ({selectedStacks,setSelectedStacks}: SelectedStackProps) => {
    
  const handleAllPlayerRemover=()=>{
    setSelectedStacks([]);
     toast.error(' Removed all technologies from stack', {
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
     <div className="border border-gray-300 shadow-xs rounded-2xl py-5 mt-25">
      <div>
       <p className="ml-10 mb-2 font-bold">Your Stack</p>
        <p className="text-gray-500 ml-10 mb-4">{selectedStacks.length===0?
                'No technologies selected yet.':
       `${selectedStacks.length} Technology Selected`}</p>
        </div>
        
          {selectedStacks.length===0?(<div className="text-gray-500 ml-16 border flex items-center justify-center 
        rounded-xl border-gray-300 mb-4 w-60 h-15">Your stack is empty.</div>):''}
        
       
       <div>
       {
          selectedStacks.map(selectedStack=>{
            return(
              <SelectedStackCard technology={selectedStack} key={selectedStack.id}  selectedStacks={selectedStacks}
          setSelectedStacks={setSelectedStacks}></SelectedStackCard>
            )}
          )
        } 
        </div>
      {selectedStacks.length!==0?(<div>
       <button onClick={handleAllPlayerRemover} className="btn btn-outline btn-error w-70 ml-10 rounded-2xl mt-2 ">Remove All</button>
     </div>):''}
     </div>
   );
 };
 
 export default SelectedStack;