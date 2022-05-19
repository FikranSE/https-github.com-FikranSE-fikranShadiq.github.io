const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const listMenu = document.getElementById('list');
const titikJs = document.getElementById('titik-js');

toggleMenu.addEventListener("click",()=>{
    navMenu.classList.toggle("show");
});


titikJs.addEventListener("click",()=>{
    titikJs.classList.toggle("animasi-titik");
});

const menu = document.querySelector('.set-menu');
const isiMenu = document.querySelectorAll('.menu');

menu.addEventListener("click",(e)=>{
    if(e.target.className == 'menu'){
        isiMenu.forEach(function(aMenu){
            aMenu.className = 'menu';
        })
    }
    e.target.classList.add('active');
})






