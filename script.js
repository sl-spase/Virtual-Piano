document.addEventListener("keydown", function (event) {

    let audioFile = document.createElement("AUDIO");

    if (event.code === "KeyA" || event.code === "KeyS" || event.code === "KeyD"
        || event.code === "KeyF" || event.code === "KeyG"
        || event.code === "KeyH" || event.code === "KeyJ") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\white_keys\\" + event.key + ".mp3");
    } else if (event.code === "KeyW" || event.code === "KeyE" ||
        event.code === "KeyT" || event.code === "KeyY" || event.code === "KeyU") {
        audioFile = new Audio("C:\\temp\\JetBrains\\sounds\\black_keys\\"+ event.key +".mp3");
    }
        audioFile.play();
});





