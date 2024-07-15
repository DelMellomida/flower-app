import React from 'react';

const Flower = () => {
  return (
    <>
      <div className="flower relative sway-animation">
        <div className="flower_wrapper absolute inset-x-1/2 bottom-0">
          <div className="flower-line w-1 h-96 bg-[image:var(--line-color)] w-[1vmin] h-[54vmin];"></div>
          <div className="flower-center absolute inset-x-full bg-red-800 w-2 h-2 -translate-x-1/2 rotate-[-10deg]">
            <div className="flower-leaf flower-bulb -translate-x-2/4 left-2/4 top-[25px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[-30deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[-60deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[-90deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[-120deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[-150deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[0deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[30deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[60deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[90deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[120deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[150deg] left-[50%] top-[-35px]"></div>
            <div className="flower-leaf -translate-x-2/4 rotate-[180deg] left-[50%] top-[-35px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flower;
