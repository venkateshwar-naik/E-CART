import React, { useEffect, useState } from "react";
import { Button, FormControl, ListGroup, Row, Col,Image } from "react-bootstrap";
import { cartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = cartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + Number(current.price) * current.qty,
        0
      )
    );
  }, [cart]);

  const handleQuantityChange = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };





  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
              <Col md={2}>
                <Image src={prod.image} alt={prod.name} fluid rounded/>
                </Col>


                <Col md={2}>
                {/* <Image src={prod.image} alt={prod.name} fluid rounded/> */}
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  $<span>{prod.price}</span>
                </Col>
                <Col md={2}>
                  <span>{prod.ratings}</span>
                </Col>
                <Col md={2}>
                  <FormControl
                    as="select"
                    value={prod.qty}
                    onChange={(e) => handleQuantityChange(prod.id, e.target.value)}
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </FormControl>
                </Col>

                <Col md={2}>
                <Button type="button" variant="light" onClick={()=>dispatch({
                  type:"REMOVE FROM CART",
                  payload:prod,
                })}>
                <AiFillDelete fontSize="20px"/>

                </Button>

                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">subtotal {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>total: ${total}</span>
        <Button
  type="button"
  disabled={cart.length === 0}
  onClick={() => {
    dispatch({
      type: "CLEAR_CART",
    });
  }}
>
  Proceed to checkout
</Button>

      </div>
    </div>
  );
};

export default Cart;
