import React from "react";

async function Product({ params }) {
  const { id } = await params;
  cobsole.log("id==>", id);
  return <div></div>;
}

export default Product;
