//Libraries
import React from "react";
import axios from "axios";

const Update = () => { 
  let clickHandler = () => {
    axios.get("/update")
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div id="update">
      <div className="button" onClick={clickHandler}>Update</div>
    </div>
  )
}

export default Update;