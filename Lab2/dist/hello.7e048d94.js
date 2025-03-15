var today = new Date();
var hourNow = today.getHours();
var minutes = today.getMinutes();
var period = hourNow >= 12 ? 'PM' : 'AM';
var hour12 = hourNow % 12 || 12;
var greeting;
if (hourNow > 18) greeting = 'Good evening';
else if (hourNow > 12) greeting = 'Good afternoon';
else if (hourNow > 0) greeting = 'Good morning';
else greeting = 'Welcome';
document.write(greeting + "<br>");
document.write("<br>");
document.write("The time is " + hour12 + ":");
document.write(minutes.toString().padStart(2, '0') + " " + period);

//# sourceMappingURL=hello.7e048d94.js.map
