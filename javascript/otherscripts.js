function copyright()
{
var todayis = new Date();
document.write( '<div style="font-size: 10px; border: 1px solid gray; margin: 20px 0 0 110px; padding: 12px 0 4px 12px; width: 500px; height: 30px;">' );
document.write( 'Copyright &copy; 2009-' + todayis.getFullYear() + ' Standard Schnauzer Club of Southern CA.');
document.write( '<br />This web site was designed and created by <a href="mailto:royfdvorak23@comcast.net">Roy F. Dvorak</a>' );
document.write( '</div>' );
return true;
}


function showpagename( $pageName )
{
	document.getElementById( 'pagename' ).innerHTML = $pageName;
}


function randomPicture()
{
$pics = new Array();
$pics = [
breck_113.jpg,
breck_136.jpg,
breck_148.jpg,
coral_113.jpg,
coral_142.jpg, 
crabhermit_99.jpg,
crabyellowfiddle_120.jpg,
fish_113.jpg,
fish_97.jpg,
jellyfish_100.jpg,
jellyfish_113.jpg,
sandcastle_107.jpg,
sandcastle_130.jpg,
sandpawprints_125.jpg,
sandpawprints_140.jpg,
seagullflying_143.jpg,
seagullstanding_126.jpg,
seashells_113.jpg,
seashell_109.jpg,
seaturtlegreen_113.jpg,
starfishmulti_113.jpg,
starfishpurple_113.jpg,
ventura_103.jpg,
ventura_112.jpg
];

low   = 1;
high  = 25;
$picIndex  = Math.floor( Math.random() * high - low + 1 );
$thisPic = $pics[ $picIndex ];
$height1 = $thisPic.split( '_' );
$height2 = $height1[1].split( '.' );
$picHeight = $height2[0];
$imageTag  = '<img src="images/150_wide_pics/' + $thisPic + '" height="' + $picHeight + '" width="150" align="right" alt="' + $height1[0] + '" />' + "\n";

document.write( $imageTag );
//return( $imageTag );

}


function randomColor()
{
low  = 1;
high = 255;
red   = Math.floor( Math.random() * high - low +1 );
green = Math.floor( Math.random() * high - low +1 );
blue  = Math.floor( Math.random() * high - low +1 );

xred  = red.toString(16);
if ( xred.length == 1 )
	xred = '0' + xred;

xgreen = green.toString(16);
if ( xgreen.length == 1 )
	xgreen = '0' + xgreen;

xblue = blue.toString(16);
if ( xblue.length == 1 )
	xblue = '0' + xblue;

var color = '#' + xred + xgreen + xblue;
return( color )
}
