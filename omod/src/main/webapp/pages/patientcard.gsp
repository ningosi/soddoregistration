<%
    	ui.decorateWith("referenceapplication","standardEmrPage")
        ui.includeJavascript("soddoregistration", "angular.js")
        ui.includeJavascript("soddoregistration", "angular-resource.min.js")
        ui.includeJavascript("soddoregistration", "ui-bootstrap-tpls-0.11.0.min.js")  
        ui.includeJavascript("soddoregistration", "ui-utils.min.js")        
        ui.includeCss("soddoregistration","style.css")
        ui.includeCss("soddoregistration","bootstrap.min.css")
        ui.includeCss("soddoregistration","bootstrap-theme.min.css")
        ui.includeCss("soddoregistration","jquery-ui.css")   
        ui.includeJavascript("soddoregistration", "register.js")     
        ui.includeJavascript("soddoregistration", "barcode/code39.js") 
        ui.includeJavascript("uicommons", "services/personService.js")
    	ui.includeJavascript("uicommons", "directives/select-person.js")                                               
    %>


   <div id="soddo-reg" ng-app="soddoregistration" ng-init="init('${ patient.patient.uuid }')" >
       <form name="soddoReg" class='span8' ng-controller="soddoRegistrationController" class="form-group" >
          
	<table style="width:6in" background-color:#FFFFFF" border = 1>
	 <tr>  
	 	<td>
	 	<img src = ${ui.resourceLink("soddoregistration", "images/openMrsLogo.png")} style="width:2in">
	 	</td>
	 	
	 	<td>
	 	Name: patient.firstname patient.middlename patient.lastname  <br>
	 	MRN: {{patient.identifier}}  <br>
	 	Date of Birth: patient.birthdate  <br>
	 	Sex:{{patient.gender}} <br>
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
</script>