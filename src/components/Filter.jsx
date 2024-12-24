// import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { cartState } from "../context/Context";



const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, byRating,  sort },
    productDispatch,
  } = cartState();

  console.log("Product State:", {
    byStock,
    byFastDelivery,
    byRating,
    sort,
  });
  return (
    <div className="filters">
      <h2>Filter products</h2>

      <span>
      <Form.Check
  inline
  label="Ascending"
  name="group1"
  type="radio"
  id={"inline-1"}
  onChange={() =>
    productDispatch({
      type: "SORT BY PRICE",
      payload: "Ascending", // Ensure correct casing
    })
  }
          checked={sort === "ascending"? true : false}
        />
      </span>
      <span>
      <Form.Check
  inline
  label="Descending"
  name="group1"
  type="radio"
  id={"inline-2"}
  onChange={() =>
    productDispatch({
      type: "SORT BY PRICE",
      payload: "Descending", // Ensure correct casing
    })
  }
          checked={sort === "descending"? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Out Of Stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
          onChange={() =>
            productDispatch({
              type: "FILTER BY STOCK",
            })
          }
          checked={byStock}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="FAST delivery"
          name="group1"
          type="checkbox"
          id={"inline-4"}
          onChange={() =>
            productDispatch({
              type: "FILTER BY DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onclick={(i) =>
            productDispatch({
              type: "FILTER BY RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR FILTER",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;

