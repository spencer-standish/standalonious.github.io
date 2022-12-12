//  container 
document.getElementById(
    "container").addEventListener(
    "mouseover", function(){
        over("container")
    });

document.getElementById(
    "container").addEventListener(
    "mouseout", function(){
        out("container")
    });

//  Image1 
document.getElementById(
    "content-image-id1").addEventListener(
    "mouseover", function(){
        over("content-image-id1")
    });

document.getElementById(
    "content-image-id1").addEventListener(
    "mouseout", function(){
        out("content-image-id1")
    });
    
//  Image2 
document.getElementById(
    "content-image-id2").addEventListener(
    "mouseover", function(){
        over("content-image-id2")
    });

document.getElementById(
    "content-image-id2").addEventListener(
    "mouseout", function(){
        out("content-image-id2")
    });

//  Image3 
document.getElementById(
    "content-image-id3").addEventListener(
    "mouseover", function(){
        over("content-image-id3");
    });

document.getElementById(
    "content-image-id3").addEventListener(
    "mouseout", function(){
        out("content-image-id3")
    });


function over(a) {
    document.getElementById(
        a).classList.add("zoom");
}

function out(b) {
     document.getElementById(
        b).classList.remove("zoom");
}
