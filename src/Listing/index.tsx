import { ProductDTO } from '../ProductDTO';
import './stylis.css';

type Props = {
  products: ProductDTO;
    
}
export default function Listing({products}:Props) {
  
  return (
    
   
    <section className='dsf-listeng-cards-section'>
     <div className='dsf-listeng-cards'> 
     
     <div >
          {
            products.name
          
          }           
          
        </div>
        <div>
          R$={
            products.price
          }           
          
        </div>   
     </div>     
  </section>
 
   
  )
  }
  
  
  