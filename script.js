// Magna Pastries V5 Script


// WhatsApp Order Button

function orderNow(){

const phone = "251988678989";


const message =
"Hello Magna Pastries! I would like to order cakes, pastries or desserts.";


const url =
"https://wa.me/" + phone +
"?text=" + encodeURIComponent(message);


window.open(url,"_blank");


}





// Mobile Navigation

function toggleMenu(){

const nav = document.getElementById("nav");

nav.classList.toggle("active");

}





// Close menu after clicking link

document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{


document.getElementById("nav")
.classList.remove("active");


});


});







// Simple reveal animation


const sections =
document.querySelectorAll(
"section, .card, .why div"
);



sections.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(30px)";

item.style.transition="all .7s ease";


});





function showSections(){


sections.forEach(item=>{


let position =
item.getBoundingClientRect().top;


if(position < window.innerHeight - 80){


item.style.opacity="1";

item.style.transform="translateY(0)";


}



});


}



window.addEventListener(
"scroll",
showSections
);



showSections();








// Update footer year automatically

const year =
new Date().getFullYear();


const footer =
document.querySelector("footer p:last-child");



if(footer){

footer.textContent =
"© " + year + " Magna Pastries";

}
