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
			  "aboutus.htm",      "../aboutus.htm",      "About The SSCNC",        "About The SSCNC",
			  "",                 "SSCNC Activities",    "SSCNC Activities",      "",
              "regional2012.htm", "../regional2012.htm", "2012 SSCNC Regional Info",  "2012 Regional Info",
			  "",                 "SSCNC ORGANIZATION",  "SSCNC ORGANIZATION",      "",
			  "rescue.htm",       "../rescue.htm",       "Re-Home (aka: Rescue)",  "Re-Home (aka: Rescue)",
			  "legislation.htm",  "../legislation.htm",  "Legislative Activities", "Legislative Activities",
			  "links.htm",        "../links.htm",        "SSCNC Revealant Links",     "Links",
			   "",    "SSCNC EVENTS",        "SSCNC EVENTS",             ""
			];
			
$about_links = new Array();
$about_links = [
			  "schnauzers.htm",   "../schnauzers.htm",   "The Standard Schnauzer", "The Standard Schnauzer",
			  "breedinfo.htm",    "../breedinfo.htm",    "Standard Schnauzer Breed Information",     "Breed Information",
			  "sscnclibrary.htm", "../sscnclibrary.htm", "The SSCNC Library",      "The SSCNC Library"
			   ];
// activity links
$act_links	= new Array();
$act_links = [	 
			  "conformation.htm", "../conformation.htm", "Conformation Showing", "Conformation Showing",
			  "obedience.php",    "../obedience.php",    "Obedience Trials",     "Obedience Trials",
			  "rally.htm",        "../rally.htm",        "Rally Trials",         "Rally Trials",
			  "agility.htm",      "../agility.htm",      "Agility Trials",       "Agility Trials",
			  "tracking.htm",     "../tracking.htm",     "Tracking",             "Tracking",
			  "k9nose.htm",       "../k9nose.htm",       "K9 Nose Work",         "K9 Nose Work",
			  "herding.htm",      "../herding.htm",      "Herding",              "Herding",
			  "people_events.htm","../people_events.htm","SSCNC People Events",  "SSCNC People Events"
			];
			
// SSCNC Activities
$org_links = new Array();
$org_links = [ 
			  "history.htm",         "../history.htm",         "SSCNC Club History",       "SSCNC Club History",
			  "officers.htm",        "../officers.htm",        "Officers and Contacts",    "Officers and Contacts",
			  "norcal_breeders.htm", "../norcal_breeders.htm", "Northern California Standard Schnauzer Breeders",  "SSCNC Breeders",
			  "membership.htm",      "../membership.htm",      "SSCNC Membership Information", "Membership Information",
			  "stripper.htm",        "../stripper.htm",        "The Stripper Newsletter",  "The Stripper Newsletter",
			  "mary_hudson.htm",     "../mary_hudson.htm",     "Mary Hudson Award",        "Mary Hudson Award"
			];

// SSCNC Events			
$event_links = new Array();
$event_links = [ 
			"events.php",          "../events.php",         "Past Events",        "Past Events",
			"title_earners_2011.htm",  "../title_earners_2011.htm",  "2011 Title Earners", "2011 Title Earners",
			"brags2012.htm",       "../brags2012.htm",      "2012 Brags &amp; Boasts",     "2012 Brags &amp; Boasts",
			"calendar.htm",        "../calendar.htm",       "Calendar - Jan to June 2012", "Calendar - Jan to June 2012"
			];

/*
		"grooming_2010.htm",   "../grooming_2010.htm",   "Grooming Day 2010",  "Grooming Day 2010",
		"regional10_results.htm",   "../regional10_results.htm",   "2010 SSCNC Regional Results",  "2010 Regional Results",
		"schnauzerwalk.htm",   "../schnauzerwalk.htm",   "Schnauzer Walk",     "Schnauzer Walk",
		"caninecpr.htm",       "../caninecpr.htm",       "Canine CPR",         "Canine CPR",
		"specialty_2011.htm",  "../specialty_2011.htm",  "2011 Specialty",     "2011 Specialty",
		"ss_walk_2011.htm",    "../ss_walk_2011.htm",    "2011 SS Walk",       "2011 SS Walk",
 */
