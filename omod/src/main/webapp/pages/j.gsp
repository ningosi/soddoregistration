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
        ui.includeJavascript("soddoregistration", "j.js")
        
    %>
    
    <div id="soddo-reg" ng-app="soddoregistration">
       <form name="soddoReg" ng-controller="soddoRegistrationController" class="form-group" >
           {{Regions}}
           <br><br>
           {{items}}
           
             <input type="text" ng-model="todoText"  size="30"
             placeholder="Add New Region Here">
       	<input class="btn-primary" type="submit" value="Add Region" ng-click="addTodo()">
       
           </form>
           
    </div>
    