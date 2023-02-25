import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Stack} from 'react-bootstrap';
import './CartProd.css';


function CartProd() {

    const [openFlCart, SetOpenFlCart] = useState(true)
    let styleRemove = {}
    let styleSideBlockRemove = {}

    if (openFlCart == true){
      styleRemove = {width: '85%'};
      styleSideBlockRemove = {width: '85%'};
    } else {
      styleRemove = {display: 'none'};
      styleSideBlockRemove = {display: 'none'};
    }


    const [count, setCount] = useState(0)

    return <>

           <Card id='cartcss' style={styleSideBlockRemove}>
      
          <Card.Img id='imgfl' style={{ width: '116px'}} variant="top" src="./img/тюльпаны.png" />
          <Card.Body>
                <div className='RemoveButton'>
                  <img src='img/CloseButton.svg'  id='RemoveImg'  style={styleRemove} onClick={()=> SetOpenFlCart(false)}/>
                </div>
            <Card.Title className="FlowerCart">Букет тюльпанов</Card.Title>
            <Stack direction="horizontal" gap={3}>
            <div ><span className='priceNameCart'>ЦЕНА:</span> 
            <span className='priceCart'> 3300₽</span>
            </div>

            <div className='CountButtons'>
                  <img src='img/-.svg' onClick={()=> setCount(count-1)} />
                  <input type='text' maxLength='2' value={count < 0 ? 0 : count}></input>
                  <img src='img/+.svg' onClick={()=> setCount(count+1)} />
                  </div>
        </Stack>
           </Card.Body>
           </Card>
      
    </> 
  }

export default CartProd