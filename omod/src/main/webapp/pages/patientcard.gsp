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
        ui.includeJavascript("soddoregistration", "JsBarcode.js")    
        ui.includeJavascript("soddoregistration", "jquery.barcode.0.3.js")        
        ui.includeJavascript("soddoregistration", "jquery-ean13.min.js")                    
    %>

   <div id="soddo-reg" ng-app="soddoregistration" >
       <form name="soddoReg" ng-controller="soddoRegistrationController" class="form-group" >

       {{value}}      
        
	<table width="400" border = 1>
	 <tr>  
	 	<td>
	 	<img src = ${ui.resourceLink("soddoregistration", "images/openMrsLogo.png")}
	 	</td>
	 	
	 	<td>
	 	Name: patient.firstname patient.middlename patient.lastname  <br>
	 	MRN: {{patient.identifier}}  <br>
	 	Date of Birth: patient.birthdate  <br>
	 	Sex:{{patient.gender}} <br>
	 	</td>
	 </tr>
	 
	 <tr colspan=2>
	 <img id="barcode">
	 
	</tr>
	
	</table>
		
	<input type='submit' value = 'Print ID card'>
       
       </form>
       
       </div>