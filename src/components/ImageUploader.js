import React, { Component } from "react";

/**
 * @param {function} getImage - The function will be called with uploaded image as parameter when the component get uploaded image
 */

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: undefined
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange (event){
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });

      if(this.props.getImage !== undefined){
        let reader = new FileReader()
          reader.readAsDataURL(img)
          reader.onload = async (e)=> {
            let uploadBase64 = new Image();
            uploadBase64.src = e.target.result
            let that = this
            // var uploadedBased64Width = uploadBase64.width
            // var uploadedBased64Height = 800
            // console.log(uploadedBased64Width)
            // console.log(uploadedBased64Height)
            uploadBase64.onload = async function () {
              let canvas = document.createElement("canvas")
              canvas.width = this.width
              canvas.height = this.height
              // console.log(this.width)
              // console.log(this.height)
              let ctx = canvas.getContext("2d")
              let width = this.width
              let height = this.height
              ctx.drawImage(uploadBase64, 0, 0, width, height)
              that.props.getImage(canvas)
              // that.startRecognition(canvas)
            }
          }

        
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            {this.state.image !== undefined? <img src={this.state.image} alt={"uploaded_img"} style={{width: "100%"}}/> : <div></div>}
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default ImageUploader;