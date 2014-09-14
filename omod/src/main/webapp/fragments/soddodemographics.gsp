<%
ui.decorateWith("referenceapplication","standardEmrPage")
ui.includeJavascript("soddoregistration", "angular.js")
ui.includeJavascript("soddoregistration", "register.js")
%>

<div id="soddo-reg" ng-app="soddoregistration">
<form name="soddoReg" class='span8' ng-controller="soddoRegistrationController" ng-init="init('${patient.patient.uuid }')" class="form-group" >


</form>
</div>