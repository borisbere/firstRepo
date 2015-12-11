$(document).ready(function(){
      $(".search").click(function(){
        var city = $("#city").val();
        var province = $("#province").val();
        $.ajax({
              url:"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%E2%80%8B%2C%20"+province+"%E2%80%8B%22)%20and%20u=%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
              success: function(data){
                var weather = data.query.results.channel;
                $(".res").css("display","block");
                $(".results, .resTem, .subRes, .resIco, .resUni, .resPre, .resHum, .resWin").text("");
                $(".results").append(weather.location.city+", ");
                $(".results").append(weather.location.country+"<br>");
                $(".results").append(weather.item.condition.date+"<br>");
                $(".results").append(weather.item.condition.text+"<br><br>");
                var code = weather.item.condition.code;

                $(".resIco").append("<img src=\http://l.yimg.com/a/i/us/we/52/"+code+".gif\ />");
                $(".resTem").append(weather.item.condition.temp);
                $(".resUni").append("°"+weather.units.temperature);
                $(".resPre").append("Pressure: "+weather.atmosphere.pressure+" "+weather.units.pressure);
                $(".resHum").append("Humidity: "+weather.atmosphere.humidity+"%");
                $(".resWin").append("Wind: "+weather.wind.speed+" "+weather.units.speed);
              }

              })
      })
})      