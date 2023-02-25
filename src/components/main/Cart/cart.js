import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Stack} from 'react-bootstrap';
import './cart.css';
import CartProd from './CartProd.js';


function Cart() {

    const [openCart, SetOpenCart] = useState(true)
    let styleOverflow = {}
    let styleSideBlock = {}

    if (openCart == true){
        styleOverflow = {width: '100%'};
        styleSideBlock = {width: '385px'};
    } else {
        styleOverflow = {width: '0'};
        styleSideBlock = {width: '0'};
    }
 
    const[done, SetDone] = useState(true)
    

    return <>
      <div className='MainCart'>
        <div className='Overflow' style={styleOverflow} onClick={()=> SetOpenCart(false)}></div>
        <div className='SideBlock' style={styleSideBlock}>
          
        
          <Stack direction="horizontal" gap={3} id='topCart'>
            <div className="element"><h1><b>КОРЗИНА</b></h1></div>
              <div className="element ms-auto"> <img src='img/CloseButton.svg' onClick={()=> SetOpenCart(false)}/></div>
          </Stack>

<CartProd />
<CartProd />


        <div className='AddCart'><img src='img/кнопка.png'onClick={()=> SetDone(false)} /></div>
        
        </div>
        
        
</div>
      
    </> 
  }

export default Cart
