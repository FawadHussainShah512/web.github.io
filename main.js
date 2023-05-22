// toggle icon navbar

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


// scroll sections active link


let sections=document.querySelectorAll('section');
let navLinks=document.querySelector('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
       let top=window.scrollY;
       let offset=sec.offsetTop-150;
       let height=sec.offsetHeight;
       let id=sec.getAttribute('id');

       if(top>=offset && top<offset+height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
        });
    };
    });




// sticky navbar

let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

// remove toggle icon and navbar when click navbar llnk(scroll)

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


// scroll reveal


ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});


ScrollReveal().reveal('.home-content, .heading,.description-container h2',{origin:'top'});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});

ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

// typed js

const typed=new Typed('.multiple-text',
{
    strings:['Frontend Developer','Mobile App Developer','Content Writer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      subject: document.getElementById("subject").value,
      number: document.getElementById("number").value,
    };
  
    const serviceID = "service_sb7bhog";
    const templateID = "template_pmvkhhi";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("number").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }