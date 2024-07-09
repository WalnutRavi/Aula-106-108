//https://teachablemachine.withgoogle.com/models/gdAv91rrL/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gdAv91rrL/model.json",modelLoaded)
}
function modelLoaded(){
    console.log("modelo carregado")
    classifier.classify(got_result)
}
function got_result(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1

        document.getElementById("result_label").innerHTML="Posso ouvir-"+results[0].label
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("result_confidence").innerHTML="precisão-"+(results[0].confidence*100).toFixed(2)+"%"

        img1=document.getElementById("person1")
        img2=document.getElementById("person2")
        img3=document.getElementById("person3")
        img4=document.getElementById("person4")

        if (results[0].label=="Palmas") {
            img1.src="Asta modo black.gif"
            img2.src="Luffy-removebg-preview.png"
            img3.src="DEKU-removebg-preview.png"
            img4.src="tanjiro-removebg-preview.png"
        }
        else if (results[0].label=="Computador") {
            img1.src="Asta-removebg-preview.png"
            img2.src="Luffy gear 5.gif"
            img3.src="DEKU-removebg-preview.png"
            img4.src="tanjiro-removebg-preview.png"
        }
        else if (results[0].label=="Estalar dedo") {
            img1.src="Asta-removebg-preview.png"
            img2.src="Luffy-removebg-preview.png"
            img3.src="Deku dark.gif"
            img4.src="tanjiro-removebg-preview.png"
        }
        else {
            img1.src="Asta-removebg-preview.png"
            img2.src="Luffy-removebg-preview.png"
            img3.src="DEKU-removebg-preview.png"
            img4.src="Tanjiro oni.gif"
        }
    }
}