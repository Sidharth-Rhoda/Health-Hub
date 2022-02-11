$(document).ready(function(){
   
//#1: Performing using Jquery id selctor
  $("#b2").click(function(){
    $("#pic").slideDown(1000);
  });

  $("#b1").click(function(){
   $("#pic").slideUp(1000);
  });

  $("#b3").click(function(){
   $("#pic").animate({left: '250px',height: '520px', width: '820px'});
  });
 //#2Performing using Jquery Class selctor
  $("#b5").click(function(){
    $(".Head").css("color", "Red");
  });

  //#3 hiding paragarph using Jquery elemnent selector
$("#b6").click(function(){
    $("p").hide();
  });

  //#4 hiding using (this ) selector 

 $("p").click(function(){
    $(this).hide();
  })
 //#5 selector p:first hides the first paragarph similarly p:second hide second paragraph
 $("p").click(function(){
    $("p:second").hide();
  })
 //#6 [href] selector use to select all the elemnt with href atribute
  $("#b7").click(function(){
    $("[href]").hide();
  });
  //#7 1 a[target='_blank']] selector use to select all the elemnt of anchor tag with target value _blank
  $("#b8").click(function(){
    $("a[target='_blank']").hide();
  });
  //#8 a[target!='_blank']] selector use to select all the elemnt of anchor tag with attribute value NOT equal to "_blank"
   $("#b9").click(function(){
    $("a[target!='_blank']").hide();
  });
   //#9 "ul li:first" Selects the first <li> element of the first <ul>
    $("#b10").click(function(){
    $("ul li:first").hide(); 
  });
   //10
    $("#b11").click(function(){
    $("ul li:first-child").hide();
  });

});