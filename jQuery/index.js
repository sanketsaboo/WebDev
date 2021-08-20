// $("h1").addClass("margin-50 big-title");
// $("button").html("<em>Hey</em>");
// $("a").attr("href", "https://www.yahoo.com")
$("h1").click(function(){
  $("h1").css("color","purple");
});

// $("button").click(function(){
//   $("h1").slideToggle();//best for dropdown
// });
$("button").on("click",function(){
  $("h1").animate({opacity: 0.5});//can be used only for numeric values.
});

$("input").keypress(function(event){
  console.log(event.key);
});

$(document).keypress(function(event){
console.log(event.key);
  $("h1").text(event.key);
});
//instead of click ,keypress we can use on
$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
});
$("h1").before("<button>New</button>")
