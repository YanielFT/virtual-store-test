import { zodResolver } from "@hookform/resolvers/zod";
import { ProductoSchema } from "./schema-product";

import { Product, ProductType } from "../../../interfaces/products/products";
import FormProvider from "../../../hook/form-provider";
import { useForm } from "react-hook-form";
import ProductForm from "./product-form";
import { useState } from "react";
import { createProduct, updateProduct } from "../../../services/product";
import { useNavigate } from "react-router-dom";

interface Props {
  product?: Product;
}

const ProductContainer = ({ product }: Props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const id = product?.id ? Number(product.id) : null;
  const methods = useForm({
    resolver: zodResolver(ProductoSchema()),
    defaultValues: {
      id: id,
      code: product?.code ?? null,
      productName: product?.productName ?? null,
      type: product?.type ?? ProductType.DIGITAL,
      downloadLink: product?.downloadLink ?? null,
      deliveryCost: product?.deliveryCost ?? null,
    },
    mode: "onChange",
  });

  const handleOnSubmit = async (data: Product) => {
    setLoading(true);
    try {
      let response;
      if (product) response = await updateProduct(data);
      else response = await createProduct(data);

      if (response.error) {
        console.log(response.message);
        throw new Error();
      }
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleOnSubmit}
      autocomplete="off"
    >
      <ProductForm loading={loading} />
    </FormProvider>
  );
};

export default ProductContainer;
