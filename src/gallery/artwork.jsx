//Libraries
import React from "react";

const Artwork = (props) => {
  return (
    <div id="gallery-artwork">
      <img id="gallery-artwork-image" src={`https://drive.google.com/uc?export=view&id=${props.image.id}`} onLoad={props.onLoad} onError={props.onLoad}/>
    </div>
  )
}

export default Artwork;
