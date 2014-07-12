$(document).ready(		
function() {
    $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd',maxDate: new Date}); 
	$('#ethiopianDOB').calendarsPicker({
	    calendar: $.calendars.instance('ethiopian'),
	    showOnFocus: false,
	    showTrigger: '<button type="button" class="trigger">Ethiopian Calendar</button>' ,
	    onSelect:function(dates){
	      //to do
	      $('#registrationDOB').val(dates);
	      $('#registrationDOB').focus();
	    }
	  });
});