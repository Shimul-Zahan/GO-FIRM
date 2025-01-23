import React from 'react';
import { WiDaySunny } from "react-icons/wi";
import { IoLanguage } from "react-icons/io5";
import Stats from '../Dashboard/Components/Home/Stats';
import TimeSchedule from '../Dashboard/Components/Home/TimeSchedule';
import GenderPieChart from '../Dashboard/Components/Home/GenderChart';
import Profile from '../Dashboard/Components/Home/Profile';
import MyApp from '../Dashboard/Components/Home/Calende';
import SalesHeatmap from './DashboardHomeAndStatPage/SalesHeatmap';


const StatPage = () => {

    const language = [
        { lan: "English" },
        { lan: "Bangla" }
    ];

    return (
        <div className=''>
            {/* Scrollable Content Section */}
            <div className='flex-1 overflow-y-auto pt-4'>
                <div className='grid grid-cols-6 py-3'>
                    {/* Main Content */}
                    <div className='col-span-4 space-y-4'>
                        <Stats />
                        {/* Profile and Pie Chart */}
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
                            <div className="rounded-lg bg-gray-100 p-4 space-y-4">
                                <h1 className='text-xl font-semibold'>Next Patient Details</h1>
                                <Profile />
                            </div>
                        </div>

                    </div>

                    {/* Right Side Content */}
                    <div className='col-span-2 px-5 w-full space-y-5'>
                        {/* <TimeSchedule /> */}
                        <div className="rounded-lg bg-gray-200">
                            <GenderPieChart />
                        </div>
                        <MyApp />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StatPage;
