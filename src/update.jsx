//Libraries
import React from "react";

const Update = () => { 
  let clickHandler = () => {
    window.location.reload(true);
  }

  return (
    <div id="update">
      <div className="button" onClick={clickHandler}>Update</div>
    </div>
  )
}

export default Update;