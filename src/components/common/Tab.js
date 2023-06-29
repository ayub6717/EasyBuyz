import React, { useState, useRef, useEffect } from 'react';

const Tab = ({ tabs, children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      const tabWidth = currentTab?.clientWidth ?? 0;
      const tabLeft = currentTab?.offsetLeft ?? 0;

      setTabUnderlineWidth(tabWidth);
      setTabUnderlineLeft(tabLeft);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="border rounded-md">
      <div className="flex relative">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(element) => (tabsRef.current[index] = element)}
            className={`flex-1 px-4 py-2 focus:outline-none`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
        <span
          className="absolute bottom-0 h-1 transition-all ease-in-out duration-300 bg-blue-500"
          style={{
            width: `${tabUnderlineWidth}px`,
            transform: `translateX(${tabUnderlineLeft}px)`,
          }}
        />
      </div>
      <div className="p-4">
        {children.map((child, index) => (
          <div
            key={index}
            className={`mt-4 ${activeTabIndex === index ? 'block' : 'hidden'}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
