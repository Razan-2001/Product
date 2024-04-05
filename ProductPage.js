import React from "react";
import Products from "../Data/Products.json";

export default function ProductPages() {
  return (
    <div className="d-flex">
      {Products.map((Products, i) => (
        <div className="border m-2"
          key={i}><p> {Products.id} </p>
         <p>  {Products.name}  </p> 
         <p>  {Products.description}  </p> 
         <p>  {Products.price}  </p> 
         <p>  {Products.currency}  </p> 
         <p>  {Products.image_url}  </p> 
         <p>  {Products.stock}  </p> 
        </div>
      ))}
    </div>
  );
}
