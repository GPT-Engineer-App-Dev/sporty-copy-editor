import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Football",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Basketball",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: "rgba(153,102,255,0.4)",
        borderColor: "rgba(153,102,255,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sports Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={data} options={options} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;