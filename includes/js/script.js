/*

My Custom JS
============

Author:  Sangeetha
Updated: May 2016
Notes:	 Hand coded for training

*/
$(function() {

	$('#alertMe').click(function(e) {

		e.preventDefault();

		$('#successAlert').slideDown();

	});

	$('a.pop').click(function(e) {
		e.preventDefault();
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();


});
