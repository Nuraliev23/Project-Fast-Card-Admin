import { Card, CardContent, Typography } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    id: 'basic-bar',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  },
};

const series = [
  {
    name: 'Sales',
    data: [30, 40, 35, 50, 49],
  },
];

export default function ChartCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Monthly Sales</Typography>
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </CardContent>
    </Card>
  );
}
