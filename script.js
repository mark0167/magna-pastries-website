// Magna Pastries Website Interactions


// WhatsApp Order Button

function orderNow(){

    let phoneNumber = "251900000000";

    let message = "Hello Magna Pastries! I would like to place an order.";

    let whatsappURL = 
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

}



// Smooth navigation animation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        let section = document.querySelector(
            this.getAttribute("href")
        );


        section.scrollIntoView({

            behavior:"smooth"

        });

    });

});




// Reveal animation when scrolling

const cards = document.querySelectorAll(".card");


window.addEventListener("scroll", ()=>{


cards.forEach(card=>{


let position = card.getBoundingClientRect().top;

let screen = window.innerHeight;


if(position < screen - 100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}


});


});




// Initial card animation setup

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.6s";

});
