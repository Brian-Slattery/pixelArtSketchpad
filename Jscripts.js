document.addEventListener('DOMContentLoaded', () => {

    let container = document.getElementById("pixelContainer");

    let button16 = document.getElementById("option1")
    let button32 = document.getElementById("option2")
    let button64 = document.getElementById("option3")
    let button100 = document.getElementById("option4")

    let blackColor = "black";

    let canvasSize ="16";

    function populateCanvas(size, className) {
        container.innerHTML = '';
    
        let numPixels = size * size;
        for (let pixels = 1; pixels <= numPixels; pixels++) {
            let div = document.createElement("div");
    
            div.className = className;
    
            container.appendChild(div);
        }
    
        let pixColoring = document.getElementsByClassName(className);
    
        Array.from(pixColoring).forEach(function(pixel) {
            let basePageColor = pixel.style.backgroundColor;
    
            pixel.addEventListener('mouseover', () => {
                if (pixel.style.backgroundColor === basePageColor) {
                    pixel.style.backgroundColor = blackColor;
                }
            });
        });
    }
    
    button16.addEventListener('click', () => {
        canvasSize = "16";
        populateCanvas(canvasSize, "pix");
    });
    
    button32.addEventListener('click', () => {
        canvasSize = "32";
        populateCanvas(canvasSize, "pix2");
    });
    
    button64.addEventListener('click', () => {
        canvasSize = "64";
        populateCanvas(canvasSize, "pix3");
    });
    
    button100.addEventListener('click', () => {
        canvasSize = "100";
        populateCanvas(canvasSize, "pix4");
    });

    populateCanvas(canvasSize, "pix");
    
});