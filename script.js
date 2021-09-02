function startComparing() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NPb-rtRr3/model.json', modelLoaded)
}

function modelLoaded() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        randomR = Math.floor(Math.random() * 255) + 1;
        randomG = Math.floor(Math.random() * 255) + 1;
        randomB = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'My confidence is -' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        document.getElementById("accuracy").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        img1 = document.getElementById("one");
        img2 = document.getElementById("two");
        img3 = document.getElementById("three");
        img4 = document.getElementById("four");
        if (results[0].label == "Background Noise") {
            img1.src = "Tom.png";
            img2.src = "Scooby Doo.png";
            img3.src = "Jerry.png";
        } else if (results[0].label == "Cat") {
            img1.src = "Tom.gif";
            img2.src = "Scooby Doo.png";
            img3.src = "Jerry.png";
        } else if (results[0].label == "Dog") {
            img1.src = "Tom.png";
            img2.src = "Scooby Doo.gif";
            img3.src = "Jerry.png";
        } else if (results[0].label == "Mouse") {
            img1.src = "Tom.png";
            img2.src = "Scooby Doo.png";
            img3.src = "Jerry.gif";
        }
    }
}
