document.addEventListener("keydown", function (event) {

    let audioFile = document.createElement("AUDIO");
    if (event.code === "KeyA") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\a.mp3");
        audioFile.play();
    } else if (event.code === "KeyS") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\s.mp3");
        audioFile.play();
    } else if (event.code === "KeyD") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\d.mp3");
        audioFile.play();
    } else if (event.code === "KeyF") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\f.mp3");
        audioFile.play();
    } else if (event.code === "KeyG") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\g.mp3");
        audioFile.play();
    } else if (event.code === "KeyH") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\h.mp3");
        audioFile.play();
    } else if (event.code === "KeyJ") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\j.mp3");
        audioFile.play();
    } else if (event.code === "KeyW") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\black_keys\\w.mp3");
        audioFile.play();
    } else if (event.code === "KeyE") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\black_keys\\e.mp3");
        audioFile.play();
    } else if (event.code === "KeyT") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\black_keys\\t.mp3");
        audioFile.play();
    } else if (event.code === "KeyY") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\black_keys\\y.mp3");
        audioFile.play();
    } else if (event.code === "KeyU") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\black_keys\\u.mp3");
        audioFile.play();
    }
});





