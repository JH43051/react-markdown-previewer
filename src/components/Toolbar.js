import React from 'react';

function Toolbar(props){
    return (
      <div className="toolbar">
        <i className="fas fa-pen-fancy"/>      
        {props.text}
        <i onClick={props.onClick} className={props.icon}></i>
      </div>
   )
}

export default Toolbar;
