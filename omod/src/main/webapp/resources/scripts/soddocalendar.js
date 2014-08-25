$(document).ready(		
function() {
    $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd',maxDate: new Date}); 
	$('#ethiopianDOB').calendarsPicker({
	    calendar: $.calendars.instance('ethiopian'),
	    showOnFocus: false,
	    showTrigger: '<button type="button" class="trigger" style="width: 130px">Select Date</button>' ,
	    onSelect:function(dates){
	      //to do
	      $('#registrationDOB').val(dates);
	      $('#registrationDOB').focus();
	    }
	  });
});