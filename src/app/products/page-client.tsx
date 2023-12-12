"use client";

interface Props {
  data: any;
}

const ProductsClient = ({ data }: Props) => {
  return <div>ProductsClient: {data}</div>;
};

export default ProductsClient;
