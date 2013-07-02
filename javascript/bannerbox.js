function bannerbox()
{ 
/*
 * source file: bannerbox.js
 */
	document.write( '<div style="float:left;  z-index:21;"><img src="/images/banners/grapes_fade.jpg" width="303" height="132" alt="grapes" /></div>' );
	document.write( '<div style="float:left;  z-index:29;"><img src="/images/banners/sscnc_cal.gif" width="101" height="132" alt="head study" /></div>' );
	document.write( '<div style="float:right; z-index:22;"><img src="/images/banners/fade_bridge.jpg" width="492" height="132" alt="gg-bridge" /></div>' );
}

function footerbox()
{ 
var copydate = new Date();
var copyyear = copydate.getFullYear();

document.write( 'Copyright &copy; 2005 - ' + copyyear + ' ' );
document.write( 'Standard Schnauzer Club of Northern California &nbsp;-&nbsp; SSCNC' );
document.write( '<br>The SSCNC web site was last updated on September 21, 2012.' );
document.write( '<br />This site was created by <A href="mailto:RoyFDvorak23@comcast.net?subject=Northern_Cal_SS"> Roy F. Dvorak</a><br /> ');

}