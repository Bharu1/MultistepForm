import React from 'react';
import Thankyouicon from '../../assets/icon-thank-you.svg';
import { useSelector } from 'react-redux';

const ThankYou = () => {
 
  const personalInfo = useSelector((state) => state.form.personalInfo);

  console.log('Personal Info:', JSON.stringify(personalInfo));

  return (
    <div className="flex flex-col justify-center items-center h-full mx-14 space-y-4">
      {/* Thank You Icon */}
      <div>
        <img src={Thankyouicon} alt="Thank You Icon" className="w-20 h-20" />
      </div>
      
      {/* Thank You Message */}
      <p className="text-3xl font-bold text-blue-950">Thank you!</p>
      <p className="text-sm text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our platform. 
        If you ever need support, please feel free to email us at 
        <a 
          href="mailto:support@loremgaming.com" 
          className="text-purpleblue underline ml-1">
          support@loremgaming.com
        </a>.
      </p>
    </div>
  );
};

export default ThankYou;
