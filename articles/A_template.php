<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head> 
<title> A_template file </title> 
 
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /> 
<meta http-equiv="Content-Style-Type" content="text/css" /> 
<meta name="keywords"    content="Northern California, Standard Schnauzer Club of Northern California"  />
<meta name="description" content="SSCNC- Standard Schnauzer Club of Northern California - Conformation"  />

<link href="/css/sscnc1.css" rel="stylesheet" type="text/css" />
<link href="/css/home.css"   rel="stylesheet" type="text/css" />

<script type="text/javascript" src="/javascript/bannerbox.js"></script>
<script type="text/javascript" src="/javascript/home_js.js"></script>

</head>

<body>
<!--
	The main container box includes:
	- banner box on top - this is the width of the container box
	- navigation box on the left - javascript generates the nav buttons
	- content box on the right  - this contains the page contents
-->
<center>
<div id="main-container" class="maincontainer">
	<!--
		The banner box contains 3 images.  In case these images change,
		then change the PHP script that includes them.
	-->
	<div id="banner-box"  class="bannerbox">
		<script type="text/javascript">bannerbox();</script>
	</div>

	<div id="content-box" class="contentbox">
		<h1 class="h1style">Page Header</h1>
		<div class="maintext">
			<p>
			paragraph content
			</p>
		</div>
		<hr />
		<div id="container-bottom" class="containerbottom">
			<script type="text/javascript">footerbox();</script>
		</div>
	</div>
	
	<div id="navigation-box" class="navigationbox">
		<div id="menu">
			<script type="text/javascript">showMenu_m( 1 );</script>
			<script type="text/javascript">showMenu_n( 1 );</script>
		</div>
	</div>
</div>	<!-- end the maincontainer box -->
</center>

</body>
</html>