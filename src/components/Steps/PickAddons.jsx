import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddon } from '../Redux/Formslice';
import { useNavigate } from 'react-router-dom';

const PickAddons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isYearly = useSelector((state) => state.form.isYearly);
  const selectedAddons = useSelector((state) => state.form.selectedAddons);

  const addons = [
    {
      name: 'Online Service',
      description: 'Access to multiplayer games.',
      price: isYearly ? '+$10/yr' : '+$1/mo',
    },
    {
      name: 'Larger Storage',
      description: 'Extra 1TB of cloud save.',
      price: isYearly ? '+$20/yr' : '+$2/mo',
    },
    {
      name: 'Customizable Profile',
      description: 'Custom theme on your profile.',
      price: isYearly ? '+$20/yr' : '+$2/mo',
    },
  ];

  const handleSelectAddon = (addon) => {
    dispatch(toggleAddon(addon.name));
  };

  const handleNext = () => {
    if (selectedAddons.length > 0) {
      navigate('/summary');
    } else {
      alert('Please select at least one add-on.');
    }
  };

  const handleBack = () => {
    navigate('/select-your-plan');
  };


  return (
    <div className="m-10">
      <p className="text-3xl text-blue-950 font-bold">Pick Add-ons</p>
      <p className="text-sm font-extralight text-gray-500 my-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="my-8">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className={`flex items-center justify-between p-4 border my-4 rounded-lg 
              ${selectedAddons.includes(addon.name)
                ? 'border-blue-950 bg-slate-300'
                : 'border-slate-500'
              }
              hover:border-blue-950 hover:bg-gray-300`}
          >
            <div className="flex mx-4">
              <Checkbox
                checked={selectedAddons.includes(addon.name)}
                onCheckedChange={() => handleSelectAddon(addon)}
              />
              <div className="mx-4">
                <p className="font-bold text-sm text-blue-950">{addon.name}</p>
                <p className="text-gray-500 text-xs font-thin">{addon.description}</p>
              </div>
            </div>

            <div className="mx-4 font-thin text-sm text-violet-600">{addon.price}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <Button variant="ghost" onClick={handleBack}>
          Go Back
        </Button>
        <Button onClick={handleNext}>Next Step</Button>
      </div>
    </div>
  );
};

export default PickAddons;
