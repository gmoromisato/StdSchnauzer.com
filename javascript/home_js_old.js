function showMenu_m( $k )
{
/*
 * The m1_links array contains the information for the navigation links.
 * The elements of the array are in groups of 3:
 * If $i is an index, then:
 *		$i + 0 = web page file
 *		$i + 1 = title that appears when the mouse rolls over the link
 *				 - could also be text for <h2> tag when there are no links
 *		$i + 2 = link text - what the user clicks on
 * 
 * Be careful when attempting menu changes.  Preserve the levels of 'ul' 
 * and 'li' tags.
 */
$style = 'style="background-image: url(images/expandbutton2.gif);"';
 
$m1_links = new Array();
$m1_links = [ "index.htm",        "../index.htm",        "SSCNC Home Page",        "SSCNC Home Page",
			  "",                 "About Schnauzers",    "About Schnauzers",       "",
			  "schnauzers.htm",   "../schnauzers.htm",   "The Standard Schnauzer", "The Standard Schnauzer",
			  "breedinfo.htm",    "../breedinfo.htm",    "Standard Schnauzer Breed Information",     "Breed Information",
			  "sscnclibrary.htm", "../sscnclibrary.htm", "The SSCNC Library",      "The SSCNC Library",
			  "aboutus.htm",      "../aboutus.htm",      "About The SSCNC",        "About The SSCNC",
			  "rescue.htm",       "../rescue.htm",       "Re-Home (aka: Rescue)",  "Re-Home (aka: Rescue)",
			  "legislation.htm",  "../legislation.htm",  "Legislative Activities", "Legislative Activities",
			  "links.htm",        "../links.htm",        "SSCNC Revealant Links",     "Links",
              "regional10_results.htm",   "../regional10_results.htm",   "2010 SSCNC Regional Results",  "2010 Regional Results",
			  "calendar.htm",     "../calendar.htm",     "Calendar - July to Dec 2010", "Calendar - July to Dec 2010"
			];

$o1_links = new Array();
$o1_links = [ "",                 "Events",              "Events",           "",
              "regional10_results.htm",   "../regional10_results.htm",   "2010 SSCNC Regional Results",  "2010 Regional Results",
			  "",                 "SSCNC Activities",    "SSCNC Activities",      "",
			  "conformation.htm", "../conformation.htm", "Conformation Showing", "Conformation Showing",
			  "obedience.php",    "../obedience.php",    "Obedience Trials",     "Obedience Trials",
			  "rally.htm",        "../rally.htm",        "Rally Trials",         "Rally Trials",
			  "agility.htm",      "../agility.htm",      "Agility Trials",       "Agility Trials",
			  "tracking.htm",     "../tracking.htm",     "Tracking",             "Tracking",
			  "k9nose.htm",       "../k9nose.htm",       "K9 Nose Work",         "K9 Nose Work",
			  "herding.htm",      "../herding.htm",      "Herding",              "Herding",
			  "people_events.htm","../people_events.htm","SSCNC People Events",  "SSCNC People Events"
		    ];

$n1_links = new Array();
$n1_links = [ "",                    "SSCNC ORGANIZATION",     "SSCNC ORGANIZATION",       "",
			  "history.htm",         "../history.htm",         "SSCNC Club History",       "SSCNC Club History",
			  "officers.htm",        "../officers.htm",        "Officers and Contacts",    "Officers and Contacts",
			  "norcal_breeders.htm", "../norcal_breeders.htm", "Northern California Standard Schnauzer Breeders",  "SSCNC Breeders",
			  "membership.htm",      "../membership.htm",      "SSCNC Membership Information", "Membership Information",
			  "stripper.htm",        "../stripper.htm",        "The Stripper Newsletter",  "The Stripper Newsletter",
			  "mary_hudson.htm",     "../mary_hudson.htm",     "Mary Hudson Award",        "Mary Hudson Award"
			];
			
$e1_links = new Array();
$e1_links = [ "",                    "SSCNC EVENTS",           "SSCNC EVENTS",       "",
			  "grooming_2010.htm",   "../grooming_2010.htm",   "Grooming Day 2010",  "Grooming Day 2010",
			  "events.php",          "../events.php",          "Past Events",        "Past Events"
			];

$m1   = '<ul><li>';
$m2   = '<ul><li><a href="' + $m1_links[$k+0]   + '" title="' + $m1_links[2]  + '">' + $m1_links[3]  + '</a></li>';
$m13  = '<li><h2 ' + $style + '>' + $m1_links[$k+5]  + '</h2>' + "\n";
$m14  =     '<ul><li><a href="'   + $m1_links[$k+8]  + '" title="' + $m1_links[10] + '">' + $m1_links[11] + '</a></li>';
$m15  =     '<li><a href="'       + $m1_links[$k+12] + '" title="' + $m1_links[14] + '">' + $m1_links[15]  + '</a></li>';
$m16  =     '<li><a href="'       + $m1_links[$k+16] + '" title="' + $m1_links[18] + '">' + $m1_links[19] + '</a></li>';
$m17  =  '</ul></li>' + "\n";

$o3 = '<li><h2 ' + $style + '>'          + $o1_links[$k+9]  + '</h2>' + "\n";
$o4 =     '<ul><li><a href="' + $o1_links[$k+12] + '" title="' + $o1_links[14] + '">' + $o1_links[15] + '</a></li>';
$o5 =         '<li><a href="' + $o1_links[$k+16] + '" title="' + $o1_links[18] + '">' + $o1_links[19] + '</a></li>';
$o6 =         '<li><a href="' + $o1_links[$k+20] + '" title="' + $o1_links[22] + '">' + $o1_links[23] + '</a></li>';
$o7 =         '<li><a href="' + $o1_links[$k+24] + '" title="' + $o1_links[26] + '">' + $o1_links[27] + '</a></li>';
$o8 =         '<li><a href="' + $o1_links[$k+28] + '" title="' + $o1_links[30] + '">' + $o1_links[31] + '</a></li>';
$o9 =         '<li><a href="' + $o1_links[$k+32] + '" title="' + $o1_links[34] + '">' + $o1_links[35] + '</a></li>';
$o10 =        '<li><a href="' + $o1_links[$k+36] + '" title="' + $o1_links[38] + '">' + $o1_links[39] + '</a></li>';
$o11 =        '<li><a href="' + $o1_links[$k+40] + '" title="' + $o1_links[42] + '">' + $o1_links[43] + '</a></li>';
$o12 =   '</ul></li>' + "\n";

$m4   =		'<li><a href="' + $m1_links[$k+20]  + '" title="' + $m1_links[22] + '">' + $m1_links[23] + '</a></li>';
$m5   =		'<li><a href="' + $m1_links[$k+24]  + '" title="' + $m1_links[26] + '">' + $m1_links[27] + '</a></li>';
$m6   =		'<li><a href="' + $m1_links[$k+28]  + '" title="' + $m1_links[30] + '">' + $m1_links[31] + '</a></li>';
$m7   =		'<li><a href="' + $m1_links[$k+32]  + '" title="' + $m1_links[34] + '">' + $m1_links[35] + '</a></li>';
$m8   =		'<li><a href="' + $m1_links[$k+36]  + '" title="' + $m1_links[38] + '">' + $m1_links[39] + '</a></li>';
$m9   =		'<li><a href="' + $m1_links[$k+40]  + '" title="' + $m1_links[42] + '">' + $m1_links[43] + '</a></li>';

$n3 = '<li><h2 ' + $style + '>'          + $n1_links[$k+1]  + '</h2>' + "\n";
$n4 =     '<ul><li><a href="' + $n1_links[$k+4]  + '" title="' + $n1_links[6]  + '">' + $n1_links[7] + '</a></li>';
$n5 =     	  '<li><a href="' + $n1_links[$k+8]  + '" title="' + $n1_links[10] + '">' + $n1_links[11] + '</a></li>';
$n6 =     	  '<li><a href="' + $n1_links[$k+12] + '" title="' + $n1_links[14] + '">' + $n1_links[15] + '</a></li>';
$n7 =         '<li><a href="' + $n1_links[$k+16] + '" title="' + $n1_links[18] + '">' + $n1_links[19] + '</a></li>';
$n8 =         '<li><a href="' + $n1_links[$k+20] + '" title="' + $n1_links[22] + '">' + $n1_links[23] + '</a></li>';
$n9 =         '<li><a href="' + $n1_links[$k+24] + '" title="' + $n1_links[26] + '">' + $n1_links[27] + '</a></li>';
$n10 =   '</ul></li>' + "\n";

$e1 = '<li><h2 ' + $style + '>' + $e1_links[$k+1]  + '</h2>' + "\n";
$e2 =     '<ul style="z-index: 41;"><li><a href="'   + $e1_links[$k+4]  + '" title="' + $e1_links[6]  + '">' + $e1_links[7] + '</a></li>';
$e3 =     	  '<li><a href="'   + $e1_links[$k+8]  + '" title="' + $e1_links[10] + '">' + $e1_links[11] + '</a></li>';
$e4 =   '</ul></li>' + "\n";

$m18 = '</ul></li></ul></li></ul>' + "\n";

document.write( $m1 + $m2 + $m13 + $m14 + $m15 + $m16 + $m17 + $m4 ); 
document.write( $o3 + $o4  + $o5 + $o6 + $o7 + $o8 + $o9 + $o10 + $o11 + $o12 );
document.write( $m8   );
document.write( $n3 + $n4  + $n5 + $n6 + $n7 + $n8 + $n9 + $n10 );
document.write( $m5 + $m6 + $m7 + $m9  );
document.write( $e1 + $e2  + $e3 + $e4 );
document.write( $m18 ); 

/*
$o1 = '<ul><li>' + "\n";		// <h2>'      + $o1_links[$k+1]  + '</h2>' + "\n";
$o2 = '<ul><li><a href="' + $o1_links[$k+4]  + '" title="' + $o1_links[6] + '">'  + $o1_links[7] + '</a></li>';
$o3 = '<li><h2 ' + $style + '>'          + $o1_links[$k+9]  + '</h2>' + "\n";
$o4 = '<ul><li><a href="' + $o1_links[$k+12] + '" title="' + $o1_links[14] + '">' + $o1_links[15] + '</a></li>';
$o5 =     '<li><a href="' + $o1_links[$k+16] + '" title="' + $o1_links[18] + '">' + $o1_links[19] + '</a></li>';
$o6 =     '<li><a href="' + $o1_links[$k+20] + '" title="' + $o1_links[22] + '">' + $o1_links[23] + '</a></li>';
$o7 =     '<li><a href="' + $o1_links[$k+24] + '" title="' + $o1_links[26] + '">' + $o1_links[27] + '</a></li>';
$o8 =     '<li><a href="' + $o1_links[$k+28] + '" title="' + $o1_links[30] + '">' + $o1_links[31] + '</a></li>';
$o9 =     '<li><a href="' + $o1_links[$k+32] + '" title="' + $o1_links[34] + '">' + $o1_links[35] + '</a></li>';
$o10 =    '<li><a href="' + $o1_links[$k+36] + '" title="' + $o1_links[38] + '">' + $o1_links[39] + '</a></li>';
$o11 =    '<li><a href="' + $o1_links[$k+40] + '" title="' + $o1_links[42] + '">' + $o1_links[43] + '</a></li>';
$o12 = '</ul></li></ul></li></ul>' + "\n";

// document.write( $o1 + $o2 + $o3 + $o4 + $o5 + $o6 + $o7 + $o8 + $o9 + $o10 + $o11 + $o11 ); 
*/

}

