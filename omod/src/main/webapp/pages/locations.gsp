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
    %>
       
   <script>
    	var jq = jQuery;
   </script>
  
   <div id="soddo-reg" ng-app="soddoregistration">
       <form name="soddoReg" ng-controller="soddoRegistrationController" class="form-group" >
       Manage Regions 
       <table>
	       <thead>
	      	<tr>
	      		<th>Region </th>
	      	</tr>
	       </thead>
	       <tbody ng-repeat = '(pIndex,p) in Regions'>
				<td rowspan="{{p.displayName.length+1}}">{{p.displayName}} </td>				       
	       </tbody>
       </table>
        <input type="text" ng-model="todoText"  size="30"
             placeholder="add new Region here">
       <input class="btn-primary" type="submit" value="Add Region" ng-click="addTodo()">
       
       </form>

   </div>
   
   