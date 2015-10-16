$( "#playerOne" )
	.keyup(function() {
	var value = $( this ).val();
	$( "#drag-1" ).text( value );
	})
	.keyup();

$( "#playerTwo" )
	.keyup(function() {
	var value = $( this ).val();
	$( "#drag-2" ).text( value );
	})
	.keyup();