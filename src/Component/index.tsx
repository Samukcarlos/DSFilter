import { useState } from 'react';
import * as findByAll from '../Listen-productDTO/index';
import './styles.css';

export default function IconNumber(){

    const [icon, setIcon] = useState(findByAll.findByPrice.length);
   

   return(
    <div className='dsf-Icon'>
    <h3>{icon}</h3>
    </div>
   ) 
}