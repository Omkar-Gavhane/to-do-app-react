import React from 'react';

const ListDeleteButton = (props) =>{
       
    const deleteHandler = ()=>{
        props.onDeleteHandler(props.id);
    }
    return (
      <div>
        <button className="bg-delete_red text-white font-semibold text-lg px-5 py-1.5 rounded" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );
}

export default ListDeleteButton;