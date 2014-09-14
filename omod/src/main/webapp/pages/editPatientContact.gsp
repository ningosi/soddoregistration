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

<div id="soddo-reg" ng-app="soddoregistration">
<form name="soddoReg" class='span8' ng-controller="soddoRegistrationController" ng-init="editaddress('${patient.patient.uuid }')" class="form-group" >
	<table>
 <tr>
                       <td><label>Region:</label><br>
                       <span>
                        <select ng-model='registration.region' ng-options=" x.name for x in x_regions"  ng-change="getZones(registration.region)" style="width: 260px" > </select>                  
                       </span>
                       </td>
                        <td><label>Zone/Special Woreda: </label> <br>
                         <div ng-if="registration.region">
                  <span><select ng-model='registration.zone' ng-options=" z.name for z in x_zones" style="width: 260px"> </select>                  
                   </span>
                   <div>
                          
                       </td>
                       <td><label>Woreda:</label> <br>
                           <span> <input name="woreda" type="text" ng-model='registration.woreda' style="width: 260px" onblur="isWoredaValid()"> </span>
                       </td>
                   </tr>
                   <tr>             
                       <td><label>Kebele: </label><br>
                           <span> <input name="kebele" type="text" ng-model='registration.kebele' style="width: 260px" onblur="isKebeleValid()"> </span>
                       </td>
                       <td><label>Ketena/Gott:</label> <br>
                           <span> <input name="ketena" type="text" ng-model='registration.ketena' style="width: 260px" onblur="isKetenaValid()"> </span>
                       </td>
                       <td><label>Subcity:</label> <br>
                           <span> <input name="subcity" type="text" ng-model='registration.subcity' style="width: 260px" onblur="isSubcityValid()"> </span>
                       </td>
                   </tr>
                        <tr>			  
					   <td>
                           <p> <label> House No: </label> <br>
                           <span> <input name="house" type="text" ng-model='registration.house' style="width: 260px"></span>
                       </td>
                       <td>
                           <label>Telephone: </label> <br>
                           <span> <input name="tel" type="text" ng-model='registration.tel' style="width: 260px" onblur="isTelValid()"> </span>
                       </td>
                       <td>
					   </td>
                   </tr>

               </table>
</form>
</div>