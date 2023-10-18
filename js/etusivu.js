$('document').ready(function(){
    let currentImage = 0;
    $('.edellinen').click((e) => {
        e.preventDefault();
        previousImage();
    });
    $('.seuraava').click((e) => {
        e.preventDefault();
        nextImage();
    });
    let images = [
        {
            otsikko: "Talon Erikoinen",
            teksti: "Uusi hyvä pizza nami nami",
            kuva: "img/talonerikoinen.jpg"
        },
        {
            otsikko: "Kanakebab",
            teksti: "Kanaa, kebabbia ja leipää",
            kuva: "img/kanakebab.jpg"
        }
    ];
    function drawImage(index){
        $('.uutuudet-img').css("background-image","url("+images[index].kuva+")");
        $('.uutuudet-teksti h3').html(images[index].otsikko);
        $('.uutuudet-teksti p').html(images[index].teksti);
    }
    drawImage(0);

    const interval = setInterval(function() {
        nextImage
    }, 5000);

    function nextImage(){
        if(currentImage === images.length-1){
            currentImage = 0;
        }else{
            currentImage += 1;
        }
        drawImage(currentImage);
    }

    function previousImage(){
        if(currentImage === 0){
            currentImage = images.length-1;
        }else{
            currentImage -= 1;
        }
        drawImage(currentImage);
    }
});
/*let x = 3;
function button1() {
    x += 1;
}
function button2() {
    x -= 1;
}
if (x > 2) {
    y = "Talon Erikoinen";
} else if (x > 1) {
    y = "Talosta Erikoinen";
}
document.write(y);*/