<%
    	ui.decorateWith("referenceapplication","standardEmrPage")
        ui.includeJavascript("soddoregistration", "angular.js")
        ui.includeJavascript("soddoregistration", "angular-resource.min.js")
        ui.includeJavascript("soddoregistration", "ui-bootstrap-tpls-0.11.0.min.js")  
        ui.includeJavascript("soddoregistration", "ui-utils.min.js")        
        ui.includeCss("soddoregistration","style.css")
        ui.includeCss("soddoregistration","jquery.calendars.picker.css")
        ui.includeCss("soddoregistration","bootstrap.min.css")
        ui.includeCss("soddoregistration","bootstrap-theme.min.css")
        ui.includeJavascript("soddoregistration", "register.js")
        ui.includeJavascript("soddoregistration", "directives/Patientaddress.js")
    %>
       <div id="soddo-reg" ng-app="soddoregistration">
		    <div ng-sparkline ng-uuid="d8a871a7-22d6-4578-82bf-a73e5d19e213"></div>	    
       </div>