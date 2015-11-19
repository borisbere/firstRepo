$(document).ready(function(){
    $("p").fadeIn("slow");
    $(".alias").focus();
    $("button").click(function{ 
    	$.get('http://bootcamp.aws.af.cm/welcome/yourname', function(data){
    		$("p").text(data)         
    	} )
        })
    })