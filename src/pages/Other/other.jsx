import { Button, TextField } from "@mui/material";
import Brands from "./brands";
import Categories from "./categories";
import { NavLink, Outlet } from "react-router-dom";

const Other = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex gap-[16px] my-[30px]">
          <p className=" font-bold">
            <NavLink to="categories"   className={({ isActive }) =>
              `font-bold ${isActive ? "text-blue-600 bg-[#DBEAFE] p-[8px_16px] rounded-[4px]" : ""}`
            }>Categories</NavLink>
          </p>
          <p className="font-bold">
            <NavLink to="brands"   className={({ isActive }) =>
              `font-bold ${isActive ? "text-blue-600  bg-[#DBEAFE] p-[8px_16px] rounded-[4px]" : ""}`
            }>Brands</NavLink>
          </p>
          <p className="font-bold">Banners</p>
        </div>
      
      </div>
      <div className="flex gap-[16px] my-[30px]">
        <TextField
          id="outlined-basic"
          size="small"
          label="Search..."
          variant="outlined"
        />
      </div>

  <Outlet/>
    </>
  );
};

export default Other;
