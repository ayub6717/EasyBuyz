import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

const Option = (props) => (
  <components.Option {...props} className="country-option">
    <div className="flex items-center leading-[22px] text-[14px] font-medium">
      {/* <img src={props.data.icon} alt="logo" className="country-logo" />y */}
      {props.data.label}
    </div>
  </components.Option>
);

const SelectField = ({CustomField, data}) => {
  const [selectedBranch, setSelectedBranch] = useState({});
  useEffect(()=>{
    if(data?.length>0){
      setSelectedBranch(data[0])
    }
  },[data])

  const handleChange = (value) => {
    setSelectedBranch(value);
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <div className="flex items-center leading-[22px] text-[14px] font-medium">
        {/* <img src={selectedBranch.icon} alt="s-logo" className="selected-logo" /> */}
        {children}
      </div>
    </components.SingleValue>
  );

  const brandColor = '#DFDFDF';
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      backgroundColor: CustomField ? '#F2F2F2' : '',
      height: CustomField ? 'true' : '',
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused
        ? brandColor
        : base.borderColor,
        '&:hover': {
        borderColor: state.isFocused
        ? brandColor
        : base.borderColor,
      }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#F3F3F3" : null,
        color: "#2C2C2C"
      };
    },
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#2c2c2c',
      cursor:'pointer',
      padding:0,
      'svg':{
        width:'14px',
        height:'14px',
        },
      }),
      menuList: base => ({
        ...base,
        padding: 0
      })
  };
  

  return (
    <div>
      <Select styles={customStyles}
        className={`${CustomField ? 'w-full':'w-full focus-none'}`}
        value={selectedBranch}
        options={data}
        onChange={handleChange}
        components={{
          Option,
          SingleValue,
          IndicatorSeparator: () => null
        }}
      />
    </div>
  );
};

export default SelectField;
