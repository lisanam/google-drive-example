//Libraries
import React from "react";

//Components
import Dot from './dot';

//Collection of dots in the bottom
const Curator = (props) => {
  let dots = [];
  //Create Dots according to number of images
  for(let i=0; i<props.length; i++){
    dots.push(<Dot ind={props.ind} i={i} key={i} change={props.change}/>);
  };

  return (
    <ul id="gallery-curator">
      {dots}
    </ul>
  )
}

export default Curator;
