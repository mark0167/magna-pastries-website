// Magna Pastries V6 Script


// WhatsApp Order Function

function orderNow(){

const phone = "251988678989";


const message =
"Hello Magna Pastries! I would like to order cakes, pastries or desserts.";


const whatsappLink =
"https://wa.me/" + phone +
"?text=" + encodeURIComponent(message);


window.open(whatsappLink, "_blank");


}





// Mobile Menu

function toggleMenu(){

const nav = document.getElementById("nav");

nav.classList.toggle("active");

}





// Close menu after clicking navigation links

document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{

document.getElementById("nav")
.classList.remove("active");

});


});







// Smooth appearance animation

const elements =
document.querySelectorAll(
"section, .card, .why div"
);



elements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(35px)";

element.style.transition="all .8s ease";

});





function revealElements(){


elements.forEach(element=>{


const position =
element.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


}



window.addEventListener(
"scroll",
revealElements
);


revealElements();







// Automatic copyright year

const year =
new Date().getFullYear();


const footer =
document.querySelector("footer p:nth-child(3)");



if(footer){

footer.textContent =
"© " + year + " Magna Pastries";

}
