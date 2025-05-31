import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  updateProduct,
} from "../../entities/Product/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { getBrands } from "../../entities/Brands/brandSlice";
import { getColors } from "../../entities/Colors/colorsSlice";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getdataid } = useSelector((store) => store.products);
  const { brands } = useSelector((store) => store.brand);
  const { colors } = useSelector((store) => store.color);
console.log(getdataid);
//  const navigate = useNavigate()

  const [Id, setId] = useState(null);
  const [BrandId, setBrandId] = useState(null);
  const [colorId, setColorId] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(null);
  const [code, setCode] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [hasdiscount, sethasdiscount] = useState(false);
  const [discount, setDiscount] = useState(null);

  const saveEdit = () => {
    const obj = {
      id: Id,
      brand: BrandId,
      color: colorId,
      productName: productName,
      description: description,
      quantity: count,
      code: code,
      price: price,
      hasDiscount: hasdiscount,
      discountPrice: discount,
      subCategoryId: category,
    };
    dispatch(updateProduct(obj));
    // navigate("/home/products")
  };

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getBrands());
    dispatch(getColors());
  }, [id]);

 useEffect(() => {
  if (getdataid && brands.length > 0 && colors.length > 0) {
    setId(getdataid.id);
    setProductName(getdataid.productName);
    setDescription(getdataid.description);
    setCount(getdataid.quantity);
    setCode(getdataid.code);
    setPrice(getdataid.price);
    setDiscount(getdataid.discountPrice);
    setCategory(getdataid.subCategoryId);
    sethasdiscount(getdataid.hasDiscount);

    const foundBrand = brands.find((el) => el.brandName === getdataid.brand);
    const foundColor = colors.find((el) => el.colorName === getdataid.color);
    setBrandId(foundBrand?.id || "");
    setColorId(foundColor?.id || "");
  }
}, [getdataid, brands, colors]);

  console.log(getdataid);

  return (
    <div>
      <div>
        <div className="flex justify-between flex-col md:flex-row">
          <aside className="md:w-[60%] w-full flex flex-col gap-[32px]">
            <h1>Information</h1>
            <div className="flex justify-between flex-wrap gap-[10px]">
              {" "}
              <div>
                <label htmlFor="">Product Name</label>
                <TextField
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  variant="outlined"
                  className="w-[70%]"
                />
              </div>
              <TextField
                value={code}
                onChange={(e) => setCode(e.target.value)}
                label="Code"
                variant="outlined"
              />
              <div className="flex flex-col">
                <label htmlFor="">Id</label>
                <TextField
                  value={Id}
                  onChange={(e) => setId(e.target.value)}
                  variant="outlined"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">BrandId</label>
                <TextField
                  value={BrandId}
                  onChange={(e) => setBrandId(e.target.value)}
                  variant="outlined"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">ColorId</label>
                <TextField
                  value={colorId}
                  onChange={(e) => setColorId(e.target.value)}
                  variant="outlined"
                />
              </div>
            </div>
            <div>
              <label htmlFor="textarea">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="textarea"
                className="border-[1px] w-[100%] placeholder:Description"
              ></textarea>
            </div>
            <div className="flex  flex-col">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  {/* <label htmlFor=""></label> */}
                  <FormControl fullWidth className="md:w-1/2">
                <InputLabel id="hasdiscount-label">Has Discount</InputLabel>
                <Select
                  labelId="hasdiscount-label"
                  value={hasdiscount}
                  onChange={(e) => sethasdiscount(e.target.value)} // Значение уже boolean
                  label="Has Discount?"
                >
                  <MenuItem value={true}>True</MenuItem>
                  <MenuItem value={false}>False</MenuItem>
                </Select>
              </FormControl>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">SubCategory ID</label>
                  <TextField
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Price</h2>
              <div className="flex gap-[20px] flex-wrap">
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="">Price</label>
                    <TextField
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      variant="outlined"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Discount Price</label>
                  <TextField
                  
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))} // Преобразуем в число
                  type="number" // Тип должен быть number для числового ввода
                  variant="outlined"
                />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Quantity</label>
                    <TextField
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                      type="number"
                      variant="outlined"
                    />
                  </div>
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
            <div>
              <button
                onClick={saveEdit}
                className="bg-blue-600 text-white mt-4 px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
