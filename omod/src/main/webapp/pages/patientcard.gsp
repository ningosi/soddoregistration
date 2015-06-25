<%
ui.decorateWith("appui","standardEmrPage")
ui.includeJavascript("soddoregistration", "angular.js")
ui.includeJavascript("soddoregistration", "angular-resource.min.js")
ui.includeJavascript("soddoregistration", "ui-bootstrap-tpls-0.11.0.min.js")
ui.includeJavascript("soddoregistration", "ui-utils.min.js")
ui.includeCss("soddoregistration","style.css")
ui.includeCss("soddoregistration","bootstrap.min.css")
ui.includeCss("soddoregistration","bootstrap-theme.min.css")
ui.includeCss("soddoregistration","jquery-ui.css")
ui.includeJavascript("soddoregistration", "barcode/code39.js")
ui.includeJavascript("soddoregistration", "dates/moment.js")
ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.js")
ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.plus.js")
ui.includeJavascript("soddoregistration", "jcalendars/jquery.plugin.js")
ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.picker.js")
ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.ethiopian.min.js")
ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.picker-et.js")
ui.includeJavascript("soddoregistration", "calendarConvert.js")
ui.includeJavascript("soddoregistration", "controllers/patientcard.js")
%>

<script type="text/javascript">
	var breadcrumbs = [
		{ icon: "icon-home", link: '/' + OPENMRS_CONTEXT_PATH + '/index.htm' },
		{ label: " ${ ui.escapeJs(patient.patient.givenName) } ${ ui.escapeJs(patient.patient.familyName) }" ,
		link: '${ui.pageLink("coreapps", "clinicianfacing/patient", [patientId: patient.patient.id])}'},
		{ label: "${ ui.escapeJs(ui.message("soddoregistration.app.patientcard.label")) }" }
	]
</script>

<!-- Include the standard patient header before we get to the specifics of this page -->
	${ ui.includeFragment("coreapps", "patientHeader", [ patient: patient.patient ]) }

<div id="soddo-reg" ng-app='PatientCardapp' ng-controller="PatientCardCtrl" ng-init="init('${patient.patient.uuid }')">
	<form class='span8'>
		<table style="width:6in" background-color:#FFFFFF" border = 1>
			<tr>
				<td>
					<img src = ${ui.resourceLink("soddoregistration", "images/openMrsLogo.png")} style="width:2in">
				</td>
				<td style="width:4in">
					<span>Name: {{person_details.display}} <br> </span>
					MRN: {{cardid}} <br>
					Date of Birth:{{gregdate}} <br>
					Sex:{{person_details.gender}}<br>
				</td>
			</tr>
			<tr>
				<td colspan=2 align='center'>
				<div id="externalbox" style="width:5in">
				<div id="inputdata" >{{cardid}}</div>
				</div>
				</td>
			</tr>
		</table>
	</form>
</div>

<script type="text/javascript">
	/* <![CDATA[ */
	function get_object(id) {
	var object = null;
	if (document.layers) {
	object = document.layers[id];
	} else if (document.all) {
	object = document.all[id];
	} else if (document.getElementById) {
	object = document.getElementById(id);
	}
	return object;
	}
	get_object("inputdata").innerHTML=DrawCode39Barcode(get_object("inputdata").innerHTML,1);
	/* ]]> */
</script>