$m0   = '<ul><li>';
// 1. SSCNC Home Page
$m1   = '<ul><li><a href="' + $m1_links[$k+0]   + '" title="' + $m1_links[2]  + '">' + $m1_links[3]  + '</a></li>';
// 2. About schnauzers
$m2  = '<li><h2 ' + $style + '>' + $m1_links[$k+5]  + '</h2>' + "\n";
// flyout of 3 links for About schnauzers
$m21  =     '<ul><li><a href="'   + $about_links[$k+0]  + '" title="' + $about_links[2] + '">' + $about_links[3] + '</a></li>';
$m22  =         '<li><a href="'   + $about_links[$k+4] + '" title="' + $about_links[6] + '">' + $about_links[7]  + '</a></li>';
$m23  =         '<li><a href="'   + $about_links[$k+8] + '" title="' + $about_links[10] + '">' + $about_links[11] + '</a></li>';
$m24  =     '</ul></li>' + "\n";
// 3. About the SSCNC
$m3  =     '<li><a href="'       + $m1_links[$k+8] + '" title="' + $m1_links[10] + '">' + $m1_links[11] + '</a></li>';
// 4. SSCNC Activities
$m4   = '<li><h2 ' + $style + '>'          + $m1_links[$k+13]  + '</h2>' + "\n";
$m41  =     '<ul><li><a href="'   + $act_links[$k+0]  + '" title="' + $act_links[2]  + '">' + $act_links[3]  + '</a></li>';
$m42  =         '<li><a href="'   + $act_links[$k+4]  + '" title="' + $act_links[6]  + '">' + $act_links[7]  + '</a></li>';
$m43  =         '<li><a href="'   + $act_links[$k+8]  + '" title="' + $act_links[10] + '">' + $act_links[11] + '</a></li>';
$m44  =         '<li><a href="'   + $act_links[$k+12] + '" title="' + $act_links[14] + '">' + $act_links[15] + '</a></li>';
$m45  =         '<li><a href="'   + $act_links[$k+16] + '" title="' + $act_links[18] + '">' + $act_links[19] + '</a></li>';
$m46  =         '<li><a href="'   + $act_links[$k+20] + '" title="' + $act_links[22] + '">' + $act_links[23] + '</a></li>';
$m47  =         '<li><a href="'   + $act_links[$k+24] + '" title="' + $act_links[26] + '">' + $act_links[27] + '</a></li>';
$m48  =         '<li><a href="'   + $act_links[$k+28] + '" title="' + $act_links[30] + '">' + $act_links[31] + '</a></li>';
$m49  =     '</ul></li>' + "\n";

// 5. 2012 Regional information
$m5  =     '<li><a href="'       + $m1_links[$k+16] + '" title="' + $m1_links[18] + '">' + $m1_links[19] + '</a></li>';

// 6. SSCNC Organization
$m6   = '<li><h2 ' + $style + '>'          + $m1_links[$k+21]  + '</h2>' + "\n";
$m61  =     '<ul><li><a href="'   + $org_links[$k+0]  + '" title="' + $org_links[2]  + '">' + $org_links[3] + '</a></li>';
$m62  =         '<li><a href="'   + $org_links[$k+4]  + '" title="' + $org_links[6]  + '">' + $org_links[7]  + '</a></li>';
$m63  =         '<li><a href="'   + $org_links[$k+8]  + '" title="' + $org_links[10] + '">' + $org_links[11]  + '</a></li>';
$m64  =         '<li><a href="'   + $org_links[$k+12] + '" title="' + $org_links[14] + '">' + $org_links[15]  + '</a></li>';
$m65  =         '<li><a href="'   + $org_links[$k+16] + '" title="' + $org_links[18] + '">' + $org_links[19]  + '</a></li>';
$m66  =         '<li><a href="'   + $org_links[$k+20] + '" title="' + $org_links[22] + '">' + $org_links[23]  + '</a></li>';
$m67  =     '</ul></li>' + "\n";

