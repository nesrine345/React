import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';

function SingleProducts({ prod }) {
    const{
        state:{ cart},
        dispatch
        
    }=CartState();
    return <div className='products'>
        <Card>
            <Card.Img variant="top" src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>$ {prod.price.split(".")[0]}</span>
                    {prod.fastDelivery ? (<div>Fast Delivery</div>) : (<div>4 days Delivery</div>)
                    }
                    <Rating rating={prod.ratings}></Rating>
                </Card.Subtitle>
                {cart.some(p=>p.id===prod.id) ? (<Button variant='danger' onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })}>Remove from cart </Button>) :
              ( <Button  onClick={() =>
                dispatch({
                  type: "Add_to_cart",
                  payload: prod,
                })
              } disabled={!prod.instock}>{!prod.instock ? ("Out of Stock") : ("Add to Cart")} </Button>
              )}
                
               
            </Card.Body>
        </Card>
    </div>;
}

export default SingleProducts;
