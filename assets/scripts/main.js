console.log("script connected successfully");

document.addEventListener("DOMContentLoaded", () => {
    autoSlider();
});

let currSilder = 0;

function autoSlider() {
    let imageCount = 3;
    setInterval(function () {
        currSilder++;
        if (currSilder >= imageCount) {
            currSilder = 0;
        }

        turnNext();
    }, 3000);  // Delay here = 3 seconds
}

function turnNext() {
    let val = currSilder * -100;
    document.getElementsByClassName("sliderImage")[0].style.left = val + "%";
    // document.getElementById("btn1").style.background = "white"
    // document.getElementById("btn2").style.background = "lightcoral"
}