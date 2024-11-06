import { useEffect, useState } from "react";
import Table from "../../sections/products/table/Table";
import { deleteProduct, getproductsList } from "../../services/product";
import { Product } from "../../interfaces/products/products";
import Search from "../../sections/products/search/search";

const HomePage = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const response = await getproductsList();
        console.log(response);

        if (response.error || !response.data)
          throw new Error(response.message || "Error fetching data");
        setProductsList(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    getProductsList();
  }, []);

  const handleDeleteProduct = async (id: number) => {
    try {
      const { error, data } = await deleteProduct(id);
      if (error || !data) throw new Error("Error fetching data");
      setProductsList(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Search />
      <Table
        products={productsList}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default HomePage;
