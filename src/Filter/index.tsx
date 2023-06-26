import { useState } from 'react';
import './styles.css';

type FormData = {
  min?: number;
  max?: number;
}

 export default function Filter() {

  const [formData, setFormData] = useState<FormData>({
    min: undefined,
    max: undefined
  });

  function handleInputChange(event: any){
     const value = event.target.value;
     const name = event.target.name;
     setFormData({...formData, [name]: value})
  }

  function handleSubmit(event: any){
    event.preventDefault();
    console.log(formData.min || 0)
    console.log(formData.max || Number.MAX_VALUE)
  }
  
  return (
    <>
    <section>
   <body className='dsf-filterBody'>
    
  <form onSubmit = {handleSubmit} >
      <div className='dsf-input'>
          <input 
          className='dsf-input'        
          type="text" 
          placeholder="Preço máximo" 
          name='min' 
          value={formData.min || ""} 
          onChange={handleInputChange}      
         />        
      </div>
      <div className='dsf-input'>
          <input 
          className='dsf-input'        
          type="text" 
          placeholder="Preço mínimo" 
          name='max' 
          value={formData.max || ""} 
          onChange={handleInputChange}        
         />           
    </div>
    <div className='dsf-input2'>
        <button
         className='dsf-button'
         
         >Filtrar</button>         
    </div>
    </form>
   </body>
   </section>
    </>
  )
}