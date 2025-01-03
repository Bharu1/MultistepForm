import React from "react"; 
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Added Routes and Route
import PersonalInfo from "./components/Steps/PersonalInfo";
import SelectyourPlan from "./components/Steps/SelectyourPlan";
import PickAddons from "./components/Steps/PickAddons";
import Summary from "./components/Steps/Summary";
import Thankyou from "./components/Steps/ThankYou";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-coolgray flex items-center justify-center">
        {/* Main Card */}
        <div className="flex w-[50rem] h-[35rem] rounded-xl shadow-2xl bg-white">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<PersonalInfo />} /> 
              <Route path="/select-your-plan" element={<SelectyourPlan />} />
              <Route path="/addons" element={<PickAddons />} /> 
              <Route path="/summary" element={<Summary />} />
              <Route path="/thank-you" element={<Thankyou />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
