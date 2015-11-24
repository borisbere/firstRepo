$(document).ready(function(){
$("div").fadeIn("slow");
  	  $("button").click(function(){
     	  try{
  	         $.get("http://bootcamp.aws.af.cm/welcome/Boris",function(response){
  	       	    $("div").text(JSON.stringify(response).substring(13,27))})
  	      }catch(err){
  	         $("div").text("server error");
  	            $("section").css("color","#FF0000");}
        $("div").css("color","#FF0000"); });
  	    $(".alias").focus();
        $.get("http://ws.spotify.com/search/1/album?q=Rolling%20Stones",function(data){
  	    	$(".albums").text(JSON.stringify(data));/*  -----THIS FUNCTION DOESN'T WORK------*/
        /* 
        var xmlhttp = new XMLHttpRequest()  
        var arr = json.parse(xmlhttp.responseText); 
        xmlhttp.open("GET", "http://ws.spotify.com/search/1/album?q=Rolling%20Stones", true);
        xmlhttp.send();
       */;
  	    });
  	})