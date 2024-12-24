import React from "react";
import {
  Badge,
  Nav,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Placeholder,
  Card,
  Button,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Navbars = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = cartState();

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">shopping</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="search a product"
              className="m-auto"

              onChange={(e)=>{
                productDispatch({
                  type:"FILTER BY SEARCH",
                  payload:e.target.value
                })
              }}
            />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="20px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 390 }}>
  {cart.length > 0 ? (
    <>
      {cart.map((product) => (
        <span className="cartitem" key={product.id}>
          <img
            src={product.image}
            className="cartImg"
            alt={product.name}
          />
          <div className="cartitemDetails">
            <span>{product.name}</span>
            <span>${product.price.split(".")[0]}</span>
          </div>
          <AiFillDelete
            fontSize="20px"
            style={{ cursor: "pointer" }}
            onClick={() =>
              dispatch({
                type: "REMOVE FROM CART",
                payload: product,
              })
            }
          />
        </span>
      ))}


      <Link to = "/cart">

        <Button style={{width:"95%", margin:"0 10px" }}>
          Go To cart
        </Button>
      </Link>

    </>
  ) : (
    <span style={{ padding: 10 }}>Cart is empty</span>
  )}
</Dropdown.Menu>

            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
