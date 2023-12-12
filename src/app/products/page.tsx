"use client";
import { useEffect } from "react";

const Products = () => {
  // on load
  useEffect(() => {
    alert("test");
  }, []);
  return <div>Products</div>;
};

export default Products;
