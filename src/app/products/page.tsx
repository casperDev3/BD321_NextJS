import ProductsClient from "./page-client";

const Products = () => {
  let test = "test";
  console.log(test);
  return (
    <>
      <ProductsClient data={test} />
    </>
  );
};

export default Products;
