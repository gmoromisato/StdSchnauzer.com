<?php
/*
 * Source file: headtag.php
 * This file will post the DOCTYPE and <head> tags to the web page.
 * Input parameters:
 *	title - text for the title tags
 * 	page  - string (usually one word) that is used as the ID for
 *		  the page title text.
 */

function headtag( $title, $page )
{
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title> <?php echo $title; ?> </title>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta name="description" content="SSCNC contact page" />
<meta name="keywords" content="Standard Schnauzers, Northern California Standard Schnauzer Club" />

<link rel="StyleSheet" href="sscnc.css" type="text/css" />

<script src="jquery.js" type="text/javascript"></script>

<!--
	The style tag below generates a CSS element that is an ID parameter
	defined by the argument in the $page input parameter.  The resulting
	style sheet tab looks something like:
	"<style type="text/css">#calendar{font-weight: bold; color: #03c;}
	 </style>"
	For this example the $page parameter contained the string 'calendar'.
-->
<style type="text/css">#<?php echo $page; ?>{font-weight: bold; color: #03c;}</style>

</head>

<?php
}
?>

