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
    facts[0] = "Polar bears are marine mammals because they spend many months of the year at sea. However, they are the only living marine mammals with powerful, large limbs and feet that allow them to cover kilometers on foot and run on land.";
    facts[1] = "A Polar bear's fur is hollow and reflects light, so it is not actually white. Their fur is also water repellent and oily. The bears can shake themselves dry after a swim.";
    facts[2] = "Female Polar bears are known to be very good mothers and may adopt other cubs.";
    facts[3] = "A Polar bear is strong enough to kill an animal by giving it one blow with its paw.";
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