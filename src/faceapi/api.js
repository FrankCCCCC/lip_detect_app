import * as faceapi from 'face-api.js';
import {compareLipstick} from './readLipsticks'

const MODEL_URL = '/models'

async function initModel() {
    console.log("Init Model")
    try{  
        await faceapi.loadFaceLandmarkTinyModel(MODEL_URL)
        console.log("Loaded FaceLandmarkTinyModel")
        await faceapi.loadTinyFaceDetectorModel(MODEL_URL)
        console.log("Loaded TinyFaceDetectorModel")
        await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
        console.log("Loaded SsdMobilenetv1Model")
    }catch(err){
        console.log("Loaded Model Failed")
    }
}

async function recognizeLipstick(canvas){
    // const option = new faceapi.TinyFaceDetectorOptions({512, 0.5})
    const landmarks = await faceapi.detectSingleFace(canvas).withFaceLandmarks(true)
    let mouthPoint = landmarks.landmarks.getMouth()
    let mouthColors = getMouthColor(canvas,mouthPoint)
    let avgColor = getAvgColor(mouthColors)
    let lipstickColor = compareLipstick(avgColor)
    
    // console.log(this.mouthColors)
    // console.log(this.avgColor(this.mouthColors))
    // console.log(compareLipstick(this.avgColor(this.mouthColors)))
    // console.log(lipsticks)

    return {
        mouthColors: mouthColors,
        avgColor: avgColor,
        lipstickColor: lipstickColor
    }
}

function getMouthColor (canvans, mouthPoint) {
    let context = canvans.getContext("2d")
    let mouthColors = [];
    for (let i =0;i<mouthPoint.length;i++){
        let data = context.getImageData(mouthPoint[i]["_x"],mouthPoint[i]["_y"],1,1)
        mouthColors[i] = data.data
    }

    return mouthColors
}

function getAvgColor(mouthColors){
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

export {initModel, recognizeLipstick}