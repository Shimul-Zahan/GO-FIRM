import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart = () => {
    const data = {
        labels: ['Male', 'Female', 'Child'],
        datasets: [
            {
                label: 'Gender Distribution',
                data: [30, 50, 20], // Example values for Male, Female, and Child
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',  // Blue for Male
                    'rgba(255, 99, 132, 0.6)',  // Red for Female
                    'rgba(255, 206, 86, 0.6)',  // Yellow for Child
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        // Access the raw value
                        const value = tooltipItem.raw;
                        return `${tooltipItem.label}: ${value}%`;
                    },
                },
            },
        },
    };

    const chartContainerStyle = {
        width: '100%', // Adjust width
        height: '250px', // Adjust height
        margin: '0 auto', // Center the chart
    };

    return (
        <div className="p-3">
            <h2 className="text-lg font-semibold text-center">Gender Distribution</h2>
            <div style={chartContainerStyle}>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default GenderPieChart;
