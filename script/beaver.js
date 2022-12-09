$(function(){
    $(".navclass").load("navigation.html");
 } );
 $(function(){
    $(".footerclass").load("footer.html");
 } );

// function that brings you to top of page
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

// function that alerts a random fun fact
/*alertRandomFunFact = function() {
let facts = new Array();
    facts[0] = "Teeth of beavers never stop growing, so they gnaw on trees in order to prevent teeth from becoming too long.";
    facts[1] = "Beavers use their tails for swimming as well as flapping the water in order to scare predators away.";
    facts[2] = "Beavers have transparent eyelids, serving as underwater glasses and helping them see clearly under the water.";
    facts[3] = "Cases are known, when beavers' and muskrats' families share one lodge together!";
    let rand = Math.floor(Math.random()*facts.length);
    window.alert(facts[rand]);
}*/

const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget)
    openPopup(popup)
  })
})

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active')
  popups.forEach(popup => {
    closePopup(popup)
  })
})

closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup')
    closePopup(popup)
  })
})

function openPopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
  overlay.classList.add('active')
}

function closePopup(popup) {
  if (popup == null) return
  popup.classList.remove('active')
  overlay.classList.remove('active')
}