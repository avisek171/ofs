//second method
$(document).ready(function() {
	BindControls();
});

function BindControls() {
	$('#res_name').autocomplete({
		source: 'ajax-get-stations.php',
		minLength: 0,
		scroll: true
	}).focus(function() {
		$(this).autocomplete("search", "");
	});
	
	$('#station_name').autocomplete({
		source: 'backend-script.php',
		minLength: 0,
		scroll: true
	}).focus(function() {
		$(this).autocomplete("search", "");
	});
}