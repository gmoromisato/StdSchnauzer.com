var day_description = "the closing date for the 2010 SSCNC Regional Specialty";
var place = " at Alameda County Fairgrounds ";
var day_before = "the 2010 SSCNC Regional  Specialty. ";

var today = new Date();
var year = today.getYear();
if ((navigator.appName == "Microsoft Internet Explorer") && (year < 2000))
   year="19" + today.getYear();

if (navigator.appName == "Netscape")
   year= 1900 + today.getYear();

var date = new Date("October 22, 2010 ");
var diff = date.getTime() - today.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

// document.write("<center>")
document.write( "<font style=\"font-weight: bold\; font-family: Arial\; font-size: 11px\">" ); 

if (days > 1)
{
   document.write("There are " + (days+1) + " days until " + day_description );
   // document.write("<BR>" );
   document.write( place + " ");
   document.write("<br>There are "+(days+18)+" days until " + day_before );
}
else if (days == 1)
   document.write("Tommorrow is " + day_before  + "!");
else if (days == 0)
   document.write("Today is " + day_before + "!");
else if (days == -1)
   document.write("It's " + day_description + "!");
else if (days < -1)
   document.write(day_description + " was " + ((days+1)*-1) + (days < -2 ? " days" : " day") + " ago this year!");

document.write( "</font>" );
document.write( "</center>" );
