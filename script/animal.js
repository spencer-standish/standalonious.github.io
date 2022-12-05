"use strict";
$(document).ready( () => {
 
    // create an array of the slide images
    let imageCache = [];
    $("#slides img").each( (index, img) => {    
        const image = new Image();
        image.src = $(img).attr("src");
        image.title = $(img).attr("alt");
        imageCache[index] = image;
    });
    // start slide show
    let imageCounter = 0;
    setInterval( () => {
        // $("#caption").fadeOut(1000);
        $("#class00").fadeOut(500,
            () => {
                imageCounter = (imageCounter + 1) %
                               imageCache.length;
                const nextImage = imageCache[imageCounter];
                $("#class00").attr("src",
                    nextImage.src).fadeIn(500);
                // $("#caption").text(nextImage.title).fadeIn(1000);        
            }); // end fadeOut() method
    },
    3000);      // end setInterval() method
    
});

let flag = 0;
window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && flag == 0) {
     flag = 1;
     alert("Thank you for your valuable time!");
    }
   }

