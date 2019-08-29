//Libraries
import React from "react";

const Artwork = (props) => {
  return (
    <div id="gallery-artwork">
      <img id="gallery-artwork-image" src={`https://drive.google.com/uc?export=view&id=${props.image.id}`} onLoad={props.onLoad} onError={props.onLoad}/>
      <div id="credit">
        by <a href="https://portfolio.kimcarly.com">Carly Kim</a>, Industrial Designer in SF
      </div>
    </div>
  )
}

export default Artwork;
