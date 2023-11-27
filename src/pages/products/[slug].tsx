import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// styles
import s from "./single.module.scss";
// module
import { Products } from "@/modules/products";

interface Props {
  data: {};
}

const SingleProduct = ({ data }: Props) => {
  //states
  const [product, setProduct] = useState<any>(data);
  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.body}</p>
    </div>
  );
};

//SSR
export async function getServerSideProps(ctx: any) {
  // init
  const prod = new Products();
  // get query from url
  const { id } = ctx.query;
  // get post by id
  const data = await prod.getData(`products/${id}`);
  return { props: { data } };
}

export default SingleProduct;
