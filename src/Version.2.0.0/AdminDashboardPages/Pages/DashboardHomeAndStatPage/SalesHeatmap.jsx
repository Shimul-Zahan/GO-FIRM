import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip'; // Updated import
import 'react-calendar-heatmap/dist/styles.css';
import 'react-tooltip/dist/react-tooltip.css'; // Tooltip styles
import './HeatmapStyles.css'; // Custom styles if needed

const SalesHeatmap = () => {
    // Example daily sales data
    const salesData = {
        "2025-01-01": 10,
        "2025-01-02": 20,
        "2025-01-03": 5,
        "2025-01-04": 30,
        // Add more dates and sales
    };

    // Convert salesData to the format required by CalendarHeatmap
    const heatmapData = Object.entries(salesData).map(([date, sales]) => ({
        date,
        count: sales,
    }));

    return (
        <div className="mx-auto pt-5">
            <h1 className="text-2xl font-bold mb-6 text-start text-white">Daily Product Sales :</h1>
            <CalendarHeatmap
                startDate={new Date('2025-01-01')}
                endDate={new Date('2025-12-31')}
                values={heatmapData}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    // Dynamically set classes based on sales volume
                    if (value.count <= 10) return 'color-scale-1';
                    if (value.count <= 20) return 'color-scale-2';
                    if (value.count <= 30) return 'color-scale-3';
                    return 'color-scale-4';
                }}
                tooltipDataAttrs={(value) => ({
                    'data-tooltip-id': 'sales-tooltip', // Updated tooltip ID
                    'data-tooltip-content': value.date
                        ? `${value.date}: ${value.count} sales`
                        : 'No sales data',
                })}
                showWeekdayLabels={true}
            />
            {/* React Tooltip for Heatmap */}
            <Tooltip id="sales-tooltip" />
        </div>
    );
};

export default SalesHeatmap;
