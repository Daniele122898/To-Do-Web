//Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
});

//remove to-do
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
       $(this).remove();
    });
    event.stopPropagation();
});

//Create new To-Do
$("input[type='text']").keypress(function (event) {
    //check if enter
    if(event.which ===13){
        //grabbing text
        let todoText = $(this).val();
        //make sure to not add empty todos
        if(todoText === ""){return;}
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> "+todoText+"</li>")
    }
});

$(".fa-angle-up").click(function () {
   $("input[type='text']").fadeToggle();
});