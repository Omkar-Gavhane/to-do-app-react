import React, { useState } from "react";

const ListCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };

  props.onCheckHandler(isChecked);

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
