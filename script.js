// Magna Pastries Website Functions


// WhatsApp Order Button

function orderNow(){

    let phone = "251988678989";

    let message = 
    "Hello Magna Pastries! I would like to order cakes or pastries.";

    let whatsappLink =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);


    window.open(whatsappLink, "_blank");

}




// Mobile Navigation Menu

function toggleMenu(){

    let menu = document.getElementById("nav");

    menu.classList.toggle("active");

}




// Close menu after clicking a link

let links = document.querySelectorAll("nav a");


links.forEach(link=>{

    link.addEventListener("click",()=>{

        document.getElementById("nav")
        .classList.remove("active");

    });

});





// Scroll animation

let items = document.querySelectorAll(
"section, .product"
);



items.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="0.8s";

});





function showAnimation(){


items.forEach(item=>{


let position =
item.getBoundingClientRect().top;


let height =
window.innerHeight;



if(position < height - 100){

item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


}




window.addEventListener(
"scroll",
showAnimation
);


showAnimation();
