const btn =document.querySelector('.btn');
btn.addEventListener('click', () => {
    if (document.body.style.background != "#333" ){
        document.querySelector('body').classList.toggle('bg-dark');
        document.querySelector('.btn').classList.toggle('bg-btn-light');
        
    }
    else
    {
        document.body.removeProperty('bg-dark');
        btn.removeProperty('bg-btn-light');
    }       
});


