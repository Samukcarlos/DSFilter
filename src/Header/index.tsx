import IconNumber from '../Component';
import './styles.css';

 export default function Header() {
  
  return (
    <>
    <header>
      <h1>DSFilter</h1>
      
      <div className='dsf-product'>
        <div className='dsf-icon'>
      <IconNumber />
      </div>
      <h3 >produto(s)</h3>
      </div>
      </header>
    </>
  )
}

