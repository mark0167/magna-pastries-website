// Magna Pastries V3 Website Script


// WhatsApp Order

function orderNow(){

    const phone = "251988678989";

    const message =
    "Hello Magna Pastries! I would like to place an order.";

    const whatsapp =
    "https://wa.me/" + phone +
    "?text=" + encodeURIComponent(message);


    window.open(whatsapp, "_blank");

}




// Mobile Menu

function toggleMenu(){

    const nav = document.getElementById("nav");

    nav.classList.toggle("active");

}





// Close mobile menu after selecting a section

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        document.getElementById("nav")
        .classList.remove("active");

    });

});







// Scroll animation

const animatedItems = document.querySelectorAll(
"section, .product, .features div, .steps div"
);



animatedItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(35px)";

    item.style.transition="all .7s ease";

});





function reveal(){


animatedItems.forEach(item=>{


const position =
item.getBoundingClientRect().top;


const screen =
window.innerHeight;



if(position < screen - 80){

item.style.opacity="1";

item.style.transform="translateY(0)";

}


});


}




window.addEventListener(
"scroll",
reveal
);


reveal();







// Update footer year automatically

const year =
new Date().getFullYear();


const footer =
document.querySelector("footer p:last-child");



if(footer){

footer.textContent =
"© " + year + " Magna Pastries";

}
