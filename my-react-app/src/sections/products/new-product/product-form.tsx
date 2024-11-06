import React from "react";
import TextField from "../../../hook/text-field";
import RadioGroupField from "../../../hook/radio-field";
import { ProductType } from "../../../interfaces/products/products";
import { useFormContext } from "react-hook-form";
import LoadingButton from "../../../components/ui/loading-button";
interface Props {
  loading: boolean;
}
const ProductForm = ({ loading }: Props) => {
  const radio = [
    { label: "Digital", value: ProductType.DIGITAL },
    { label: "Physical", value: ProductType.PHYSICAL },
  ];
  const { watch, formState:{errors} } = useFormContext();
  console.log(errors);
  
  const type = watch("type");
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3">
      <TextField label="code" name="code" placeholder="code" />
      <TextField label="name" name="productName" placeholder="product name" />
      <RadioGroupField name="type" label="Type" options={radio} row />
      {type == ProductType.DIGITAL && (
        <TextField
          label="Download Link"
          name="downloadLink"
          placeholder="link"
        />
      )}
      {type == ProductType.PHYSICAL && (
        <TextField
          label="delivery Cost"
          name="deliveryCost"
          placeholder="delivery cost"
          type="number"
        />
      )}

      <LoadingButton label="Enviar" loading={loading}/>
    </div>
  );
};

export default ProductForm;
