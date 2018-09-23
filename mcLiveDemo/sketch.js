let video;
let style;
let resultImg;

function setup() {
    //the .parent creates a dom element with that label
    createCanvas(320, 240).parent('canvasContainer');

    //grabs video from webcam
    video = createCapture(VIDEO);
    //hides the original video because all you care about is the
    //tranformed video
    video.hide();

    //creates the image item
    resultImg = createImg('');
    //hides it
    resultImg.hide();

    //tells ml5 where to find the model, where do get the input,
    //and triggers a callback function
    style = ml5.styleTransfer('models/mountainclimber', video, modelLoaded);
}

//the image is hidden in the other functions so that it
//can be drawn here
function draw() {
    image(resultImg, 0, 0, 320, 240);
}

//this triggers when the model loads to initiate gotResult
function modelLoaded() {
    //selects the item in the html with the label 'status'
    //and changes the html to new text
    select('#status').html('Robots Assembled');
    //initiates the style transfer process
    style.transfer(gotResult);
}

//this just keeps looping and updating the image
function gotResult(err, img) {
    //adds the atribute of 'src' to the object resultImg
    resultImg.attribute('src', img.src);
    //keeps doing the transfer
    style.transfer(gotResult);
}
