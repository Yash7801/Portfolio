/*========================SHOW MENU============================ */



/*========================MENU SHOW=============================*/


/*========================MENU HIDDEN=============================*/


/*========================REMOVE MENU MOBILE=============================*/


/*=====================SCROLL SECTIONS ACTIVE LINKS===================== */


/*========================CHANGE BACKGROUND HEADER============================ */
function scrollHeader(){
    const header=document.getElementById('header');
    if(this.scrollY>=80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);


/*========================SHOW SCROLL UP============================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);


/*=============== SHOW / HIDE MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}


document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});



/*=========================ABOUT SECTION=============================*/
const tabs=document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]'); 

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const  target= document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('tab__active');
        })
        target.classList.add('tab__active');
        tabs.forEach((tab)=>{
            tab.classList.remove('tab__active');
        })
        tab.classList.add('tab__active');
    })
})


/*=========================CONTACT SECTION=============================*/

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error_message');

const sendEmail=(e)=>{
    e.preventDefault();

    //check if the fields are filled
    if(contactName.value==='' || contactEmail.value==='' || contactSubject.value==='' || contactMessage.value===''){
        errorMessage.textContent='Please fill in all the fields.';
        errorMessage.style.color='red';
        return;
    }
    else{
        ///serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_jie7iqh','template_br2xg1e','#contact-form','Q9PJ3ZehurEr1sQgW').then(()=>{
           errorMessage.classList.add('color-first');
           errorMessage.textContent="Message sent ✅" ;
           errorMessage.scrollIntoView({behavior:"smooth"});

           setTimeout(()=>{
            errorMessage.textContent="";
           }, 5000);
        },(err)=>{
            alert('OOPS! SOMETHING HAS FAILED...', err);
            errorMessage.scrollIntoView({behavior:"smooth"});
        });

        //clear the input fields
        contactName.value='';
        contactEmail.value='';
        contactSubject.value='';
        contactMessage.value=''; 
    }
}

contactForm.addEventListener('submit',sendEmail);