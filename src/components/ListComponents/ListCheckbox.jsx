import React, { useState, useEffect } from "react";

const ListCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked || false); // Initialize from props

  useEffect(() => {
    setIsChecked(props.isChecked); // Sync with prop changes
  }, [props.isChecked]);

  const checkboxHandler = () => {
    const updatedCheck = !isChecked;
    setIsChecked(updatedCheck);
    props.onCheckHandler(updatedCheck, props.id); // Notify parent
  };

  return (
    <div>
      <input
        type="checkbox"
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 focus:ring-2"
        checked={isChecked}
        onChange={checkboxHandler}
      />
    </div>
  );
};

export default ListCheckbox;
