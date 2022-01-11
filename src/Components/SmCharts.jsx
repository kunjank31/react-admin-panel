import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <div className="shadow-md w-full rounded-lg my-5 p-5">
        <h2 className="text-2xl font-semibold pb-5">Sales</h2>
        <div className="chart h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              {/* <Tooltip /> */}
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
