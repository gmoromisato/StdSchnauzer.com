var flg=0;
var fs="2px";
var bg="white";	// background color

nameofMon = new Array("January","February","March","April","May","June","July",
"August","September","October","November","December");

nameofDay = new Array("Sun","Mon","Tue","Wed","Thu","Fri ","Sat");

function getBgn()
{
pdy   = new Date();		// today
today = pdy.getDate();		// the day of the month
pmo   = pdy.getMonth();		// present month - 0 based index
pyr   = pdy.getFullYear();		// present year - 4 digits
thisMonth = pmo;


   yr1 = (pmo==0 ? pyr-1 : pyr ); // last month's year
   mo  = (pmo==0 ? 11 : pmo-1);  // 'pmo' is the current month index

yr1 = pyr;

   //bgn=new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
   //document.write('<TABLE BORDER=0><TR><TD VALIGN=TOP>');
   //Calendar();           // Send last month to screen
   //document.write('</TD><TD VALIGN=TOP>');


   document.write( '<TABLE BORDER="0" cellpadding="4" cellspacing="4"><TR><TD VALIGN=TOP>' );
/*
 * print out the current month.  We do not care what the index is because
 * no checking needs to be performed.
 */
   yr = pyr;                // present year
   mo = pmo;                // present month
   bgn  = new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
   Calendar();           // Send this month to screen
   document.write('</TD><TD VALIGN=TOP>');
   

  /*
   * if the current month index is 10 (or november), then the next month is
   * December and the next month is into the next year.
   */
   if ( pmo == 10 )
   {
   	yr1 = pyr; // next month's year, which is still the current year
mo = 11; 
      bgn=new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
      Calendar();           // Send next month to screen
      document.write('</TD><TD VALIGN=TOP>');

	yr1 = pyr + 1;
mo = 0;
      bgn=new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
      Calendar();           // Send next month to screen
      document.write('</TD><TD VALIGN=TOP>');
   }

  /*
   * if the current month index is 11 (or december), then the next month is
   * January and the next month is into the next year.
   */
   if ( pmo == 11 )
   {
   	yr1 = pyr+1; // next month's year, which is still the current year
      mo = 0;   // next month   
      bgn=new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
      Calendar();           // Send next month to screen
      document.write('</TD><TD VALIGN=TOP>');

	yr1 = pyr + 1;
	mo = 1;
      bgn=new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
      Calendar();           // Send next month to screen
      document.write('</TD><TD VALIGN=TOP>');
   }


  /*
   * if the current month index is 9 or less (January thru October), then 
   * the next month is simple to process
   */
   if ( pmo < 10 )
   {
   	yr1 = pyr; // next month's year, which is still the current year
      mo = pmo+1;   // next month   
      bgn=new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
      Calendar();           // Send next month to screen
      document.write('</TD><TD VALIGN=TOP>');

	mo = pmo+2;
      bgn=new Date( nameofMon[mo]+ " 1," + yr1 ); // assign to date
      Calendar();           // Send next month to screen
      document.write('</TD><TD VALIGN=TOP>');
   }

   document.write('</TD></TR></TABLE>'); // Finish up


} // end getBgn *********************************************************


function Calendar()
{
   dy=bgn.getDay();
   yr=eval(yr1);
   d = "312831303130313130313031";
   if ( yr/4 == Math.floor(yr/4) )
   {
 	d = d.substring(0,2) + "29" + d.substring(4,d.length);
   }
   pos=(mo*2);
   ld=eval(d.substring(pos,pos+2));

   document.write( '<TABLE BORDER="2" bordercolor="blue" '
+ " BGCOLOR='" + bg + "'><TR><TD ALIGN=CENTER COLSPAN=7>"
+ '<FONT SIZE="2px" color="purple"><B>' + nameofMon[mo] + " " + yr 
+ "</B></FONT></TD></TR><TR><TR>");
   //
   // write the days of the week first
   //
   for (var i=0; i<7; i++ )
   {
	document.write( '<TD ALIGN=CENTER>' + '<FONT SIZE="2px" color="blue">' + 
	nameofDay[i] + '</FONT></TD>' );
   }

   document.write("</TR><TR>");
   ctr=0;
   for ( var i=0; i<7; i++ )
   {
	if (i < dy )
	{
	   document.write( '<TD ALIGN=CENTER>' 
		+ '<img src="images/bluepaw2.jpg" width="16" height="14"></TD>' );
	}
	else
	{
	   ctr++;
	   if ( (ctr == today) && (thisMonth == mo) )
	   {
		document.write("<TD ALIGN='center' bgcolor='purple'>" + '<FONT SIZE="2px" color="red">' + 
		ctr + "</FONT></TD>");
	   }
	   else
	   {
		document.write("<TD ALIGN=CENTER>" + '<FONT SIZE="2px">' + 
		ctr + "</FONT></TD>");
	   }
	}
   }

   document.write("</TR><TR>");
   while ( ctr < ld )
   {
	for ( var i=0; i<7; i++ )
	{
	   ctr++;
	   if ( ctr > ld )
	   {
	      document.write( '<TD ALIGN=CENTER>' 
		+ '<img src="images/bluepaw2.jpg" width="16" height="14"></TD>' );
	   }
	   else if ( (ctr == today) && (thisMonth == mo) )
	   {
		document.write("<TD ALIGN='center' bgcolor='purple'>" + '<FONT SIZE="2px" color="red"><b>' + 
		ctr + "</b></FONT></TD>");
	   }
	   else
	   {
		document.write("<TD ALIGN=CENTER>" + '<FONT SIZE="2px">' + 
		ctr + "</FONT></TD>");
	   }
	}
	document.write("</TR><TR>");
   }

   document.write("</TR></TABLE>");
}
