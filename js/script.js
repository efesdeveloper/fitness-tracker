
 
 $(document).ready(function() {
 
 $.getJSON('https://api.myjson.com/bins/1gwnal', function(data) {
        
/* variables */
var n = data.length;

var i = '';//variable for for loop
var days_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];//days names in week

var total_steps = 0;//total steps
var total_steps1 = 0;//total steps Monday
var total_steps2 = 0;//total steps Tuesday
var total_steps3 = 0;//total steps Wednesday
var total_steps4 = 0;//total steps Thursday
var total_steps5 = 0;//total steps Friday

 for (i = 0; i < n; i++) 
 {
   var currentdate =new Date(data[i].timestamp);
   if (currentdate.getDay()==1)
      {
        total_steps1 += data[i].steps;
      }
    else if(currentdate.getDay()==2)
      {
        total_steps2 += data[i].steps;
      }
    else if(currentdate.getDay()==3)
      {
        total_steps3 += data[i].steps;
      }
    else if(currentdate.getDay()==4)
      {
        total_steps4 += data[i].steps;
      }
    else if(currentdate.getDay()==5)
      {
        total_steps5 += data[i].steps;
      }

 }

 total_steps=total_steps1 + total_steps2 +total_steps3 +total_steps4 +total_steps5

 var timeElapsed=parseInt((total_steps  * 0.5 * 0.2).toFixed(0))
 var displayTime=getParsedTime(timeElapsed);

 $("#activity").text(displayTime);
 $("#steps").text(total_steps);
 $("#calories").text( parseInt((total_steps * 0.05).toFixed(0)));

 function getParsedTime(seconds) {
    var totalSeconds = seconds;
    var days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    var hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    var minutes = Math.floor(totalSeconds / 60);
    totalSeconds %= 60;
    return ((days > 0 ? days + 'd ' : '') + (hours > 0 ? hours + 'h ' : '') + minutes + 'min');
}

function getHours(seconds) {
    var totalSeconds = seconds;
    var hours = Math.floor(totalSeconds / 3600);

    return (hours > 0 ? hours + 'h ' : '');
}

$("#monday").click(function () {
    var timeElapsed1=parseInt((total_steps1  * 0.5 ).toFixed(0))
    var displayTime1=getParsedTime(timeElapsed1);

    $("#activity").text(displayTime1);
    $("#steps").text(total_steps1);
    $("#calories").text( parseInt((total_steps1 * 0.05).toFixed(0)));
});

$("#tuesday").click(function () {
    var timeElapsed2=parseInt((total_steps2  * 0.5 ).toFixed(0))
    var displayTime2=getParsedTime(timeElapsed2);

    $("#activity").text(displayTime2);
    $("#steps").text(total_steps2);
    $("#calories").text( parseInt((total_steps2 * 0.05).toFixed(0)));
});

$("#wednesday").click(function () {
    var timeElapsed3=parseInt((total_steps3  * 0.5 ).toFixed(0))
    var displayTime3=getParsedTime(timeElapsed3);

    $("#activity").text(displayTime3);
    $("#steps").text(total_steps3);
    $("#calories").text( parseInt((total_steps3 * 0.05).toFixed(0)));
});

$("#thursday").click(function () {
    var timeElapsed4=parseInt((total_steps4  * 0.5 ).toFixed(0))
    var displayTime4=getParsedTime(timeElapsed4);

    $("#activity").text(displayTime4);
    $("#steps").text(total_steps4);
    $("#calories").text( parseInt((total_steps4 * 0.05).toFixed(0)));
});

$("#friday").click(function () {
    var timeElapsed5=parseInt((total_steps5  * 0.5 ).toFixed(0))
    var displayTime5=getParsedTime(timeElapsed5);

    $("#activity").text(displayTime5);
    $("#steps").text(total_steps5);
    $("#calories").text( parseInt((total_steps5 * 0.05).toFixed(0)));
});




});

 
  
});