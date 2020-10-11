function validate() {
    
    var a, b, c ,d;
    a = Number(document.getElementById('select2').value);
    b = Number(document.getElementById('select3').value);
    d = Number(document.getElementById('inputnumber').value);
    c = (a + b )* d;
    document.getElementById('res').value = c + 'Rwf';
}
$(document).ready(function () {
    $(".paragraph1").hide();

    $(".photo1").hover(function () {
        $(this).stop().animate({ opacity: .2 }, 200);
        $(".paragraph1").fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 2 }, 500);
        $(".paragraph1").fadeOut();
    });

    $(".paragraph2").hide();
    $(".photo2").hover(function () {
        $(this).stop().animate({ opacity: .2 }, 200);
        $(".paragraph2").fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 2 }, 500);
        $(".paragraph2").fadeOut();
    });

    $(".paragraph3").hide();
    $(".photo3").hover(function () {
        $(this).stop().animate({ opacity: .2 }, 200);
        $(".paragraph3").fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 2 }, 500);
        $(".paragraph3").fadeOut();
    });

    $(".paragraph4").hide();
    $(".photo4").hover(function () {
        $(this).stop().animate({ opacity: .2 }, 200);
        $(".paragraph4").fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 2 }, 500);
        $(".paragraph4").fadeOut();
    });

    $(".paragraph5").hide();
    $(".photo5").hover(function () {
        $(this).stop().animate({ opacity: .2 }, 200);
        $(".paragraph5").fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 2 }, 500);
        $(".paragraph5").fadeOut();
    });

    $(".paragraph6").hide();
    $(".photo6").hover(function () {
        $(this).stop().animate({ opacity: .2 }, 200);
        $(".paragraph6").fadeIn();
    }, function () {
        $(this).stop().animate({ opacity: 2 }, 500);
        $(".paragraph6").fadeOut();
    });
});
