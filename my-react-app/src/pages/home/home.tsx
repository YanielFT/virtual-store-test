import { useEffect, useState } from "react";
import Table from "../../sections/products/table/Table";
import { deleteProduct, getproductsList } from "../../services/product";
import { Product } from "../../interfaces/products/products";
import Search from "../../sections/products/search/search";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const navigate = useNavigate();
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

  const onClick = () => {
    navigate(`/product/new`);
  }

  return (
    <div className="flex flex-col gap-4">
      <Search setProducts={setProductsList} />
      <Table
        products={productsList}
        handleDeleteProduct={handleDeleteProduct}
      />
      <button
        type="button"
        className="text-white max-w-[200px] mx-auto bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={onClick}
      >
        Create
      </button>
    </div>
  );
};

export default HomePage;
