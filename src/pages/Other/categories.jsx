import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  addNewCategory,
  getCategories,
} from "../../entities/Category/categorySlice";
import { useState } from "react";

let api = import.meta.env.VITE_API_URL;

const Categories = () => {
  const dispatch = useDispatch();

  let { getDataCategory } = useSelector((store) => store.category);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [catName, setCatName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editCatName, setEditCatName] = useState("");
  const [editImageFile, setEditImageFile] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState(null);



  const handlEditeImageChange = (e) => {
    const file = e.target.files[0];
    setEditImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
        setEditImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

function updateCategory(el) {
    setEditCatName(el.categoryName)
    setEditImagePreview(el.categoryImage)
}


const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("CategoryName", catName);
    formData.append("CategoryImage", imageFile);
    dispatch(addNewCategory(formData));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
    setCatName("");
    setImageFile(null);
    setImagePreview(null);
  };
  const handleEditClickOpen = () => {
    setOpen2(true);
  };
  const handleEditClose = () => {
    setOpen2(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div>
      <div className="my-[30px] text-end">
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          size="medium"
          startIcon={<AddIcon />}
        >
          Add New
        </Button>
      </div>
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

              <BorderColorIcon
                onClick={()=>{handleEditClickOpen(),updateCategory(e)}}
                className="text-[#2563EB]"
              />
            </div>
            <h1>{e.categoryName}</h1>
          </div>
        ))}
        <div className="w-[400px]">
          <Dialog
            open={open2}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: "move", fontWeight: "bold" }}>
              Update Category
            </DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={editCatName}
                  onChange={(e) => setEditCatName(e.target.value)}
                  className="w-[400px]"
                  size="small"
                  label="Category name"
                  variant="outlined"
                />
                <div className="flex flex-col border-dotted border-[1px] items-center justify-center py-[30px] gap-[16px] mt-[30px]">
                  <FileUploadIcon className="bg-[#E5E7EB] rounded-full p-[3px]" />
                  <input
                    type="file"
                    multiple
                    className="font-bold"
                    accept="image/*"
                    onChange={handlEditeImageChange}
                  />
                  {editImagePreview && (
                    <img
                      src={editImagePreview}
                      alt="Preview"
                      className="w-40 mt-2 border rounded"
                    />
                  )}
                  <p className="text-[#6C737F]">
                    (SVG, JPG, PNG, or gif maximum 900x400)
                  </p>
                </div>
                <DialogActions>
                  <Button onClick={handleEditClose}>Cancel</Button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white mt-4 px-4 py-2 rounded"
                  >
                  Save Changes
                  </button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-[400px]">
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle
              style={{ cursor: "move", fontWeight: "bold" }}
              id="draggable-dialog-title"
            >
              Add New Category
            </DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  className="w-[400px]"
                  size="small"
                  label="Category name"
                  variant="outlined"
                />
                <div className="flex flex-col border-dotted border-[1px] items-center justify-center py-[30px] gap-[16px] mt-[30px]">
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
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white mt-4 px-4 py-2 rounded"
                  >
                    Create
                  </button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </aside>
    </div>
  );
};

export default Categories;
