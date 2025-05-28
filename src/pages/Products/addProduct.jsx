import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const AddProduct = () => {
  return (
    <div>
      <div>
        <aside className="w-[60%]">
          <h1>Information</h1>
          <div className="flex justify-between">
            {" "}
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              className="w-[70%]"
            />
            <TextField id="outlined-basic" label="Code" variant="outlined" />
          </div>
          <div>
          <label htmlFor="textarea">Description</label>
          <textarea name="textarea" id="" className="border-[1px] w-[100%] placeholder:Description"></textarea>
          </div>
          <div>
            
            <select name="" id="">

            </select>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AddProduct;
