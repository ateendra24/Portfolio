$(function(){
   $("a").click(function(evt){
       var link = $(this).attr("href");
       setTimeout(function() {
           window.location.href = link;
       }, 200);
   });
});

function animate_start(){
   var element = document.getElementById("an_box");
   element.classList.add("start");
   
   const myTimeout = setTimeout(animate_remove, 3000);
   function animate_remove() {
      element.classList.remove("start")
    }
}