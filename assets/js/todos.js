//Get local stored list of items
let todos = [];
window.onload = function () {
    todos = localStorage.getItem("todos");
    console.log(todos);
    if(todos === null || todos ===""){
        todos = [];
    } else {
        todos = todos.split(",");
        if (todos.length > 0) {
            todos.forEach(function (val) {
                $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + val.trim() + "</li>")
            });
        }
    }
};

//Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
});

//remove to-do
$("ul").on("click", "span", function (event) {
    let cont = $(this).parent().text().trim();
    console.log(cont);
    $(this).parent().fadeOut(500, function () {
       $(this).remove();
    });
    event.stopPropagation();
    //remove from local storage
    todos.splice(todos.indexOf(cont), 1);
    localStorage.setItem("todos", todos)
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
        //Save to local storage
        todos.push(todoText.trim());
        localStorage.setItem("todos", todos)
    }
});

$("h1").on("click" ,"i", function () {
   $("input[type='text']").fadeToggle();
    $("h1 i").toggleClass("fa-angle-up");
    $("h1 i").toggleClass("fa-angle-down");
});