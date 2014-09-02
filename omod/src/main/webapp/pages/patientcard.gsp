<%
    	ui.decorateWith("referenceapplication","standardEmrPage")
    	
    	//include angular and plugins 
        ui.includeJavascript("uicommons", "angular.js")
        ui.includeJavascript("uicommons", "angular-resource.min.js")
        ui.includeJavascript("uicommons", "angular-ui/ui-bootstrap-tpls-0.6.0.min.js")  
        
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
        ui.includeJavascript("soddoregistration", "patientcard.js")                                                         
    %>
    	
<script type="text/javascript">
    var breadcrumbs = [
        { icon: "icon-home", link: '/' + OPENMRS_CONTEXT_PATH + '/index.htm' },
        { label: "${ ui.escapeJs(patient.patient.familyName) }, ${ ui.escapeJs(patient.patient.givenName) }" ,
            link: '${ui.pageLink("coreapps", "clinicianfacing/patient", [patientId: patient.patient.id])}'},
        { label: "${ ui.escapeJs(ui.message("coreapps.task.relationships.label")) }" }
    ]
</script>
	
	<!-- Include the standard patient header before we get to the specifics of this page -->
	${ ui.includeFragment("coreapps", "patientHeader", [ patient: patient.patient ]) }

   <!-- Your page should have a title -->
	<h3>${ ui.message("soddoregistration.app.patientcard.label") }</h3>

   <div id="patientcard-app" ng-controller="patientCardController" ng-init="init('${patient.patient.uuid }')">  
       <form name="ptCard" class='span8' class="form-group" >
	
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
				<div id="inputdata" >123456</div>
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

    angular.bootstrap('#patientcard-app', []);
</script>