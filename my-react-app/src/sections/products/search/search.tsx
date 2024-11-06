import { useEffect, useState } from "react";
import { Product } from "../../../interfaces/products/products";
import { getproductsList, search } from "../../../services/product";

interface Props {
  setProducts: (_: Product[]) => void;
}

const Search = ({ setProducts }: Props) => {
  const [value, setValue] = useState("");
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.trim().length == 0) {
      const { data, error } = await getproductsList();
      if (error || !data) throw new Error("Error fetching data");

      setProducts(data);
      return;
    }

    const timeoutId = setTimeout(async () => {
      const { data, error } = await search(e.target.value);
      if (error || !data) throw new Error("Error fetching data");

      setProducts(data);
    }, 300);
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {});

  return (
    <form className="w-full max-w-5xl mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search products"
          required
          autoComplete="off"
          value={value}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default Search;
