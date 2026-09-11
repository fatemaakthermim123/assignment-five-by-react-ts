import { Suspense, useState } from "react";
import Banner from "./Banner/Banner"
import Navbar from "./Navbar/Navbar"
import type { TechnologyProps } from "./Technologies/Technology";
import Technologies from "./Technologies/Technologies";
 


const TechnologiesFetch= async():Promise<TechnologyProps[]>=>{
  const res=await fetch('/data.json')
  const data=await res.json();
  return data;
}

function App() {
  const [TechnologiesPromise]=useState(()=>TechnologiesFetch());
   return (<>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<p>Loading..........</p>}>
    <Technologies technologiesPromise={TechnologiesPromise}></Technologies>
    </Suspense>
    </>
  )
}

export default App;
