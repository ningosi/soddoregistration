<%
    ui.decorateWith("referenceapplication", "standardEmrPage")
    ui.includeJavascript("soddoregistration", "angular.js")
	ui.includeJavascript("soddoregistration", "angular-resource.min.js")
	ui.includeJavascript("soddoregistration", "ui-bootstrap-tpls-0.11.0.min.js")
	ui.includeJavascript("soddoregistration", "ui-utils.min.js")
	ui.includeCss("soddoregistration","jquery-ui.css")
    ui.includeJavascript("soddoregistration", "controllers/editpatientcontact.js")
    
%>
<script type="text/javascript">
    var breadcrumbs = [
        { icon: "icon-home", link: '/' + OPENMRS_CONTEXT_PATH + '/index.htm' },
        { label: "${ ui.format(patient.patient.givenName) } ${ ui.format(patient.patient.middleName) } ${ ui.format(patient.patient.familyName) }" 
        link: '${ui.pageLink("coreapps", "clinicianfacing/clinicianFacingPatientDashboard" ,[patientId: patient.patient.id])}'}
    ]
    var patient = { id: ${ patient.id } };
</script>

${ ui.includeFragment("coreapps", "patientHeader", [ patient: patient.patient ]) }

<div class="clear"></div>

<div id="soddo-reg" ng-app="patientcontactdetailsApp" ng-controller="patientcontactController" ng-init="init('${patient.patient.uuid }')">
<form class='span8'>
	<table>
 <tr>
                       <td><label>Region:</label><br>
                       <span>
                        <select ng-model='region' ng-value={{region}} ng-options=" x.name for x in x_regions" ng-change="getZones(region)" style="width: 260px" > </select>                  
                       </span>
                       </td>
                        <td><label>Zone/Special Woreda: </label> <br>
                         <div ng-if="registration.region">
                  <span><select ng-model='zone' ng-value={{zone}} ng-options=" z.name for z in x_zones" style="width: 260px"> </select>                  
                   </span>
                   <div>
                          
                       </td>
                       <td><label>Woreda:</label> <br>
                           <span> <input name="woreda" type="text" ng-value={{woreda}} ng-model='woreda' placeholder ={{woreda}} style="width: 260px" onblur="isWoredaValid()"> </span>
                       </td>
                   </tr>
                   <tr>             
                       <td><label>Kebele: </label><br>
                           <span> <input name="kebele" type="text" ng-value={{kebele}} ng-model='kebele' placeholder ={{kebele}}  style="width: 260px" onblur="isKebeleValid()"> </span>
                       </td>
                       <td><label>Ketena/Gott:</label> <br>
                           <span> <input name="ketena" type="text" ng-value={{ketena}} ng-model='ketena' placeholder ={{ketena}} style="width: 260px" onblur="isKetenaValid()"> </span>
                       </td>
                       <td><label>Subcity:</label> <br>
                           <span> <input name="subcity" type="text" ng-value={{subcity}} ng-model='subcity' placeholder ={{subcity}} style="width: 260px" onblur="isSubcityValid()"> </span>
                       </td>
                   </tr>
                        <tr>			  
					   <td>
                           <p> <label> House No: </label> <br>
                           <span> <input name="house" type="text" ng-value={{house}} ng-model='house' placeholder ={{house}} style="width: 260px"></span>
                       </td>
                       <td>
                           <label>Telephone: </label> <br>
                           <span> <input name="tel" type="text" ng-value={{tel}} ng-model='tel' placeholder ={{tel}} style="width: 260px" onblur="isTelValid()"> </span>
                       </td>
                       <td>
					   </td>
                   </tr>

               </table>
               <input class='btn btn-default' type="submit" ng-click ="save('${patient.patient.uuid }')" value="Update Contact Details"/>
               <input class='btn btn-primary' type="submit" ng-click ="cancel('${patient.patient.uuid }')"  value="Cancel"/>           
</form>
</div>