import React from 'react';
import * as faceapi from 'face-api.js';
import {hexToRgb, compareLipstick} from './readLipsticks'
import logo from './logo.svg';
import testImage from './bonnie.jpg'
import './App.css';
import lipsticks from './lipstick.json'
import { round } from 'face-api.js/build/commonjs/utils';

const MODEL_URL = '/models'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef();
    this.mouthColors = []
  }

  async initModel() {
    console.log("Init Model")
    try{
      await faceapi.loadFaceDetectionModel(MODEL_URL)
      await faceapi.loadFaceLandmarkModel(MODEL_URL)
      await faceapi.loadFaceRecognitionModel(MODEL_URL)
      console.log("Loaded Model")
    }catch(err){
      console.log("Loaded Model Failed")
    }
  }

  getMouthColor (canvans, mouthPoint) {
    let context = canvans.getContext("2d")
    for (let i =0;i<mouthPoint.length;i++){
      let data = context.getImageData(mouthPoint[i]["_x"],mouthPoint[i]["_y"],1,1)
      this.mouthColors[i] = data.data
    }
  }

  drawHTMLImage(canvas,image,width,height){
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image,0,0,width,height);
  }

  avgColor(mouthColors){
    let r = 0, g = 0, b = 0
    let len = mouthColors.length
    // console.log(mouthColors.length)
    for(let i = 0; i < mouthColors.length; i++){
      // console.log(mouthColors[0])

      r+=mouthColors[i][0]
      g+=mouthColors[i][1]
      b+=mouthColors[i][2]
    }

    return {
      r: Math.round(r / len),
      g: Math.round(g / len),
      b: Math.round(b / len),
    }
  }

  async recognizeLipstick(canvas){
    const landmarks = await faceapi.detectSingleFace(canvas).withFaceLandmarks()
    let mouthPoint = landmarks.landmarks.getMouth()
    this.getMouthColor(canvas,mouthPoint)
    console.log(this.mouthColors)
    console.log(this.avgColor(this.mouthColors))
    console.log(compareLipstick(this.avgColor(this.mouthColors)))
    console.log(lipsticks)
  }
  

  async componentDidMount(props) {
    await this.initModel()
    const testImageHTML = document.getElementById('test')
    this.drawHTMLImage(this.canvas.current,testImageHTML,296,296);
    // await this.getFullFaceDescription(this.canvas.current);
    // this.drawDescription(this.canvas.current);
    await this.recognizeLipstick(this.canvas.current)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>

        <img id="test" src={testImage} alt="test" />
        <canvas ref={this.canvas} width={296} height={296} />
      </div>
    );
  }
}

export default App;
