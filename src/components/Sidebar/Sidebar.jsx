import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const steps = [
        { index: '1', step: 'STEP 1', title: 'YOUR INFO', path: '/' },
        { index: '2', step: 'STEP 2', title: 'SELECT PLAN', path: '/select-your-plan' },
        { index: '3', step: 'STEP 3', title: "ADD ON'S", path: '/addons' },
        { index: '4', step: 'STEP 4', title: 'SUMMARY', path: '/summary' },
    ];

    return (
        <div className="w-1/3 bg-gray-100 bg-Desktop bg-cover p-4 rounded-lg mt-5 ml-5 mb-5">
            {steps.map(({ index, step, title, path }) => (
                <div
                    key={index}
                    className={`m-5 text-white flex items-center space-x-4 ${location.pathname === path ? '' : ''
                        }`}
                >
                    {/* Circle Styling */}
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full border border-white ${location.pathname === path ? 'bg-slate-400 text-black border-transparent' : ''
                            }`}
                    >
                        {index}
                    </div>
                    <div className="flex flex-col">
                        {/* Reduced text size for STEP labels */}
                        <p className="text-[10px] text-slate-400">{step}</p> {/* Step (e.g., "STEP 1") */}
                        <p className="text-sm font-light">{title}</p> {/* Title (e.g., "YOUR INFO") */}
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Sidebar;