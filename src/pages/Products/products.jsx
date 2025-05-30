import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../../entities/Product/productSlice";

let api = import.meta.env.VITE_API_URL;

const Products = () => {

  const [age, setAge] = useState("");

  const navigate = useNavigate()

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let dispatch = useDispatch();
  let { getData } = useSelector((store) => store.products);
  

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center ">
        <p className="text-[24px] font-bold">Products</p>
        <Button  variant="outlined" size="medium" startIcon={<AddIcon />}>
        <NavLink to="/home/addProduct">
        Add New
        </NavLink>

        </Button>
      </div>
      <div className="flex gap-[16px] justify-between items-center mt-[30px]">
        <div className="flex gap-[16px]">
          <TextField
            id="outlined-basic"
            size="small"
            label="Search..."
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Newest</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <DeleteIcon className="text-[#2563EB] cursor-pointer" />
          <BorderColorIcon className="text-[#2563EB] cursor-pointer" />
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-500 border-b text-xs">
            <tr>
              <th className="p-4">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-4">Product</th>
              <th className="p-4">Inventory</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {getData.map((e) => {
              return (
                <tr className="border-b hover:bg-gray-50" key={e.id}>
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-500 cursor-pointer"
                    />
                  </td>
                  <td className="p-4 font-medium text-blue-600 flex items-center gap-[8px]">
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={
                        e.image ? `${api}/images/${e.image}` : "placeholder.jpg"
                      }
                      alt={e.productName}
                    />
                    <p>{e.productName}</p>
                  </td>
                  <td className="p-4">
                    {e.quantity ? `${e.quantity} in stock` : "Out of Stock"}
                  </td>
                  <td className="p-4">{e.categoryName}</td>
                  <td className="p-4">$ {e.price}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-[8px]">
                      <BorderColorIcon className="text-[#2563EB] cursor-pointer" />
                      <button onClick={() => dispatch(deleteProduct(e.id))}>
                        <DeleteIcon className="text-[red] cursor-pointer" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <div className="flex gap-2 items-center">
            <button className="p-1 hover:text-blue-600">&larr;</button>
            <button className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 text-blue-600 font-semibold">
              1
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              2
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              3
            </button>
            <span className="px-2">...</span>
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              24
            </button>
            <button className="p-1 hover:text-blue-600">&rarr;</button>
          </div>
          <div>274 Results</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
