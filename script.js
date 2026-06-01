//let menuIcon=document.querySelector('#menu-icon');
//let navbar= document.querySelector('.navbar');
//
//menuIcon.onClick =()=>{
//    menuIcon.classList.toggle('bx-x');
//    navbar.classList.toggle('active');
//}
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
const contactBtn = document.querySelector('.gradient-btn');

contactBtn.onclick = () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
};
//EmailJs setup
// emailjs.init("YuAZ73VVHXxa6Gz5z");
//
//const SERVICE_ID = "service_0444stg";
//const TEMPLATE_ID = "template_mm2yz98";

emailjs.init("YuAZ73VVHXxa6Gz5z");

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "service_0444stg",
        "template_mm2yz98",
        this
    )
    .then(() => alert("Message sent!"))
    .catch(() => alert("Failed!"));
});