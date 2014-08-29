$(document).ready(		
function() {
    $("#datepicker" ).datepicker({dateFormat: 'dd-mm-yy',maxDate: new Date}); 
	$('#ethiopianDOB').calendarsPicker({
	    calendar: $.calendars.instance('ethiopian'),
	    dateFormat: 'dd-mm-yyyy',
	    showOnFocus: false,
	    showTrigger: '<button type="button" class="trigger" style="width: 130px">Select Date</button>' ,
	    onSelect:function(dates){  
	      $('#registrationDOB').val(dates);
	      $('#registrationDOB').focus();
	    }
	  });
});

