import ProductContainer from "../../sections/products/new-product/product-container";
import { Await, useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/product";
import { Suspense } from "react";

const ProductUpdateFormPage = () => {
  const { data } = useLoaderData();

  return (
    <Suspense
      fallback={
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      }
    >
      <Await resolve={data}>
        {(data) => <ProductContainer product={data} />}
      </Await>
    </Suspense>
  );
};

export async function loader({ params }) {
  console.log(params);
  const product = await getProduct(+params.id);
  return product;
}

export default ProductUpdateFormPage;
