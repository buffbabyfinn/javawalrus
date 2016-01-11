$(function(){
  $("h1").click(function(){
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });
  $("p").dblclick(function(){
    alert("This is a paragraph.");
  });
  $("img").dblclick(function(){
    alert("This is an image.");
  });
  $("h2").click(function(){
    prompt("Have you pooped today?");
    prompt("If yes, was it enjoyable?");
    alert("Wash your damn hands!");
  });
  $(".dogrus").hover(function(){
    alert("Not a walrus!");
  });
})
