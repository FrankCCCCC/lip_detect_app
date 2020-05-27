import React from 'react';
import * as faceapi from 'face-api.js';
import logo from './logo.svg';
import testImage from './bonnie.jpg'
import './App.css';
import lipsticks from './lipstick.json'

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

  async recognizeLipstick(canvas){
    const landmarks = await faceapi.detectSingleFace(canvas).withFaceLandmarks()
    let mouthPoint = landmarks.landmarks.getMouth()
    this.getMouthColor(canvas,mouthPoint)
    console.log(this.mouthColors)
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
