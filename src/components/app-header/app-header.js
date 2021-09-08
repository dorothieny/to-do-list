import React from "react";
import './app-header.css';
const AppHeader = ({importantCount, otherCount})=>{
    return(
      <div className='heder_component'>
      <h1 className="header">My to-do list</h1>
      <div>
      <span>Important {importantCount}</span>
      <span> Others {otherCount}</span>
      </div>
      </div>
    )
  }
export default AppHeader;