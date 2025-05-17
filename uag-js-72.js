document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-001d32ea' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-70f069c9' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-447dfe22' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-27dd242b' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-037a37c1' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-03833edd' );
});
var ssLinksParent = document.querySelector( '.uagb-block-f07bb1aa' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
 });