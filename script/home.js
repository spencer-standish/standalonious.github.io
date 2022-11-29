
//scroll to the id
function scrollToId(element)
{  
const yOffset = -90; 
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({top: y, behavior: 'smooth'});
}

//like the posts
function like(element)
{
    console.log(element)
    console.log(element.classList)
  element.classList.toggle("likedclass") 
}
//close for more details
function less(more1,firstpara){
    firstpara.style.display="none"
    more1.style.display="block"
}
//open for more details
function openMore(firstpara,more1){
    let lessId = document.getElementById("less1")
    firstpara.style.display="block"
    more1.style.display="none"
}