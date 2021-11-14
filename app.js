// https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    /*
    https://stackoverflow.com/questions/46929157/foreach-on-queryselectorall-not-working-in-recent-microsoft-browsers
    */
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click',()=>{
        //toggle nav class to make it visible
        nav.classList.toggle('nav-active');
        // animate links
        // moving the texts along with the side bar menu so, the transition time and pattern will be same.
        navLinks.forEach((link,index)=>{
            // console.log(index);
            if(link.style.animation){
                // if animation exists then remove it
                link.style.animation="";
            }else{
                // if no animation there then add the animation
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +1}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

    
}

const app = ()=>{
    // invoke all functions here
    navSlide();
}

app();