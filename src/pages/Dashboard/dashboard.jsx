import imgsales from "../../shared/images/div.MuiBox-root.png";
import imgcost from "../../shared/images/iconly-glass-discount.svg.png";
import imgprofit from "../../shared/images/div.MuiBox-root (1).png";
import access from "../../shared/images/div.MuiBox-root2.png";

import EastIcon from "@mui/icons-material/East";
import ReactApexChart from "react-apexcharts";

import { InstallMobileSharp } from "@mui/icons-material";
import ChartCard from "../../shared/components/apezchart";

const Dashboard = () => {
  return (
    <div>
      <section className="flex justify-between flex-col md:flex-row gap-[20px]">
        <aside className="md:w-[60%] w-[100%] flex flex-col gap-[16px]">
          <div className="flex w-full justify-between flex-col md:flex-row gap-[20px]">
            <div className="bg-[#FEF3F2]  flex gap-[16px] items-center md:w-[32%] w-[90%] justify-center py-[10px]">
              <img src={imgsales} alt="" />
              <div className="">
                <p>Sales</p>
                <p className="font-bold text-[24px]">$152k</p>
              </div>
            </div>
            <div className="bg-[#FFFAEB] flex gap-[16px] items-center md:w-[32%] w-[90%] justify-center py-[10px]">
              <img src={imgcost} alt="" />
              <div className="">
                <p>Cost</p>
                <p className="font-bold text-[24px]">$99.7k</p>
              </div>
            </div>
            <div className="bg-[#F0FDF9] flex gap-[16px] items-center md:w-[32%] w-[90%] justify-center py-[10px]">
              <img src={imgprofit} alt="" />
              <div className="">
                <p>Profit</p>
                <p className="font-bold text-[24px]">$32.1k</p>
              </div>
            </div>
          </div>
          <div>
            <ChartCard />
          </div>
        </aside>
        <aside className="md:w-[35%] w-full flex flex-col gap-[16px] border-[1px] p-[12px] border-[#8080805c] justify-between">
          <div className="flex justify-between items-center">
            <p className="font-bold">Top selling products</p>
            <p className="font-bold">
              See All <EastIcon />
            </p>
          </div>
          <div className="flex w-full justify-between">
            <img src={access} alt="" />
            <div>
              <p className="font-bold">Healthcare Erbology</p>
              <p className="text-[#6C737F]">in Accessories</p>
            </div>
            <div>
              <p className="text-[#10B981]">13,153</p>
              <p className="text-[#6C737F]">in sales</p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <img src={access} alt="" />
            <div>
              <p className="font-bold">Healthcare Erbology</p>
              <p className="text-[#6C737F]">in Accessories</p>
            </div>
            <div>
              <p className="text-[#10B981]">13,153</p>
              <p className="text-[#6C737F]">in sales</p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <img src={access} alt="" />
            <div>
              <p className="font-bold">Healthcare Erbology</p>
              <p className="text-[#6C737F]">in Accessories</p>
            </div>
            <div>
              <p className="text-[#10B981]">13,153</p>
              <p className="text-[#6C737F]">in sales</p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <img src={access} alt="" />
            <div>
              <p className="font-bold">Healthcare Erbology</p>
              <p className="text-[#6C737F]">in Accessories</p>
            </div>
            <div>
              <p className="text-[#10B981]">13,153</p>
              <p className="text-[#6C737F]">in sales</p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <img src={access} alt="" />
            <div>
              <p className="font-bold">Healthcare Erbology</p>
              <p className="text-[#6C737F]">in Accessories</p>
            </div>
            <div>
              <p className="text-[#10B981]">13,153</p>
              <p className="text-[#6C737F]">in sales</p>
            </div>
          </div>
        </aside>
      </section>
      <section className="flex justify-between flex-col md:flex-row mt-[24px] gap-[32px]">
        <table className="md:w-[48%] w-full text-left  rounded-lg shadow p-[5px]">
          <caption className="text-lg font-semibold mb-4 text-start">
            Recent Transactions
          </caption>
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="py-4">Jagarnath S.</td>
              <td className="py-4">24.05.2023</td>
              <td className="py-4">$124.97</td>
              <td className="py-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="">
              <td className="py-4">Anand G.</td>
              <td className="py-4">23.05.2023</td>
              <td className="py-4">$55.42</td>
              <td className="py-4">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="">
              <td className="py-4">Kartik S.</td>
              <td className="py-4">23.05.2023</td>
              <td className="py-4">$89.90</td>
              <td className="py-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
            </tr>
            <tr className="">
              <td className="py-4">Rakesh S.</td>
              <td className="py-4">22.05.2023</td>
              <td className="py-4">$144.94</td>
              <td className="py-4">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="">
              <td className="py-4">Anup S.</td>
              <td className="py-4">22.05.2023</td>
              <td className="py-4">$70.52</td>
              <td className="py-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-4">Jimmy P.</td>
              <td className="py-4">22.05.2023</td>
              <td className="py-4">$70.52</td>
              <td className="py-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Paid
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="md:w-[48%] w-full text-left rounded-lg shadow">
          <caption className="text-lg font-semibold mb-4 text-start">
            Top Products by Units Sold{" "}
          </caption>
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Price</th>
              <th className="py-2">units</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="py-4 flex items-center gap-[8px]">
              <img src={access} alt="" />
              <p>Men Grey Hoodie</p>
              </td>
              <td className="py-4">$49.90</td>
              <td className="py-4">204</td>
            </tr>    
            <tr className="">
              <td className="py-4 flex items-center gap-[8px]">
              <img src={access} alt="" />
              <p>Women Striped T-Shirt</p>
              </td>
              <td className="py-4">$34.90</td>
              <td className="py-4">55</td>
            </tr>    
            <tr className="">
              <td className="py-4 flex items-center gap-[8px]">
              <img src={access} alt="" />
              <p>Wome White T-Shirt</p>
              </td>
              <td className="py-4">$20.90</td>
              <td className="py-4">120</td>
            </tr>    
            <tr className="">
              <td className="py-4 flex items-center gap-[8px]">
              <img src={access} alt="" />
              <p>Men White T-Shirt</p>
              </td>
              <td className="py-4">$49.90</td>
              <td className="py-4">204</td>
            </tr>    
            <tr className="">
              <td className="py-4 flex items-center gap-[8px]">
              <img src={access} alt="" />
              <p>Women Red T-Shirt</p>
              </td>
              <td className="py-4">$34.90</td>
              <td className="py-4">55</td>
            </tr>    
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
