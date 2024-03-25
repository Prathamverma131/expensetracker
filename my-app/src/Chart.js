import styles from './Chart.module.css';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef();
  if(!data){
    
    data = {
        "expenses": [
            {"type": "Food", "count": 100},   
        {"type": "Entertainment", "count": 100},
       
        {"type": "Travel", "count": 100}, 
        ]
        }
  }
  if(data.expenses[0].count===0&&data.expenses[1].count===0&&data.expenses[2].count===0){
   data =  {"expenses": [
      {"type": "Food", "count": 100},   
  {"type": "Entertainment", "count": 100},
 
  {"type": "Travel", "count": 100}, 
  ]
  }
  }
  

  useEffect(() => {
    // Destroy existing chart before creating a new one
    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }
    if(data){
    const types = data.expenses.map(item => item.type);
    const counts = data.expenses.map(item => item.count);

    const chartConfig = {
      type: 'pie',
      data: {
        labels: types,
        datasets: [{
          data: counts,
          backgroundColor: [
            '#A000FF',
            '#FF9304',
            '#FDE006',
          ],
          
          borderWidth: 0,
          colour:"white"
        }]
      },
      options: {
        plugins: {
            legend: {
                position: 'bottom', 
                labels: {
                    color: 'white' 
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    };

    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, chartConfig);

    // Store chart instance in ref for future access
    chartRef.current.chart = chart;
  }}, [data]);

  return <>
    <div className={styles.container}><canvas ref={chartRef} id="pieChart" width={500} height={500} /></div>
  </>;
};

export default PieChart;

