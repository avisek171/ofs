//second method
$(document).ready(function() {
	SearchTrains();
});

function SearchTrains(){
	$('#res_name').autocomplete({
		source: 'search-train-script.php',
		minLength: 0,
		scroll: true
	}).focus(function(){
		$(this).autocomplete("search", "");
	});
}