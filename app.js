const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav-inks');
    const navLiNKS = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLiNKS.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1.5}s`;
            }
            //console.log(index / 7 + 1.5);

        });

        //Burger Animaation
        burger.classList,toggle('toggle');
    });



}

navSlide();