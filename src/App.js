import React from 'react';
import {initModel, recognizeLipstick} from './faceapi/api'
import ImageUploader from './components/ImageUploader'
import logo from './logo.svg';
import testImage from './bonnie.jpg'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef();
    this.mouthColors = []
    this.lipColor = {}

    this.state = {
      img: undefined,
      lipstick: undefined
    }

    this.getImage = this.getImage.bind(this)
  }

  drawHTMLImage(canvas,image){
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
  }

  async getImage(img){
    

    // this.drawHTMLImage(this.canvas.current,this.state.img);
    // let imgEle = new Image()
    // imgEle.src = img
    // this.drawHTMLImage(this.canvas.current,imgEle,296,296);


    // let imgEle = new Image()
    // let mycanvas = document.createElement('canvas')
    // let ctx = mycanvas.getContext('2d')
    // imgEle.onload = function(){
    //     ctx.drawImage(imgEle, 0, 0);
    // };
    // imgEle.src = img;
    let lipstick = await recognizeLipstick(img)
    this.lipColor = lipstick
    console.log(lipstick)
    console.log(this.lipColor)
    this.setState({
      img: img,
      lipstick: lipstick.lipstickColor
    })
  }

  async componentDidMount() {
    await initModel()
    if(this.state.img !== undefined){
      const testImageHTML = document.getElementById('test')
      this.drawHTMLImage(this.canvas.current,this.state.img,296,296);
      this.lipColor = await recognizeLipstick(this.canvas.current)
      console.log(this.lipColor)
    }
    
  }
  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <ImageUploader getImage={this.getImage}/>
        {/* {this.state.img !== undefined? <img id="test" src={this.state.img} alt="test" /> : <div></div>} */}
        {/* {this.state.img} */}
        {/* <canvas ref={this.canvas} width={296} height={296} /> */}
        {this.state.lipstick !== undefined? <h3 style={{color: this.state.lipstick.color}}>{this.state.lipstick.color + " " + this.state.lipstick.brand + " " + this.state.lipstick.series + " " + this.state.lipstick.name}</h3> : <h3></h3>}
      </div>
    );
  }
}

export default App;
