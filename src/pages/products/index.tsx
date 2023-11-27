import React, { useEffect, useState } from "react";
// styles
import s from "./products.module.scss";
// interface
import { Product } from "@/interfaces";
// components
import Card from "@/components/productCard";
// modules
import { Products as Prod } from "@/modules/products";

interface Props {
  prods: Product[];
}

const Products = ({ prods }: Props) => {
  // states
  const [products, setProducts] = useState<Product[] | null>(prods);
  return (
    <>
      <div className={s.products}>Products</div>
      <div>
        {products ? (
          products.map((product: Product) => {
            return <Card key={product.id} data={product} />;
          })
        ) : (
          <div>Products Loading....</div>
        )}
      </div>
    </>
  );
};

// SSR
export async function getServerSideProps() {
  const prod = new Prod();
  const data = await prod.getData("products");
  return { props: { prods: data } };
}

export default Products;
