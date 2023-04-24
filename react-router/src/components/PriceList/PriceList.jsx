import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PriceList = () => {
  let students = [
    {
      id: 123,
      name: "John",
      math: 45,
      cgpa: [3.5, 3.6, 3.8],
      // math: 70,
    },
    {
      id: 456,
      name: "Jane",
      math: 45,
      cgpa: [3.2, 3.5, 3.7],
      // math: 90,
    },
    {
      id: 789,
      name: "Bob",
      cgpa: [3.8, 3.9, 4.0],
      // math: 100,
    },
  ];

  return (
    <main className="mt-10">
      <BarChart width={1000} height={500} data={students}>
        <Bar dataKey="math" fill="#8884d8"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="math"></YAxis>
        <Tooltip fill="#8884d8" />
      </BarChart>
    </main>
  );
};

export default PriceList;
