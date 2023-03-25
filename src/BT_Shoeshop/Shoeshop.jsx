import React, { useState } from "react";
import data from "./data.json";
import Shoedetail from "./Shoedetail";
import ShoeItem from "./ShoeItem";

console.log("data: ", data);

function Shoeshop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div className="container">
      <h1 className="text-center">Shoe shop</h1>

      <div className="row">
        {data.map((product) => {
          return (
            <div key={product.id} className="col-sm-4 my-2">
              <ShoeItem
                product={product}
                products={data}
                onSelectProduct={handleGetProduct}
              />
            </div>
          );
        })}
      </div>
      <Shoedetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default Shoeshop;
