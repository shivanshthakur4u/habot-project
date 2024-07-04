import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, onClick, activeTab }) => {
  return (
    <li
      className={`px-2 py-3 cursor-pointer lg:text-[26px] text-lg leading-8 font-bold font-poppins text-center lg:w-[202px] w-[100px] ${
        activeTab === label ? "border-b-4 border-b-[#EB7150] text-[#EB7150]" : "text-white"
      }`}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
