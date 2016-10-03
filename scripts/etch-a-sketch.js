var rows = 16;
var columns = 16;
var $row = $("<div />", {
	class: 'row'
});
var $square = $("<div />", {
	class: 'square'
});

$(document).ready(function(){
	for (var i = 0; i < columns; i++){
		$row.append($square.clone());
	}
	
	for (var i = 0; i < rows; i++){
		$('#etchContainer').append($row.clone());
	}
	
	$('.square').mouseenter(function() {
		$(this).addClass("hover");
	});	
});

