$('document').ready(function(){
    $(".ostoskori-menu").toggleClass('visibility');
    $(".ostoskori").click(() => {
        $(".ostoskori-menu").toggleClass('visibility');
    });
});