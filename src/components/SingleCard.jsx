import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { cartState } from "../context/Context";

const SingleCard = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = cartState();

  console.log(cart)
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>
              ${product.price.split(".")[0]}
              {product.fastDelivery ? (
                <div>FastDelivery</div>
              ) : (
                <div>4 days Delivery</div>
              )}
            </span>
            <Rating rating={product.ratings} />
          </Card.Subtitle>

          {cart.some((p) => p.id === product.id) ? (
            <Button variant="danger"
            
            onClick={()=>{
              dispatch({
                type:"REMOVE FROM CART",
                payload:product
              })
            }
            }
            >Remove from cart</Button>
          ) : (
            <Button variant="success "  
             onClick={()=>{
              dispatch({
                type:"ADD TO CART",
                payload:product
              })
            }
            } disabled={!product.inStock}>
              {!product.inStock ? "outOfStock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
