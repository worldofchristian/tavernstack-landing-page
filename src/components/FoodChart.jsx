import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Papa from 'papaparse';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FoodChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/foodusa.csv')
      .then(response => response.text())
      .then(data => {
        Papa.parse(data, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            const data = results.data;
            const labels = data.map(item => item.DATE);
            const values = data.map(item => item.VALUE); 

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: 'CSV Data',
                  data: values,
                  fill: false,
                  borderColor: 'rgba(75, 192, 192, 1)',
                  tension: 0.1
                }
              ]
            });
          }
        });
      });
  }, []);
  
  const options = {
    plugins: {
      legend: {
        display: false, // disable legend
      },
    },
  };

  return (
    <div className="w-96">
      {chartData ? (
          <Line data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FoodChart;