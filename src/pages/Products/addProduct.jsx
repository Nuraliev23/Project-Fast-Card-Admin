import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../entities/Brands/brandSlice";
import { getColors } from "../../entities/Colors/colorsSlice";
import { useState } from "react";
import { getSubCategory } from "../../entities/Category/subCategorySlice";
import { addNewProduct } from "../../entities/Product/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { subcategorydata } = useSelector((store) => store.subcategory);
  const { brands } = useSelector((store) => store.brand);
  const { colors } = useSelector((store) => store.color);

  const [productName, setProductName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Превью (base64)
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("ProductName", productName);
    formData.append("Code", code);
    formData.append("Description", description);
    formData.append("Price", price);
    formData.append("DiscountPrice", discount);
    formData.append("Quantity", count);
    formData.append("SubCategoryId", category);
    formData.append("BrandId", brand);
    formData.append("Images", imageFile);
    formData.append("ColorId",color)

   dispatch(addNewProduct(formData))
  };

  useEffect(() => {
    dispatch(getSubCategory());
    dispatch(getBrands());
    dispatch(getColors());
  }, []);

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div className="flex justify-between flex-col md:flex-row">
        <aside className="md:w-[60%] w-full flex flex-col gap-[32px]">
          <h1>Information</h1>
          <div className="flex justify-between">
            {" "}
            <TextField
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              className="w-[70%]"
            />
            <TextField
              value={code}
              onChange={(e) => setCode(e.target.value)}
              id="outlined-basic"
              label="Code"
              variant="outlined"
            />
          </div>
          <div>
            <label htmlFor="textarea">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="textarea"
              id=""
              className="border-[1px] w-[100%] placeholder:Description"
            ></textarea>
          </div>
          <div className="flex  flex-col">
            <div className="flex justify-between">
              <FormControl className="w-[45%]">
                <InputLabel id="demo-simple-select-label">
                  Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {subcategorydata.map((e) => (
                    <MenuItem value={e.id}>{e.subCategoryName}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className="w-[45%]">
                <InputLabel id="demo-simple-select-label">Brands</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  label="Age"
                >
                  {brands.map((e) => (
                    <MenuItem value={e.id}>{e.brandName}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Price</h2>
            <div className="flex gap-4 flex-col">
              <div>
                <TextField
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  label="Product price"
                  type="number"
                  variant="outlined"
                />
                <TextField
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  label="Discount"
                  type="number"
                  variant="outlined"
                />
                <TextField
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  label="Count"
                  type="number"
                  variant="outlined"
                />
              </div>
              <FormControlLabel
                control={<Switch />}
                label="Add tax for this product"
              />
            </div>
          </div>
          <div className="flex justify-between items-center border-[1px] border-[#E5E5E5] p-[16px]">
            <div>
              <p className="font-bold">Different Options</p>
              <p>This product has multiple options</p>
            </div>
            <FormControlLabel control={<Switch defaultChecked />} />
          </div>
        </aside>
        <aside className="md:w-[39%] w-full border-[1px] border-[#E5E5E5] p-[16px]">
          <div className="border-[1px] border-[#E5E5E5] p-[16px]">
            <div className="flex justify-between">
              <p className="font-bold">Colour:</p>
              <p>Create new</p>
            </div>
            <div className="flex gap-[8px] ">
              {colors.map((el) => {
                return (
                  <div
                  onClick={()=>setColor(el.id)}
                    key={el.id}
                    className="rounded-full  w-[30px] h-[30px] cursor-pointer"
                    style={{ backgroundColor: `${el.colorName}` }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-bold">Images</p>
            </div>
            <div className="flex flex-col border-dotted border-[1px] items-center justify-center py-[30px] gap-[16px]">
              <FileUploadIcon className="bg-[#E5E7EB] rounded-full p-[3px]" />
              <input
                type="file"
                multiple
                className="font-bold"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-40 mt-2 border rounded"
                />
              )}
              <p className="text-[#6C737F]">
                (SVG, JPG, PNG, or gif maximum 900x400)
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white mt-4 px-4 py-2 rounded"
            >
              Добавить товар
            </button>
          </div>
        </aside>
      </div>
      </form>
    </div>
  );
};

export default AddProduct;
