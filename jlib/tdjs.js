/*$("li").click(function(){
    $(this).css({
        color:"gray",
        textDecoration:"line-through"
    });
});
$("h1").css("color","yellow");*/
//--------using class----------
// check off specific todo by clicking -----
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Click on x to delete ToDo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});
//for creating the new ToDo----
$("input[type='text'").on("keypress",function(){
    if(event.which===13){
        //grabbing the new elemet from input
        var intext=$(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+intext+"</li>");

    }
});
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});