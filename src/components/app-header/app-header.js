import React from "react";
const AppHeader = ({importantCount, otherCount})=>{
    return(
      <>
      <h1>My to-do list</h1>
      <span>Important {importantCount}</span>
      <span> Others {otherCount}</span>
      </>
    )
  }
export default AppHeader;