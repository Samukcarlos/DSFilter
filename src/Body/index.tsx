import { useState } from "react";
import Filter from "../Filter";
import * as listenProductDTO from '../Listen-productDTO/index';
import Listing from "../Listing";
import './stylis.css';

export default function Body() {

  const [min, setMin]= useState(0);
  const [max, setMax]= useState(0);

  function hendleNewValue (newValue:number){
    setMin(newValue);
    setMax(newValue);
    console.log(min);
   
  }

  return    <>



   <section className='section-filter'>

 <body className='dsf-filterListing'>
  <Filter onNewValue={hendleNewValue}/>
  
 </body>

 </section>
 <section className='section-filter'>
  
 <body className='dsf-filterListing'>
 {
  listenProductDTO.findByPrice(0, max).map( 
                products => <Listing key={products.id} products={products}/>
                )}
         
 </body>

 </section>
 
  </>


}
