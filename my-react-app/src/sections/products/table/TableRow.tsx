import { MdDelete } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  code: string;
  type: string;
  price?: number;
  link?: string;
  handleDeleteProduct: (id: number) => void;
}

const TableRow = ({
  id,
  code,
  name,
  type,
  price,
  link,
  handleDeleteProduct,
}: Props) => {
  const navigate = useNavigate();

  const deleteButton = (
    <button type="button" onClick={() => handleDeleteProduct(id)}>
      <MdDelete className={"w-6 h-6"} />
    </button>
  );
  const updateButton = (
    <button type="button">
      <MdOutlineInfo className={"w-6 h-6"} />
    </button>
  );
  const toUpdate = () => {
    navigate(`/product/${id}`);
  };

  return (
    <tr
      className="bg-white border-b  hover:bg-gray-50 hover:cursor-pointer"
      onClick={toUpdate}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowra"
      >
        {code}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{type}</td>
      <td className="px-6 py-4">{price ? `$${price}` : "❌"}</td>
      <td className="px-6 py-4">{link ?? "❌"}</td>
      <td className="px-6 py-4">{deleteButton}</td>
    </tr>
  );
};

export default TableRow;
