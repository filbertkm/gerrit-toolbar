$( document ).ready( function() {
	var search = $( '.topmenuMenuRight' ).first();
		list = $( "<ul id='menu-list'>" );

	$.getJSON( chrome.extension.getURL( "menu.json" ), function( data ) {
		$.each( data.links, function( key, link ) {
			var a = $( "<a>" )
				.attr({
					'href': link.url
				})
				.text( link.text );

			var li = $( "<li>" )
				.attr({
					'id': 'menu-list-' + link.text
				})
				.append( a );

			$( list ).append( li );
		});
	});

	var header = $( "<div id='gerrit-header'>" )
		.append( list )
		.css({
			'background': "url( '" + chrome.extension.getURL( 'logo.png' ) + "' ) no-repeat #2d3236",
			'background-position': 'left 10px top 7px'
		});

	$( '#gerrit_topmenu' ).before(
		$( header ).append( search ).addClass( 'clearfix' )
	);

	$( '#gerrit_header' ).remove();
	$( '#gerrit_topmenu' ).remove();
});
