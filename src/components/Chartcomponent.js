import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import data from '../assets/data/data.json'

const chartData = {
  labels: data.map((item) => item.day),
  datasets: [
    {
      label: '',
      data:data.map((item) => item.amount),
      backgroundColor: 'hsl(10, 79%, 65%)',
      borderRadius: 5,
    }
  ]
}
  const chartOptions = {
    plugins: {
      legend: false // Hide legend
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display:false,
        },
        ticks: {
          display: false
        },
      },
      x: {
          display:true,
          grid: {
            display: false,
          }
        },
    },
  }

function chartComponent () {
    return (
        <div className="bg-red-50 my-4 p-4 text-white w-1/3 h-96 justify-self-center rounded-xl mx-auto flex flex-col">>
            <h3 className="text-xl font-semibold text-black text-left">Spending - Last 7 days</h3>
            <Bar data={chartData} options={chartOptions} />
            <hr className="h-px my-8 bg-gray-300 border-1"></hr>
            <div className="text-black flex flex-row justify-between">
                <div>
                    <p className="text-xs text-left text-slate-500">Total this month</p>
                    <span className="text-3xl font-semibold">$478.33</span>
                </div>
                <div className="py-4">
                    <p className="text-xs font-bold text-right">+2.4%</p>
                    <p className="text-xs text-slate-500 ">from last month</p>
                </div>
            </div>
        </div>
    )
}

export default chartComponent