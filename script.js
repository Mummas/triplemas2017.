//get the navigation links
const navlinks=document.querySelectorAll('nav ul li')
//add event listener to navigation links
navlinks.forEach((links)=>{
    links.addEventListener('click',()=>{
        //toggle the drop down menu
        links.classList.toggle('active');
    });
});