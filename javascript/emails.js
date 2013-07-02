/*
 * Each array is composed of 3 parameters:
 *		1. email address
 *		2. person's name
 * 		3. text for the subject line
 * <script type="text/javascript">doEmails('greaterPitts');</script> 
 */
 
function doEmails( $position )
{
$emails    = new Object();
$emails['president']      = new Array( 'acholst@adelphia.net',     'Arden Holst',      'President' );
$emails['webmaster']      = new Array( 'royfdvorak23@comcast.net', 'Roy F. Dvorak',    'SSCA%20Web%20Dude' );
$emails['secretary']      = new Array( 'hmohrenweiser@wvi.com',    'Liz Mohrenweiser', 'Secretary' );
$emails['board2010-3']    = new Array( 'jfun100@aol.com',          'Diana Wall',       '2010%20Board' );


$emails['akcdelegate']    = new Array( 'hmohrenweiser@wvi.com',  'Harvey Mohrenweiser', 'AKC%20Delegate' );
$emails['westcoastrefer'] = new Array( 'walkeris@earthlink.net', 'Mary Dunn',           'West%20Coast%20Referrer' );
$emails['healthsurvey']   = new Array( 'hmohrenweiser@wvi.com',  'Harvey Mohrenweiser', 'Health%20Survey' );
$emails['waysandmeans']   = new Array( 'kirmangj@aol.com',       'Gwen Kirman',         'Ways%20And%20Means' );
$emails['2011specialtychair'] = new Array( 'nickannora@aol.com', 'Carol Karas',         '2011 Specialty Chair' );
 
$emails['sscnc_president']      = new Array( 'NUNZIRR@PEOPLEPC.COM',       'Rene Nunzir', 'SSCNC%20Secretary' );
$emails['sscnc_vicepresident1'] = new Array( 'demljust@pacbell.net',       'Mary Lou Just',   'SSCNC%20First%20Vice%20President' );
$emails['sscnc_vicepresident2'] = new Array( 'kimstudley@me.com',          'Kim Studley',     'SSCNC%20Second%20Vice%20President'  );
$emails['sscnc_treasurer']      = new Array( 'dmmiche@pacbell.net',        'John Michelmore', 'SSCNC%20Treasurer' );
$emails['sscnc_secretary']      = new Array( 'MJWEIGAND@comcast.net',      'Mary Jo Weigand', 'SSCNC%20Secretary' );
$emails['sscnc_membersatlarge1']= new Array( 'mjanney@ci.clayton.ca.us',   'Mary Bugglin',    'SSCNC%20Members-At-Large' );
//$emails['sscnc_membersatlarge1']= new Array( 'kimstudley@me.com',          'Kim Studley',     'SSCNC%20Members-At-Large' );
$emails['sscnc_membersatlarge2']= new Array( 'rhondasdavis@sbcglobal.net', 'Rhonda Davis',    'SSCNC%20Members-At-Large' );
$emails['sscnc_rescue']         = new Array( 'dmmiche@pacbell.net',        'Dottie Michelmore','SSCNC%20Rescue' );
$emails['sscnc_stripper']       = new Array( 'MJWEIGAND@comcast.net',      'Mary Jo Weigand', 'SSCNC%20Stripper%20Newsletter' );
$emails['sscnc_membership']     = new Array( 'demljust@pacbell.net',       'Mary Lou Just',   'SSCNC%20Membership' );


$emails['sscnc_newsletter']     = new Array( 'demljust@pacbell.net',       'Don Just',        'SSCNC Newsletter' );
$emails['sscnc_referral']       = new Array( 'dmmiche@pacbell.net',        'Dotti Michelmore','Breeder Referral' );
$emails['sscnc_webmaster']      = new Array( 'royfdvorak23@comcast.net',   'Roy F. Dvorak',   'SSCNC%20Web%20Dude' );

$emails['regional_chair']    = new Array( 'kimstudley@me.com',          'Kim Studley',   'SSCNC%202011%20Regional%20Chair'  );

/*
 * Email addresses for the 2010 regional
$emails['regional_chair']    = new Array( 'kimstudley@me.com',          'Kim Studley',   'SSCNC%202010%20Regional%20Chair'  );
$emails['regional_co_chair'] = new Array( 'kimstudley@me.com',     'Kim Studley',     'SSCNC%202010%20Regional%20Co-Chair' );
$emails['performance_events']= new Array( 'melinda.eaton@att.net', 'Melinda &amp; Kim Eaton',     'Performance%20Events' );
$emails['trophies']          = new Array( 'cdah@comcast.net',      'Kim Lemke',       'Trophy%20Availability' );
$emails['advertising']       = new Array( 'NUNZIRR@PEOPLEPC.COM',  'Contact Information &amp; Advertising', 'Contact%20Information%20Advertising' );
$emails['agility']           = new Array( 'lorie@abbadogs.com',    'Lorie Abbott', 'Agility%20Trial%20Secretary' );
$emails['dinner1']           = new Array( 'MJWEIGAND@comcast.net', 'Mary Jo Weigand', 'MJWEIGAND@comcast.net' );
$emails['dinner2']           = new Array( 'KIMSTUDLEY@me.com',     'Kim Studley', 'KIMSTUDLEY@me.com' );
$emails['grounds']           = new Array( 'KIMSTUDLEY@me.com',     'Kim Studley', 'KIMSTUDLEY@me.com' );
$emails['saturday_dinner']   = new Array( 'rhondasdavis@sbcglobal.net',    'Rhonda Davis',    'Saturday%20Dinner' );
 */

 
/*
 * Dog show supers and not so supers
 */
$emails['mbf']           = new Array( 'mbf@infodog.com', 'MB-F Inc.', '' );
$emails['bradshaw']      = new Array( 'mail@bradshaw.com', 'Jack Bradshaw Dog Shows', '' );
$emails['onofrio']       = new Array( 'mail@jack.onofrio.com', 'Jack Onofrio Dog Shows, L.L.C.', '' );
$emails['royjones']      = new Array( 'rjds@royjonesdogshows.com', 'Roy Jones Dog Shows, Inc.', '' );

$emails['mark_allen']    = new Array( 'mark@wunderkindschnauzers.com', 'Mark Allen',      'SSCNC%20President' );
$emails['kim_limke'] = new Array( 'cdah@comcast.net',              'Kim Lemke',       'SSCNC%20First%20Vice%20President' );
$emails['linda_adiletti'] = new Array( 'ladiletti@aol.com',             'Linda Adiletti',  'SSCNC%20Second%20Vice%20President'  );

$subj = '';
if ( $emails[ $position ][2] != '')
	$subj = "?subject=" + $emails[ $position ][2];

if ( $emails[ $position ][0] == '' )
	$theLink = $emails[ $position ][1];
else
	$theLink = '<a class="td15" href="mailto:' + $emails[ $position ][0] + $subj +'"> ' + $emails[ $position ][1] + '</a>';
	
window.document.write( $theLink );
}