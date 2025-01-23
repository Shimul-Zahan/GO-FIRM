import { LuLayoutDashboard } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RxAvatar } from "react-icons/rx";
import { FiMessageSquare } from "react-icons/fi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { SiCoveralls } from "react-icons/si";
import SalesHeatmap from "../../../Pages/DashboardHomeAndStatPage/SalesHeatmap";

const Stats = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col rounded-lg bg-blue-50 px-2 py-4 text-center ">
                        <div className="flex justify-center items-center gap-2">
                            <RxAvatar className="text-2xl font-black" />
                            <div>
                                <dd className="text-xl font-bold text-blue-600">680</dd>
                                <dt className="order-last text-lg font-medium text-gray-500">Total Patients</dt>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg bg-blue-50 px-2 py-4 text-center">
                        <div className="flex justify-center items-center gap-2">
                            <SlCalender className="text-2xl font-black" />
                            <div>
                                <dd className="text-xl font-extrabold text-blue-600">120</dd>
                                <dt className="order-last text-lg font-medium text-gray-500">Appointments</dt>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg bg-blue-50 px-2 py-4 text-center">
                        <div className="flex justify-center items-center gap-2">
                            <FiMessageSquare className="text-2xl font-black" />
                            <div>
                                <dd className="text-xl font-extrabold text-blue-600">310</dd>
                                <dt className="order-last text-lg font-medium text-gray-500">Clinic Consulting</dt>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg bg-blue-50 px-2 py-4 text-center">
                        <div className="flex justify-center items-center gap-2">
                            <SiCoveralls className="text-2xl text-yellow-500 font-black" />
                            <div>
                                <dd className="text-xl font-extrabold text-blue-600">4.4</dd>
                                <dt className="order-last text-lg font-medium text-gray-500">Overall Rating</dt>
                            </div>
                        </div>
                    </div>
                </dl>
                <SalesHeatmap />
            </div>
        </div>
    )
}

export default Stats