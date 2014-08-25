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
        ui.includeCss("soddoregistration","jquery-ui.css")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.plus.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.plugin.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.picker.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.ethiopian.min.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.picker-et.js")
        ui.includeJavascript("soddoregistration", "jcalendars/calendarConvert.js")        
        ui.includeJavascript("soddoregistration", "register.js")
        ui.includeJavascript("soddoregistration", "registerValidation.js")
        ui.includeJavascript("soddoregistration", "soddocalendar.js")  
        ui.includeJavascript("soddoregistration", "calendarConvert.js")  
    %>
<div id="soddo-reg" ng-app="soddoregistration">

<form name="soddoReg" ng-controller="soddoRegistrationController" class="form-group" >

Mimi:::
<input type="text" id="ethiopianDOB" ng-model='Ethiopian'>	<br><br>


My ID :
<input type="text" id='registrationDOB' ng-blur='blurCallback(\$event)'>	
{{ethiopiandate}}				            
<br>

<br>
<input class='btn btn-primary' type="submit" ng-click='steve()'/>
</form>
</div>

