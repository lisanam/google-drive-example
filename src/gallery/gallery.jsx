//Libraries
import React from "react";

//Components
import Artwork from './artwork';
import Curator from './curator';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ind: 0,
      loadedImg: false
    };
    this.dots = [];
    this.auto;
    this.change = this.change.bind(this);
  }

  componentDidMount() { //set auto change
    this.auto = setTimeout(this.change, 5000); //change slide every 5s
  }

  componentWillUnmount() { //remove auto
    clearTimeout(this.auto);
  }

  change(ind) { //change artwork by ind
    if(!isNaN(ind)) { //pause for 10s
      clearTimeout(this.auto);
      this.auto = setTimeout(this.change, 5000);
    } else { //if no ind given, show next automatically
      ind = this.state.ind + 1;
      if(ind >= this.length) ind = 0; //if end, return to the first
      this.auto = setTimeout(this.change, 5000); //set next auto
    }
    this.setState({ind: ind});
  }

  onLoad() { //load the first images before showing
    this.setState({loadedImg: true})
  }

  render() { 
    let images = this.props.images; //images' metadata from google drive
    console.log(images)
    this.length = images.length; //number of images
    let ind = this.state.ind; //index of image currently showing
    let loadedImg = this.state.loadedImg;

    return (
      <div id="gallery" style={loadedImg ? {} : {display: "none"}}>
        <Artwork image={images[ind]} onLoad={this.onLoad.bind(this)}/>
        <Curator ind={ind} length={this.length} change={this.change.bind(this)}/>
      </div>
    )
  }
}

export default Gallery;