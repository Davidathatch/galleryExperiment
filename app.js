var images = document.getElementsByTagName("IMG");
var closeButton = document.getElementsByTagName("I")[0];
var galleryOpened;
closeButton.style.display = "none";

function enterGallery(e) {
        var currentTarget = e.currentTarget;
        galleryOpened = currentTarget;
        for(let y=0; y<images.length; y++){
            if(images[y] !== e.currentTarget){
                images[y].classList.add('unfocussed');
            }
            e.currentTarget.classList.add('image-focussed');
             document.getElementsByClassName('gallery')[0].classList.add('gallery-showcase');
              document.getElementsByTagName('BODY')[0].classList.add('body-showcase');
              closeButton.style.display = 'inline-block';
}
}

function quitGallery() {
    for(let y=0; y<images.length; y++){
            if(images[y] !== galleryOpened){
                images[y].classList.remove('unfocussed');
            }
            document.getElementsByClassName('gallery')[0].classList.remove('gallery-showcase');
              document.getElementsByTagName('BODY')[0].classList.remove('body-showcase');
              closeButton.classList.remove('close-reveal');              
            closeButton.style.display = "none";
   ;  }
}

for(let x=0; x<images.length; x++){
    images[x].addEventListener("click", enterGallery);
}
closeButton.addEventListener("click", quitGallery);