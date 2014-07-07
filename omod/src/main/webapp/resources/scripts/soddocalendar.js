$(document).ready(		
function() {
    $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd',maxDate: new Date}); 
    $( "#ethiopianDOB" ).calendarsPicker({
    	calendar: $.calendars.instance('ethiopian')
    	});   
  });

