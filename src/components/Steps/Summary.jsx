import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const Summary = () => {
  const navigate = useNavigate();

  const selectedPlan = useSelector((state) => state.form.selectedPlan);
  const isYearly = useSelector((state) => state.form.isYearly);
  const selectedAddons = useSelector((state) => state.form.selectedAddons);

  const plans = {
    Arcade: isYearly ? 90 : 9,
    Advanced: isYearly ? 120 : 12,
    Pro: isYearly ? 150 : 15,
  };
  const addonPrices = {
    'Online Service': isYearly ? 10 : 1,
    'Larger Storage': isYearly ? 20 : 2,
    'Customizable Profile': isYearly ? 20 : 2,
  };

  const total =
    (plans[selectedPlan] || 0) +
    selectedAddons.reduce((sum, addon) => sum + (addonPrices[addon] || 0), 0);

  const handleBack = () => {
    navigate('/addons');
  };

  const handleConfirm = () => {
    navigate('/thank-you');
  };

  const handleChangePlan = () => {
    navigate('/select-your-plan');
  };

  return (
    <div className="m-10">
      <h2 className="text-3xl text-blue-950 font-bold">Finishing up</h2>
      <p className="text-sm font-extralight text-gray-500 my-2">
        Double-check everything looks OK before confirming.
      </p>

      {/* Plan and add-ons summary */}
      <div className="bg-coolgray p-4 rounded-lg mt-4">
        {/* Selected Plan */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm text-marineblue">
            {selectedPlan} ({isYearly ? 'Yearly' : 'Monthly'})
          </p>
          <p className="font-bold text-sm text-marineblue">
            ${plans[selectedPlan]}/{isYearly ? 'yr' : 'mo'}
          </p>
        </div>
        <button
          className="text-xs underline mt-2 text-blue-600 hover:text-blue-800"
          onClick={handleChangePlan}
        >
          Change
        </button>
        <hr className="my-4" />

        {/* Selected Add-ons */}
        {selectedAddons.map((addon) => (
          <div key={addon} className="flex justify-between text-sm">
            <p className="text-gray-500">{addon}</p>
            <p className="text-marineblue">
              +${addonPrices[addon]}/{isYearly ? 'yr' : 'mo'}
            </p>
          </div>
        ))}
        <hr className="my-4" />

        {/* Total */}
        <div className="flex justify-between font-bold text-lg">
          <p className="text-gray-500">Total ({isYearly ? 'per year' : 'per month'})</p>
          <p className="text-violet-600">${total}/{isYearly ? 'yr' : 'mo'}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button variant="ghost" onClick={handleBack}>
          Go Back
        </Button>
        <Button variant="confirm" onClick={handleConfirm}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Summary;
