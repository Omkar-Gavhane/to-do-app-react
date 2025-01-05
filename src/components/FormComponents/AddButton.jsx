import React from 'react';

const AddButton = (props) =>{
    
    return (
      <div>
        <button
          type="button"
          className="px-10 py-2 text-lg bg-blue-600 text-white bg-emerald_green font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 "
   
        >
          Add
        </button>
      </div>
    );
}

export default AddButton;