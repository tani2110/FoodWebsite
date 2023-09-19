import React, { useEffect, useState, useRef } from "react";
import { useDispatchCart, useCart } from "./contextReducer";
export default function Card(props) {
  const priceRef = useRef();
  let dispatch = useDispatchCart();
  let options = props.options;
  let data = useCart();
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems;

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(" ");
  let finalPrice = qty * parseInt(options[size]);
  const handleaddtocart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  console.log("priceoptions here ", priceOptions);
  return (
    <div>
      <div
        className="card mt-3 mr-3 "
        style={{ width: "20rem", maxHeight: "360px" }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "180px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          {/* <p className="card-text"> Something about the dish</p> */}
          <div className="container w-100">
            {" "}
            {/* default is for mobile */}
            <select
              className="m-2 h-100  bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100  bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {" "}
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Rs{finalPrice}/-</div>
          </div>
          <hr />
          <button
            className={"btn btn-success justify-center ms-2"}
            onClick={handleaddtocart}
          >
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
