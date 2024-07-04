import React, { useState } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="list-none p-0 flex gap-8 max-lg:items-center max-lg:justify-center max-lg:mt-6">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              key={label}
              label={label}
              onClick={onClickTab}
              activeTab={activeTab}
            />
          );
        })}
      </ul>
      <div
        className="lg:pt-9 pt-6 text-white lg:text-lg 
       leading-10 text-base font-poppins
       lg:font-medium font-normal flex flex-col lg:gap-5 gap-0 max-w-[452px]"
      >
        {children.map((child) => {
          if (child.props.label !== activeTab) return null;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tabs;
