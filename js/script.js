
/////////////////////// FRONT PAGE ///////////////////////

setInterval(function(){
    var $his = $("#historie");
    var $spr = $("#sprog");
    var $pol = $("#politik");
    var $kul = $("#kultur");

    var $en = $("#en");
    var $to = $("#to");
    var $tre = $("#tre");
    var $fire = $("#fire");

    if($his.not(":hover")) {
       $en.css("display", "none");
    }  
    if($his.is(":hover")) {
       $en.css("display", "block");
    }

    if($spr.not(":hover")) {
       $to.css("display", "none");
    }
    if($spr.is(":hover")) {
       $to.css("display", "block");
    }
    if($pol.not(":hover")) {
       $tre.css("display", "none");
    }
    if($pol.is(":hover")) {
       $tre.css("display", "block");
    }
    if($kul.not(":hover")) {
       $fire.css("display", "none");
    }
    if($kul.is(":hover")) {
       $fire.css("display", "block");
    }
})

// GO BACK

function goBack() {
    window.history.back();
}
