$(document).ready(function(){
    var scale=false;
    $("#selected").on('click',function(){
        $(".menu").toggle();
        if (scale==false){
            $(".arrow").css("transform","scale(1, -1)");
            scale=true;
        }
        else {
            $(".arrow").css("transform","scale(1, 1)");
            scale=false;
        }
        
    });
    var li = $(".menu ul").children("li");
        li.on('click',function(){
            $("#selected span").text(" ");
            $("#selected span").append(li.text);
        });
    });



