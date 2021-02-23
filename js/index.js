
$(document).ready(function(){


let aboutOffsetScroll = $("#about").offset().top;
let workOffset = $("#work").offset().top;

$(window).scroll(function(){

let uScroll= $(window).scrollTop();


if(uScroll > aboutOffsetScroll - 50 )
{

$("#main-nav").css("backgroundColor", "rgba(0,0,0,0.7)");
$("#btnUp").fadeIn(500);

}

else
{
  $("#main-nav").css("backgroundColor", "transparent");
  $("#btnUp").fadeOut(500);
}

if(uScroll >workOffset -200 )
{
  startCounter();

}

})

$("#btnUp").click(function(){

  $("html,body").animate({scrollTop:0},3000);

})


$("a[href^='#']").click(function(){

  let aHref = $(this).attr("href");
  let sectionOffset= $(aHref).offset().top;
 
  $("html,body").animate({scrollTop:sectionOffset},1000);
  
})



$("#sideBarToggle").click(function(){

let colorBoxWidth = $("#colorBox").innerWidth();
if($("#sideBar").css("left") == "0px")
{
  $("#sideBar").animate({left:`-${colorBoxWidth}` } , 1000)
}

else{

  $("#sideBar").animate({left:"0px" } , 1000)
}

})


let colorBox = $(".color-item")
for (let i = 0; i < colorBox . length; i++) {

  let red = Math.round(Math.random()*255);
  let green = Math.round(Math.random()*255);
  let blue = Math.round(Math.random()*255);

  colorBox .eq(i).css("backgroundColor" , `rgb(${red},${green},${blue})`);
}



colorBox .click(function(){

  let wishColor= $(this).css("backgroundColor");
  $(".change,p.h2").css("backgroundColor", wishColor);
})







$("#loading").fadeOut(2000,function(){

  $("body").css("overflow","auto")
})





function counterUp(element , limit , speed){
  let counter = 0;

let x  = setInterval(() => {
  counter ++;
  $(element).html(counter);

  if(counter == limit){


clearInterval(x);

}

  
}, limit);



}

function startCounter(){


  counterUp("#ProjectNumber", 50, 100);
  counterUp("#clintNumber", 20, 70);
  counterUp("#codeNumber", 90, 100);
  counterUp("#coffeeNumber", 50, 100);
  

}



function printDate(){

  let fullDate = new Date();
 $("#hourseContainer").text(fullDate.getHours());
 $("#MinutesContainer").text(fullDate.getMinutes());
 $("#secondsContainer").text(fullDate.getSeconds());
}

setInterval(printDate,1000);






















})




















