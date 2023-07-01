import React from 'react';
import { connect } from 'react-redux';

const Button = ({
  text,
  color,
  textColor,
  width,
  icon,
  hoverColor,
}) => {
  const buttonClasses = `flex items-center justify-center bg-[${color}] hover:bg-[${hoverColor}] text-${textColor} font-bold py-2 px-4 rounded ${width}`;

  return (
    <button className={buttonClasses}>
      {icon &&
       <img className={`mr-2`} src={icon} alt={icon} />
       }
      {text}
    </button>
  );
};

const mapStateToProps = (state) => ({
  // Add any Redux state properties you need here
});

export default connect(mapStateToProps)(Button);
