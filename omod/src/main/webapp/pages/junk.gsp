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
        ui.includeCss("soddoregistration","barcode/barcode.css")      
        ui.includeJavascript("soddoregistration", "register.js")    
        ui.includeJavascript("soddoregistration", "barcode/barcode.js")  
        
    %>
    
    <script>
   	function encode() {
  var strValue = document.getElementById("barcode_input").value;
  var strBarcodeHTML = code128(strValue);
  document.getElementById("barcode").innerHTML = strBarcodeHTML;
}
</script>
 
    <div id="soddo-reg" ng-app="soddoregistration" ng-controller="soddoRegistrationController" >

      {{value}}  <br>
      <div>
	My ID:
		<img id="barcode1"/>
	</div>
	
<div class="barcode128v" id="barcode"></div>
<br /><br />
<input style="margin-left:45px" type="text" id="barcode_input"></input>
<input type="button" value="Encode" onclick="encode()"/>

    </div>