import React from "react";
import TableRow from "./TableRow";
import { Product } from "../../../interfaces/products/products";

interface Props {
  products: Product[];
  handleDeleteProduct: (id: number) => void;
}

const Table = ({ products, handleDeleteProduct }: Props) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Code
          </th>
          <th scope="col" className="px-6 py-3">
            Prodcut Name
          </th>
          <th scope="col" className="px-6 py-3">
            type
          </th>
          <th scope="col" className="px-6 py-3">
            Delivery Cost
          </th>
          <th scope="col" className="px-6 py-3">
            Download
          </th>
          <th scope="col" className="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <TableRow
            key={product.id}
            id={product.id}
            code={product.code}
            name={product.productName}
            type={product.type}
            price={product.deliveryCost}
            link={product.downloadLink}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