// 7. Rescue
$m7  = '<li><a href="'       + $m1_links[$k+24] + '" title="' + $m1_links[26] + '">' + $m1_links[27] + '</a></li>';
// 8. Legislative stuff
$m8  = '<li><a href="'       + $m1_links[$k+28] + '" title="' + $m1_links[30] + '">' + $m1_links[31] + '</a></li>';
// 9. Legislative stuff
$m9  = '<li><a href="'       + $m1_links[$k+32] + '" title="' + $m1_links[34] + '">' + $m1_links[35] + '</a></li>';

// 10. calendar - under Events as of Jan 2012
// $m10  = '<li><a href="'      + $m1_links[$k+36] + '" title="' + $m1_links[38] + '">' + $m1_links[39] + '</a></li>';

// 11. SSCNC Events
$m11   = '<li><h2 ' + $style + '>'          + $m1_links[$k+37]  + '</h2>' + "\n";
$m111  =     '<ul><li><a href="'   + $event_links[$k+0]  + '" title="' + $event_links[2]  + '">' + $event_links[3]  + '</a></li>';
$m112  =         '<li><a href="'   + $event_links[$k+4]  + '" title="' + $event_links[6]  + '">' + $event_links[7]  + '</a></li>';
$m113  =         '<li><a href="'   + $event_links[$k+8]  + '" title="' + $event_links[10] + '">' + $event_links[11] + '</a></li>';
$m114  =         '<li><a href="'   + $event_links[$k+12]  + '" title="' + $event_links[14]  + '">' + $event_links[15] + '</a></li>';
/*
$m112  =         '<li><a href="'   + $event_links[$k+4]  + '" title="' + $event_links[6]  + '">' + $event_links[7]  + '</a></li>';
$m113  =         '<li><a href="'   + $event_links[$k+8]  + '" title="' + $event_links[10] + '">' + $event_links[11] + '</a></li>';
$m114  =         '<li><a href="'   + $event_links[$k+12]  + '" title="' + $event_links[14]  + '">' + $event_links[15] + '</a></li>';
$m115  =         '<li><a href="'   + $event_links[$k+16]  + '" title="' + $event_links[18]  + '">' + $event_links[19] + '</a></li>';
$m116  =         '<li><a href="'   + $event_links[$k+20]  + '" title="' + $event_links[22]  + '">' + $event_links[23] + '</a></li>';
$m117  =         '<li><a href="'   + $event_links[$k+24]  + '" title="' + $event_links[26]  + '">' + $event_links[27] + '</a></li>';
$m118  =         '<li><a href="'   + $event_links[$k+28]  + '" title="' + $event_links[30]  + '">' + $event_links[31] + '</a></li>';
*/
$m119  =     '</ul></li>' + "\n";

$m18 = '</ul></li></ul></li></ul>' + "\n";

document.write( $m0 + $m1 + $m2 + $m21 + $m22 + $m23 + $m24  ); 
document.write( $m3 ); 
document.write( $m4 + $m41 + $m42 + $m43 + $m44 + $m45 + $m46 + $m47 + $m48 + $m49 ); 
document.write( $m5 ); 
document.write( $m6 + $m61 + $m62 + $m63 + $m64 + $m65 + $m66 + $m67 ); 
document.write( $m7 ); 
document.write( $m8 ); 
document.write( $m9 ); 
// document.write( $m10 ); 
document.write( $m11 + $m111 + $m112 + $m113 + $m114 + $m119 ); 

document.write( $m18 ); 

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
