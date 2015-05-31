/*	MENU

	A menu entry is an Object with the following fields:

	name: The entry to display to the user (in the menu or in H2)
	src: The URL
	title: The link title attribute

	A submenu is an Object with the following fields:

	name: The entry to display to the user
	submenu: An array of menu entries.

*/

var $menu = [
	{	name: "SSCNC Home Page",		title: "SSCNC Home Page",				url: "index.htm" },

	{	name: "About Schnauzers",		submenu: [
		{	name: "The Standard Schnauzer",		title: "The Standard Schnauzer",				url:"schnauzers.htm" },
		{	name: "Breed Information",			title: "Standard Schnauzer Breed Information",	url:"breedinfo.htm" },
		{	name: "The SSCNC Library",			title: "The SSCNC Library",						url:"sscnclibrary.htm" },
		]},

	{	name: "About The SSCNC",		title: "About The SSCNC",				url: "aboutus.htm" },

	{	name: "2015 Specialties Info",		title: "2015 SSCNC Specialties Info",		url: "regional2015.htm" },

	{	name: "SSCNC ORGANIZATION",		submenu: [
		{	name: "SSCNC Club History",			title: "SSCNC Club History",					url:"history.htm" },
		{	name: "Officers and Contacts",		title: "Officers and Contacts",					url:"officers.htm" },
		{	name: "SSCNC Breeders",				title: "Northern California Standard Schnauzer Breeders",					url:"norcal_breeders.htm" },
		{	name: "Membership Information",		title: "SSCNC Membership Information",			url:"membership.htm" },
		{	name: "The Stripper Newsletter",	title: "The Stripper Newsletter",				url:"stripper.htm" },
		{	name: "Mary Hudson Award",			title: "Mary Hudson Award",						url:"mary_hudson.htm" },
		]},

	{	name: "Re-Home (aka: Rescue)",	title: "Re-Home (aka: Rescue)",			url: "rescue.htm" },
	{	name: "Legislative Activities",	title: "Legislative Activities",		url: "legislation.htm" },
	{	name: "Links",					title: "SSCNC Relevant Links",			url: "links.htm" },

	{	name: "UPCOMING SSCNC EVENTS",	submenu: [
		{	name: "Past Events",				title: "Past Events",							url:"events.php" },
		{	name: "Calendar",					title: "Calendar",								url:"calendar.htm" },
		]},
	];

var $style = 'style="background-image: url(images/expandbutton2.gif);"';

function showMenu_m( $k )
	{
	var i;

	//	Output outermost list
	//
	//	GPM: not sure why we need an extra level of nesting, but that's
	//	the way the CSS expects it to be and I don't want to mess with it.

	document.write("<ul><li><ul>");

	//	Loop over menu structure and output HTML

	for (i = 0; i < $menu.length; i++)
		outputMenuEntry($menu[i]);

	//	Close

	document.write("</ul></li></ul>\n");
	}

function outputMenuEntry( entry )
	{
	var i;

	//	If this is a submenu then we need to output a list.

	if (entry.submenu != null)
		{
		document.write('<li><h2 ' + $style + '>' + entry.name + '</h2>' + '\n<ul>');

		for (i = 0; i < entry.submenu.length; i++)
			outputMenuEntry(entry.submenu[i]);

		document.write('</ul></li>\n');
		}

	//	Otherwise we expect this to be a normal menu item.
	//	We output an LI tag with a link.

	else
		{
		document.write('<li><a href="' + entry.url + '" title="' + entry.title + '">' + entry.name + '</a></li>');
		}
	}

function showMenu_n( $k )
	{
	}
