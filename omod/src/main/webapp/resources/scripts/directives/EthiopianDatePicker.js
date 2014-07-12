angular.module('soddoregistration')

.directive('ethiopiandatepicker',function(){
	return function(scope,element,attrs) {
		element.calendarsPicker({
			calendar: $.calendars.instance('ethiopian'),	
	    	showTrigger: '<button type="button" class="trigger">Ethiopian Calendar</button>',
	    	onSelect:function(dates){
	    		var modelPath = $(this).attr('ng-model');
	    		putObject(modelPath, scope, dates);
	            scope.$apply();
	    	};
		});
		
	};
	
});


