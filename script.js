// Magna Pastries Website JavaScript


// WhatsApp Order Function

function orderNow(){

    let phone = "251900000000";

    let message = 
    "Hello Magna Pastries! I would like to order your delicious products.";

    let url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);


    window.open(url, "_blank");

}



// Mobile Menu

function toggleMenu(){

    let nav = document.getElementById("nav");

    nav.classList.toggle("active");

}



// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        document.getElementById("nav")
        .classList.remove("active");


    });


});




// Scroll animation

const elements = document.querySelectorAll(
"section, .product, .review"
);



function reveal(){


elements.forEach(element=>{


let position =
element.getBoundingClientRect().top;


let screen =
window.innerHeight;



if(position < screen - 100){

element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


}




elements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.8s";

});



window.addEventListener(
"scroll",
reveal
);


reveal();
