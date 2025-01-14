const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const close = document.querySelector('.close-icon');
    
    burger.addEventListener('click', ()=> {
      nav.classList.add('nav-active');
      burger.classList.add('burger-active');
      close.classList.add('close-icon-active'); 
    });
    
    close.addEventListener('click', ()=>{
      close.classList.remove('close-icon-active');
      nav.classList.remove('nav-active');
      burger.classList.remove('burger-active');
    })
  }
  
  navSlide();