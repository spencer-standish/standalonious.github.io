
// -----Headers AND Footers ----
$(function () {
    $(".footerclass").load("footer.html");
  });
  $(function () {
    $(".navclass").load("navigation.html");
  });
// ----slide show----
let myImagesArray = [
    'Images/alpack1.jpg',
    'Images/alpak2.jpeg',
    'Images/alpack3.jpeg',
    'Images/alpak4.jpeg',
    'Images/caramelo.webp'
  ];
  
  //make an automatic slide to display the images
  let ImageNumber = 0;
  let difference = myImagesArray.length - 1;
  
  let delay = 2000; 
  
  setInterval('ChangeImages(1)', delay);
  
  function ChangeImages(direction) {
  
    ImageNumber = ImageNumber + direction;
  
    if (ImageNumber > difference) {
      ImageNumber = 0;
    } 
  
    if (ImageNumber < 0) {
      ImageNumber = difference;
    } 
    const changeimage = document.getElementById('slideshow');
    changeimage.src = myImagesArray[ImageNumber];
    
  } //end function
//   --------FAQ-----
  $(document).ready(()=>{
    $('.factslist h2').click( evt => {
        const h2 = evt.currentTarget;

    $(h2).toggleClass("minus");
    if( $(h2).attr("class") !== "minus"){
        $(h2).next().hide();
    }
     else {
        $(h2).next().show();
    }
        evt.preventDefault();
     
    })
    
})