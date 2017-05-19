
$(document).ready(function(){
    
		var isCelcius = true, weatherDescription, mainTempCelcius, mainHumidity, windSpeed, weatherIcon;
        $.getJSON("http://ip-api.com/json", function(data){
            var lon = data.lon;
            var lat = data.lat;
            var city = data.city; //works fine till here

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon + "&appid=46af1a7a60d4a9bc27bf81ad71172014", function(data){
            	 weatherDescription = data.weather[0].description;
            	 mainTempCelcius = Math.round(data.main.temp - 273);
            	 mainHumidity = data.main.humidity;
            	 windSpeed = data.wind.speed;
            	 weatherIcon = data.weather[0].icon;
            	
            	document.getElementById("city").innerHTML = "city: " + city;
            	document.getElementById("weather").innerHTML = "weather: " + weatherDescription;
            	document.getElementById("icon").src = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
            	document.getElementById("temperature").innerHTML = "temperature: " + mainTempCelcius + " &deg;C";
            	document.getElementById("humidity").innerHTML = "humidity: " + mainHumidity + "%";
            	document.getElementById("wind").innerHTML = "wind: " + windSpeed + " m/s";
            	           	
            });
        });
    	$('#temperature').css( 'cursor', 'pointer' );
    	
    	$("#temperature").click(function(){
    	var far = parseInt(mainTempCelcius)* 9 / 5 + 32;		
    		if(isCelcius) {	   			
    		document.getElementById("temperature").innerHTML = "temperature: " + far + "&#8457;";
    		isCelcius = false;
    		}
    		else {    			
    		document.getElementById("temperature").innerHTML = "temperature: " + mainTempCelcius + "&deg;C";
    		isCelcius = true;
    	}


    	});
});