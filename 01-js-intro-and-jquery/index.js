$(document).ready(function(){
      $("div").fadeIn("slow");
  	  $("#search").click(function(){
     	 try{
  	         $.get("http://bootcamp.aws.af.cm/welcome/Boris",function(data){
    	       	    $("div").text(data.response)
             })
       }catch(err){
  	         $("div").text("server error");
  	            $("section").css("color","#FF0000");}
        $("div").css("color","#FF0000"); });
  	    $(".alias").focus(); 
        
        $("#search").click(function(){ 
        var p = $(".alias").val();  
        $.get("https://api.spotify.com/v1/search?q="+p+"&type=album",function(data){
            $(".albums").text("")
            for (var i = 0; i < 100; i++) {
            $(".albums").append("<img src="+data.albums.items[i].images[2].url+" />");   
            $(".albums").append(data.albums.items[i].album_type+"......");      
            $(".albums").append("title: "+"<b>"+data.albums.items[i].name+"</b>"+"......");
            var address = data.albums.items[i].external_urls.spotify;
            $(".albums").append("<a href="+address+">Listen Now</a><br>")       
      
          }
            })})
  	       
  	})