// Magna Pastries Final Website Script


// WhatsApp Order System

function orderNow(){

    let phone = "251988678989";

    let message = 
    "Hello Magna Pastries! I would like to order cakes, pastries or desserts.";

    let link =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);


    window.open(link, "_blank");

}





// Mobile Menu

function toggleMenu(){

    let nav = document.getElementById("nav");

    nav.classList.toggle("active");

}





// Close menu after selecting a page

document.querySelectorAll("nav a").forEach(item=>{


    item.addEventListener("click",()=>{


        document.getElementById("nav")
        .classList.remove("active");


    });


});







// Scroll reveal animation

const revealItems = document.querySelectorAll(
"section, .product, .features div, .steps div, .review-card"
);



revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="all .8s ease";

});





function revealOnScroll(){


revealItems.forEach(item=>{


let position =
item.getBoundingClientRect().top;


let screen =
window.innerHeight;



if(position < screen - 100){


item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


}




window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();





// Current year automatically updates footer

let year = new Date().getFullYear();


let footerText = document.querySelector("footer p:last-child");


if(footerText){

footerText.innerHTML =
"© " + year + " Magna Pastries";

}
