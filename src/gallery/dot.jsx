//Libraries
import React from "react";

//Individual circles in the bottom
const Dot = (props) => {
  let i = props.i;
  let style = props.ind === i ? {background: 'black'} : {};
  return (
    <li className="gallery-curator-dot" key={i} style={style} onClick={() => props.change(i)}/>
  )
}

export default Dot;
