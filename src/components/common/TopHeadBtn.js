import React from 'react'

function TopHeadBtn(props) {
  const { name, img, symbol, cartList } = props;

  if (cartList) {
    return (
      <div className="flex flex-col items-center ml-5">
        <img src={img} alt={img} />
        <span className="text-[10px] text-[#898989] font-medium font-dm-sans mt-[11px] leading-3">
          <span className="text-[16px]">{symbol}</span> {name}
        </span>
      </div>
    );
  }

  return (
    <button className="w-fill flex items-center font-dm-sans font-medium">
      <img src={img} alt={img} />
      <span className="pl-2 text-[#2c2c2c] text-[12px] leading-4">
        <span className="text-[16px]">{symbol}</span> {name}
      </span>
    </button>
  );
}

export default TopHeadBtn;
