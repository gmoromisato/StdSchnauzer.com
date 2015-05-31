/*
 * June 2010
 * Email setup for the SSCNC organization
 *
 *
 * Each array is composed of 3 parameters:
 *		1. email address
 *		2. person's name
 *		3. person's position in the organization
 *
 *	<script type="text/javascript">doEmails('regionalchair');</script>
 */
 
function doEmails( $position )
{
$emails    = new Object();
$emails['president']      = new Array( 'sscnckim@icloud.com',        'Kim Studley',     'SSCNC%20President' );
// $emails['newsletter']     = new Array( 'NUNZIRR@PEOPLEPC.COM',       'Rene Nunzir', 'SSCNC%newsletter' );
$emails['vicepresident1'] = new Array( 'janvilcon@yahoo.com',        'Janis Conway',   'SSCNC%20First%20Vice%20President' );
$emails['vicepresident2'] = new Array( 'ladiletti@aol.com',          'Linda Adiletti',     'SSCNC%20Second%20Vice%20President'  );
$emails['treasurer']      = new Array( 'dmmiche@pacbell.net',        'John Michelmore', 'SSCNC%20Treasurer' );
$emails['secretary']      = new Array( 'sscncmaryw@gmail.com',       'Mary Wood', 'SSCNC%20Secretary' );
$emails['membersatlarge1']= new Array( 'psemple19@gmail.com',        'Paul Semple',     'SSCNC%20Members-At-Large' );
$emails['membersatlarge2']= new Array( 'dmmiche@pacbell.net',        'Dottie Michelmore',    'SSCNC%20Members-At-Large' );
$emails['rescue']         = new Array( 'dmmiche@pacbell.net',        'Dottie Michelmore','SSCNC%20Rescue' );
$emails['stripper']       = new Array( 'NUNZIRR@PEOPLEPC.COM',       'Rene Nunzir', 'SSCNC%20Stripper%20Newsletter' );
$emails['membership']     = new Array( 'demljust@pacbell.net',       'Mary Lou Just',   'SSCNC%20Membership' );
$emails['referral']       = new Array( 'dmmiche@pacbell.net',        'Dotti Michelmore','Breeder%20Referral' );
$emails['webmaster']      = new Array( 'royfdvorak23@comcast.net',   'Roy F. Dvorak',   'SSCNC%20Web%20Dude' );

/*
$emails['_sscnc']      = new Array( 'MJWEIGAND@comcast.net',      'Mary Jo Weigand', 'SSCNC%20Secretary' );
$emails['_sscnc']     = new Array( 'demljust@pacbell.net',       'Don Just',        'SSCNC%20Newsletter' );
$emails['_sscnc'] = new Array( 'demljust@pacbell.net',       'Mary Lou Just',   'SSCNC%20First%20Vice%20President' );
$emails['_sscnc'] = new Array( 'kimstudley@me.com',          'Kim Studley',     'SSCNC%20Second%20Vice%20President'  );
$emails['_sscnc']= new Array( 'cdah@comcast.net',           'Kim Lemke',       'SSCNC%20Members-At-Large' );
$emails['sscnc_'] = new Array( 'demljust@pacbell.net',     'Mary Lou Just',   'SSCNC%20Membership' );

 * Email addresses for the 2010 regional
 */
$emails['regional_xxx_chair']    = new Array( 'ladiletti@aol.com',     'Linda Adiletti',  'SSCNC%202010%20Regional%20Chair'  );
$emails['regional_chair']    = new Array( 'kimstudley@me.com',     'Kim Studley',     'SSCNC%202015%20Specialty%20Chair' );
$emails['performance_events']= new Array( 'melinda.eaton@att.net', 'Melinda &amp; Kim Eaton',     'Performance%20Events' );
$emails['trophies']          = new Array( 'NUNZIRR@PEOPLEPC.COM',   'Rene Nunzir',       'Trophy%20Availability' );
$emails['advertising']       = new Array( 'NUNZIRR@PEOPLEPC.COM',  'Contact Information &amp; Advertising', 'Contact%20Information%20Advertising' );
$emails['agility']           = new Array( 'lorie@abbadogs.com',    'Lorie Abbott', 'Agility%20Trial%20Secretary' );
$emails['dinner1']           = new Array( 'MJWEIGAND@comcast.net', 'Mary Jo Weigand', 'Saturday%20evening%20Auction' );
$emails['dinner2']           = new Array( 'KIMSTUDLEY@me.com',     'Kim Studley', 'Saturday%20evening%20Auction' );
$emails['grounds']           = new Array( 'KIMSTUDLEY@me.com',     'Kim Studley', 'Showsite%20Grounds' );
$emails['saturday_dinner']   = new Array( 'rhondasdavis@sbcglobal.net',    'Rhonda Davis',    'Saturday%20Dinner' );
/*
 * Dog show supers and not so supers
 */

$emails['mbf']           = new Array( 'mbf@infodog.com', 'MB-F Inc.', '' );
$emails['bradshaw']      = new Array( 'mail@bradshaw.com', 'Jack Bradshaw Dog Shows', '' );
$emails['onofrio']       = new Array( 'mail@jack.onofrio.com', 'Jack Onofrio Dog Shows, L.L.C.', '' );
$emails['royjones']      = new Array( 'rjds@royjonesdogshows.com', 'Roy Jones Dog Shows, Inc.', '' );


$subj = '';
if ( $emails[ $position ][2] != '')
	$subj = "?subject=" + $emails[ $position ][2];

if ( $emails[ $position ][0] == '' )
	$theLink = $emails[ $position ][1];
else
	$theLink = '<a class="td15" href="mailto:' + $emails[ $position ][0] + $subj +'"> ' + $emails[ $position ][1] + '</a>';
	
window.document.write( $theLink );
}