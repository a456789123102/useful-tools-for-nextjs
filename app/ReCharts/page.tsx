'use client';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {Tooltip } from 'recharts'; //use to interactions
  
  function page() {
    const data = [
        { month: 'January', uniqueVisitors: 1200, pageViews: 2400, totalAmount: 2400 },
        { month: 'February', uniqueVisitors: 1500, pageViews: 2600, totalAmount: 2800 },
        { month: 'March', uniqueVisitors: 1800, pageViews: 2700, totalAmount: 2900 },
        { month: 'April', uniqueVisitors: 2000, pageViews: 3000, totalAmount: 3200 },
        { month: 'May', uniqueVisitors: 2200, pageViews: 3400, totalAmount: 3600 },
        { month: 'June', uniqueVisitors: 2500, pageViews: 3600, totalAmount: 3800 },
        { month: 'July', uniqueVisitors: 2700, pageViews: 3800, totalAmount: 4000 },
        { month: 'August', uniqueVisitors: 3000, pageViews: 4000, totalAmount: 4200 },
        { month: 'September', uniqueVisitors: 3200, pageViews: 4200, totalAmount: 4400 },
        { month: 'October', uniqueVisitors: 3400, pageViews: 4400, totalAmount: 4600 },
        { month: 'November', uniqueVisitors: 3600, pageViews: 4600, totalAmount: 4800 },
        { month: 'December', uniqueVisitors: 3800, pageViews: 4800, totalAmount: 5000 },
      ];

      const CustomTick = ({ x, y, payload }) => (
        <text x={x} y={y + 10} textAnchor="middle" fill="#000">
          {payload.value.substring(0, 3)} {/* แสดงแค่ 3 ตัวอักษร */}
        </text>
      );

    return (
 <div>
    1. Choose the type of chart you need
         <div>
          <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uniqueVisitors" stroke="#8884d8" />
  </LineChart>
      </div>
     <div> 2. Add components that you want to be drawn</div>
<div>
<LineChart width={600} height={300} data={data}>
    <Line type="" dataKey="uniqueVisitors" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis />
  </LineChart>
</div>
 <div> 3. Adjust the props of some components</div>
  <div>
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uniqueVisitors" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="month" />
    <YAxis />
  </LineChart>
  <div></div>
  <div>
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uniqueVisitors" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
  </LineChart>
  </div>
  </div>
 </div>
    )
  }
  
  export default page
  