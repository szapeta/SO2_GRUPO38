import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { ListProcesos } from "./ListProcesos";
import { types } from "../../../types/Types";
Chart.register(ArcElement);

export const Home = () => {
  const [chartData, setChartData] = useState({});
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(types.apiurl + "/grafico");
        const data = response.data;
        setDataTable(data);
        const labels = data.map((item) => item.nombre_proceso);
        const diferencias = data.map((item) => item.diferencia);

        const backgroundColors = [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ];

        const borderColors = [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ];

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Memory Usage",
              data: diferencias,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <>
    <div className="pb-5 mb-5">
      <h1>Memory Usage Dashboard</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-8">
            {chartData && chartData.datasets && (
              <Pie
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Memory Usage by Process",
                    },
                  },
                }}
              />
            )}
          </div>
          <div className="col-4">
      <table className="table">
        <thead>
          <tr>
            <th>PID</th>
            <th>Nombre del proceso</th>
            <th>Tamaño</th>
          </tr>
        </thead>
        <tbody>
        {dataTable.map((item, index) => (
                        <tr key={index}>
                            <td>{item.pid}</td>
                            <td>{item.nombre_proceso}</td>
                            <td>{item.diferencia}</td>
                        </tr>
                    ))}

        </tbody>
      </table>
          </div>
        </div>
      </div>
    </div>
    <ListProcesos />
    </>
  );
};
