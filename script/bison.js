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
    facts[0] = "The groups that bison create are called obstinacies, gangs, or herds.";
    facts[1] = "Hunch on its back is nothing but a bunch of muscles. The hunch also helps bison to move into the snowpack.";
    facts[2] = "Bison is an excellent jumper, able to jump up to 6 feet off the ground.";
    facts[3] = "Along with jumping, bison are excellent in running and swimming.";
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