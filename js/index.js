// scrollspy

$('body').scrollspy({target: 'menu-navegacion'});
$('body').scrollspy({target: 'footer'});

//scroll suavizado

let classParam;

let scroll = (classParam) => {
    return $(classParam).on('click', function(event){
        if(this.has != ""){
            event.preventDefault();
    
            const hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            })
        }
    });
}

scroll('#menu-navegacion a');
scroll('#footer a');
