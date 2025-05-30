import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Brands from "./brands";
import { getCategories } from "../../entities/Category/categorySlice";

let api = import.meta.env.VITE_API_URL;

const Categories = () => {
  const dispatch = useDispatch();

  let { getDataCategory } = useSelector((store) => store.category);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div>
      <aside className="flex flex-col gap-[16px] md:flex-row flex-wrap">
        {getDataCategory.map((e) => (
          <div
            key={e.id}
            className="border-[1px] flex flex-col items-center p-[10px] gap-[10px] rounded-[10px] h-[165px] hover:shadow-lg w-[190px] mx-auto"
          >
            <div className="flex gap-[8px] items-start">
              <img
                style={{ width: "100px", height: "100px" }}
                src={
                  e.categoryImage
                    ? `${api}/images/${e.categoryImage}`
                    : "placeholder.jpg"
                }
                alt={e.categoryName}
              />
              <BorderColorIcon className="text-[#2563EB]" />
            </div>
            <h1>{e.categoryName}</h1>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Categories;
