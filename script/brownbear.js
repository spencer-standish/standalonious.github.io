"use strict";

$(function () {
  $("#accordion").accordion();
});

//declaring an array of images
let myImagesArray = [
  "Images/brownbear/slideshow/p1.jpg",
  "Images/brownbear/slideshow/p2.jpg",
  "Images/brownbear/slideshow/p3.jpg",
  "Images/brownbear/slideshow/p4.jpg",
  "Images/brownbear/slideshow/p5.jpg",
  "Images/brownbear/slideshow/p6.jpg",
  "Images/brownbear/slideshow/p7.jpg",
  "Images/brownbear/slideshow/p8.jpg",
  "Images/brownbear/slideshow/p9.jpg",
  "Images/brownbear/slideshow/p10.jpg",
];

//making an automatic slide to display the images
let ImageNumber = 0;
let difference = myImagesArray.length - 1;
let delay = 1500; //milliseconds
setInterval("ChangeImages(1)", delay);

function ChangeImages(direction) {
  ImageNumber = ImageNumber + direction;

  if (ImageNumber > difference) {
    //begin inner first if
    ImageNumber = 0;
  } //end inner first if

  if (ImageNumber < 0) {
    //begin inner second if
    ImageNumber = difference;
  } //end inner second if

  document.getElementById("slideshow").src = myImagesArray[ImageNumber];
}
