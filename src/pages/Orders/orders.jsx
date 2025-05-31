import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Orders = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="flex justify-between items-center ">
        <p className="text-[24px] font-bold">Order</p>
        <Button variant="outlined" size="medium" startIcon={<AddIcon />}>
          Add order
        </Button>
      </div>
      <div className="flex gap-[16px] justify-between items-center mt-[30px]">
        <div className="flex gap-[16px]">
          <TextField
            id="outlined-basic"
            size="small"
            label="Search..."
            variant="outlined"
            startIcon={<AddIcon />}
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
          <DeleteIcon className="text-[#2563EB]" />
          <BorderColorIcon className="text-[#2563EB]" />
        </div>
      </div>
      <div class="overflow-x-auto bg-white rounded-lg shadow p-4">
        <table class="w-full table-auto text-sm text-left">
          <thead class="text-gray-500 border-b text-xs">
            <tr>
              <th class="p-4">
                <input type="checkbox" class="w-4 h-4" />
              </th>
              <th class="p-4">Order</th>
              <th class="p-4">Date</th>
              <th class="p-4">Customer</th>
              <th class="p-4">Payment status</th>
              <th class="p-4">Order Status</th>
              <th class="p-4">Total</th>
            </tr>
          </thead>
          <tbody class="text-gray-900">
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Tom Anderson</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Jayden Walker</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Inez Kim</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Francisco Henry</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input type="checkbox" class="w-4 h-4 accent-blue-500" />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Tom Anderson</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input type="checkbox" class="w-4 h-4 accent-blue-500" />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Jayden Walker</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input type="checkbox" class="w-4 h-4 accent-blue-500" />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Inez Kim</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input type="checkbox" class="w-4 h-4 accent-blue-500" />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Francisco Henry</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Tom Anderson</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Jayden Walker</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Inez Kim</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="p-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 accent-blue-500"
                  checked
                />
              </td>
              <td class="p-4 font-medium text-blue-600">#12512B</td>
              <td class="p-4">May 5, 4:20 PM</td>
              <td class="p-4">Francisco Henry</td>
              <td class="p-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
              <td class="p-4">
                <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Ready
                </span>
              </td>
              <td class="p-4">$49.90</td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
          <div class="flex gap-2 items-center">
            <button class="p-1 hover:text-blue-600">&larr;</button>
            <button class="w-7 h-7 flex items-center justify-center rounded bg-gray-100 text-blue-600 font-semibold">
              1
            </button>
            <button class="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              2
            </button>
            <button class="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              3
            </button>
            <span class="px-2">...</span>
            <button class="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              24
            </button>
            <button class="p-1 hover:text-blue-600">&rarr;</button>
          </div>
          <div>274 Results</div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
