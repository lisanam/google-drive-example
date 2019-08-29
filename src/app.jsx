//Libraries
import React from "react";
import { render } from "react-dom";
import axios from "axios";

//Components
import Gallery from "./gallery/gallery";
import Update from "./update";

//Style
import "./main.css";

let sample = [{"id":"1-RN9qjZICWWW88tP1x159Co_7EIxL1tY","name":"01.png"},{"id":"12foSoUA3gk4yJJZ4b1ovbl4apiszPlop","name":"02.png"},{"id":"1yqoIMMOwSMHWBWjONEa8AKnYtNF1ubN0","name":"03.png"},{"id":"17Of0pGAIgJe82b4cvji4-6QXnWTNBe9P","name":"04.png"},{"id":"1Zm4g92RXaLc3PcsFFndiy3zPFHpsy1Ta","name":"05.png"},{"id":"1QBYZcf07QlBkOQ4XWqj5kN8rXvbGJrnO","name":"06.png"},{"id":"1fhlf7EpzRka7tbYwY5qiHBBHeHN3QmLG","name":"07.png"},{"id":"1LcnItDMVjqqe8vCzdeLZ1Srfx4jnoFDz","name":"08.png"},{"id":"170L5KbKmvT_aa6JpOARS5MdpsjrH2GOd","name":"09.png"}]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: sample
    }
  }

  componentDidMount() {
    this.getImages(); //get images from Google Drive
  }

  getImages() { //retrieve images' metadata
    axios.get('/images')
    .then((res) => {
      if(res.data === "GOOGLE_API_KEY is missing") { 
        //if Google API Key is missing
        window.alert("GOOGLE_API_KEY is missing in .env");
      } else if(res.data === "FOLDER_ID is missing") {
        //if folder id is missing
        window.alert("FOLDER_ID is missing in .env");
      } else { //Both GOOGLE_API_KEY & FOLDER_ID is there, so get images

        let images = res.data;
        this.setState({
          images: images
        });

        //remove credit under sample images
        document.getElementById("credit").style.display = "none";
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render() {
    return (
      <div id="app">
        <Update/>
        <Gallery images={this.state.images}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById("root"));
