previousID = '';

function changeBGcolor( selectedID )
{
var thisOne = window.document.getElementById( selectedID );
	thisOne.style.backgroundColor = 'red';
	if ( previousID != '' )
	{
		window.document.getElementById( previousID ).style.backgroundColor = '';
		previousID = selectedID;
	}
	else
		previousID = selectedID;
		
	return true;
}



function generateNavigation()
{
$n1 = '<h5 class="h55"><a class="navList" id="n1" onclick="changeBGcolor( \'n1\' );" href="home2.htm" target="content" title="Welcome to the Standard Schnauzer Club of America">Welcome To ...</a></h5>';
			
$nE = '<h5 class="h55"><b>Breed Information</b></h5><ul class="navList">';
$n2 = '<li><a id="n2" onclick="changeBGcolor( \'n2\' );" href="aboutss.htm" target="content" title="About Standard Schnauzers">About the SS</a></li>';

$n3 = '<li><a id="n3" onclick="changeBGcolor( \'n3\' );" href="faq.htm" target="content" title="Frequently Asked Questions">FAQs</a></li>';

$n4 = '<li><a id="n4" onclick="changeBGcolor( \'n4\' );" href="history.html" target="content" title="History of the SS">History</a></li>';

$n5 = '<li><a id="n5" onclick="changeBGcolor( \'n5\' );" href="standard.html" target="content" title="Breed Standard of the SS">Breed Standard</a></li>';

$n6 = '<li><a id="n6" onclick="changeBGcolor( \'n6\' );" href="companion.html" target="content" title="Standard Schnauzer as a Companion">Companion</a></li>';

$n7 = '<li><a id="n7" onclick="changeBGcolor( \'n7\' );" href="competitor.html" target="content" title="Competitor">Competitor</a></li>';

$n8 = '<li><a id="n8" onclick="changeBGcolor( \'n8\' );" href="helper.html" target="content" title="Helpers">Helper</a></li>';
$ulend = '</ul>';

document.write( $n1 + $nE + $n2 + $n3 + $n4 + $n5 + $n6 + $n7 + $n8 + $ulend );

$iS = '<h5 class="h55"><b>SSCA Information</b></h5><ul class="navList">';

$i1 = '<li><a id="n9" onclick="changeBGcolor( \'n9\' );" href="new-latenews.htm" target="content" title="Latest Information about things in the SSCA">Latest Information</a></li>';

$i2 = '<li><a id="n10" onclick="changeBGcolor( \'n10\' );" href="aboutssca.html" target="content" title="Governing body and committees of the SSCA">Governing Body</a></li>';

$i3 = '<li><a id="n11" onclick="changeBGcolor( \'n11\' );" href="regionalclubs.html" target="content" title="Regional SS Clubs">Regional Clubs</a></li>';

$i4 = '<li><a id="n13" onclick="changeBGcolor( \'n13\' );" href="rescue.html" target="content" title="Rescue and re-homing">Rescue</a></li>';

$i5 = '<li><a id="n14" onclick="changeBGcolor( \'n14\' );" href="breeders.html" target="content" title="Breeders Referral list">Breeders Reference</a></li>';

$i6 = '<li><a id="n15" onclick="changeBGcolor( \'n15\' );" href="events.html" target="content" title="SSCA Upcoming Events">SSCA Events</a></li>';

$i7 = '<li><a id="n16" onclick="changeBGcolor( \'n16\' );" href="legislation.html" target="content" title="Canine legislative news">Legislative News</a></li>';

$i8 = '<li><a id="n17" onclick="changeBGcolor( \'n17\' );" href="membership.html" target="content" title="SSCA membership information">Member Information</a></li>';

$i9 = '<li><a id="n18" onclick="changeBGcolor( \'n18\' );" href="health.html" target="content" title="Health Committee and Survey Taskforce">Health Survey</a></li>';		
// <!-- <img src="images/blinking_new_button.gif" width="54" height="12" alt="new button" /> -->

document.write(  $iS + $i1 + $i2 + $i3 + $i4 + $i5 + $i6 + $i7 + $i8 + $i9 + $ulend );

$gS = '<h5 class="h55"><b>Goods and Services</b></h5><ul class="navList">';

$g1 = '<li><a id="n20" onclick="changeBGcolor( \'n20\' );" href="publications.html" target="content" title="Publications">Publications</a></li>';

$g2 = '<li><a id="n21" onclick="changeBGcolor( \'n21\' );" href="fundraising.html" target="content" title="Fundraising">Fundraising</a></li>';

document.write( $gS + $g1 + $g2 + $ulend );
}
