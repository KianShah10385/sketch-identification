function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.SpeechSynthesis;
}
function clearCanvas() {
    background("white");
}
function preload()
    {
        classifier = ml5.imageClassifier('DoodleNet');
    }

function draw()
{
    strokeWeight(15);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseY, mouseX); 
    }
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }


console.log(results);
document.getElementById("label").innerHTML = 'label'+results[0].label;
document.getElementById("confidence").innerHTML='confidence'+Math.round(result[0].confidence*100);
utterThis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterThis);
}





























