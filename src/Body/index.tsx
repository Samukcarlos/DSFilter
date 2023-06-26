import Filter from "../Filter";
import * as listenProductDTO from '../Listen-productDTO/index';
import * as FilterData from '../Filter/index';
import Listing from "../Listing";
import './stylis.css';
export default function Body() {
  
  return    <>

   <section className='section-filter'>
  
 <body className='dsf-filterListing'>
  <Filter/>
  
 </body>

 </section>
 <section className='section-filter'>
  
 <body className='dsf-filterListing'>
 {
  listenProductDTO.findAll().map( 
                products => <Listing key={products.id} products={products}/>
                )}
         
 </body>

 </section>
 
  </>


}