function showMenu_n( $k )
{
$n1_links = new Array();
$n1_links = [ "",                    "SSCNC ORGANIZATION",     "SSCNC ORGANIZATION",       "",
			  "officers.htm",        "../officers.htm",        "Officers and Contacts",    "Officers and Contacts",
			  "norcal_breeders.htm", "../norcal_breeders.htm", "Northern California Standard Schnauzer Breeders",  "SSCNC Breeders",
			  "membership.htm",      "../membership.htm",      "SSCNC Membership Information", "Membership Information"
			];
/*
$m1   = '<ul><li>';
$m2   = '<ul><li><a href="' + $m1_links[$k+0]   + '" title="' + $m1_links[2]  + '">' + $m1_links[3]  + '</a></li>';
$m13  = '<li><h2 ' + $style + '>'          + $m1_links[$k+5]  + '</h2>' + "\n";

 */
$n1 = 	'<ul><li>' + "\n";
$n2 = 		'<ul><li><h2 ' + $style + '>' + $n1_links[$k+1] + '</h2>' + "\n";
$n3 =			'<ul>'
$n4 =     			'<li><a href="'   + $n1_links[$k+4]  + '" title="' + $n1_links[6]  + '">' + $n1_links[7]  + '</a></li>';
$n5 =     			'<li><a href="'   + $n1_links[$k+8]  + '" title="' + $n1_links[10] + '">' + $n1_links[11] + '</a></li>';
$n6 =     			'<li><a href="'   + $n1_links[$k+12] + '" title="' + $n1_links[14] + '">' + $n1_links[15] + '</a></li>';
$n7 = 	        '</ul></li></ul>';

$n11_0 = 	'</ul>';
$n11_1 =	'</li>';
$n11_2 =	'</ul>';
//$n11_3 = '</li></ul>' + "\n";
$n11 = $n11_0 + $n11_1 + $n11_2 ;
// document.write(  $n2 + $n4 + $n5 + $n6 + $n7 ); 

}
