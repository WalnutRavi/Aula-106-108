//https://teachablemachine.withgoogle.com/models/gdAv91rrL/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gdAv91rrL/model.json",modelLoaded)
}
function modelLoaded(){
    console.log("modelo carregado")
}