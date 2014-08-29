 <%
    	ui.decorateWith("referenceapplication","standardEmrPage")
        ui.includeJavascript("soddoregistration", "angular.js")
        ui.includeJavascript("soddoregistration", "angular-resource.min.js")
        ui.includeJavascript("soddoregistration", "ui-bootstrap-tpls-0.11.0.min.js")  
        ui.includeJavascript("soddoregistration", "ui-utils.min.js")        
        ui.includeCss("soddoregistration","style.css")
        ui.includeCss("soddoregistration","jquery.calendars.picker.css")
        ui.includeCss("soddoregistration","bootstrap.min.css")
        ui.includeCss("soddoregistration","bootstrap-theme.min.css")
        ui.includeCss("soddoregistration","jquery-ui.css")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.plus.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.plugin.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.picker.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.ethiopian.min.js")
        ui.includeJavascript("soddoregistration", "jcalendars/jquery.calendars.picker-et.js")
        ui.includeJavascript("soddoregistration", "jcalendars/calendarConvert.js")        
        ui.includeJavascript("soddoregistration", "register.js")
        ui.includeJavascript("soddoregistration", "registerValidation.js")
        ui.includeJavascript("soddoregistration", "soddocalendar.js")  
        ui.includeJavascript("soddoregistration", "calendarConvert.js")  
        ui.includeJavascript("soddoregistration", "directives/EthiopianDatePicker.js")
    %>
       
   <script>
    	var jq = jQuery;
   </script>
  
   <div id="soddo-reg" ng-app="soddoregistration">
       <form name="soddoReg" ng-controller="soddoRegistrationController" class="form-group" >
           <fieldset class="well">
               <legend></legend>
               <h3> Register New Patient </h3>
               <table class="table" border='0'>
                   <tr>
                       <td>
                           <label>Patient Identifier:</label> <br>
                           <span><input type="text" ng-value={{autoidentifier}} value={{autoidentifier}} style="width: 260px"></span>
                       </td>
                       <td>
                           <br><br>
                           <span><input type='button' value='Generate ID'  style="width: 260px" ng-click='generateIdentifier()'> </span>
                       </td>
                       <td>
                           <br><br>
							<span> Dead <input type="checkbox" ng-model='registration.dead' ng-value='True'>  </span>    
							<div ng-if="registration.dead"> 
								Cause of Death: <input type='text' ng-required="true"  ng-model='registration.causeOfDeath'> <br>
								Date of Death : <input type="date" ng-model ='registration.deathDate'>
							</div>
					   </td>
                   </tr>
                   <tr>
                       <td><label>First Name:</label><br>
                           <span><input name="fname" type="text" ng-model='registration.firstName' style="width: 260px" onblur="isFnameValid()"></span>
                           <span id="fname_error"></span>
                       </td>
                       <td><label>Father's Name:</label><br>
                           <span><input name="mname" type="text" ng-model='registration.middleName' style="width: 260px" onblur="isMnameValid()"></span>
                           <span id="mname_error"></span>
                       </td>
                       <td ><label>GrandFather's Name:</label><br>
                           <span><input name="lname" type="text" ng-model='registration.lastName' style="width: 260px" onblur="isLnameValid()"></span>
                           <span id="lname_error"></span>
                       </td>
                   </tr>
           
                   <tr>
                    	<td>
                           <p>Gender: </p> <p> <input type="radio" name="gender" ng-model='registration.gender' value='Male' onblur="isGenderValid()"> Male</p>
                           <p> <input type="radio" name="gender" ng-model='registration.gender' value='Female' onblur="isGenderValid()"> Female</p>
                           <span id="gender_error"></span>
                       </td>
                       
                   		<td colspan="2">
		                       <p>Select patient's birthdate OR use estimated age:</p>
		                       
		                     <input type="checkbox" name="DOB" ng-model='registration.exactOrEstimate' value='True'> Estimated Age: </p>
								<div ng-if="registration.exactOrEstimate"> 
									<input type="number" ng-model="registration.estimatedAge"  min="0">
								</div>
								
								<div ng-hide='registration.exactOrEstimate'>
								<section ng-init="tab = 1">
                            <ul class="nav nav-pills">
                                <li ng-class="{ active:tab===1 }"><a href ng-click="tab = 1">Ethiopian Calendar</a></li>
                                <li ng-class="{ active:tab===2 }"><a href ng-click="tab = 2">Gregorian Calendar</a></li>
                            </ul>
                            </section>      
                            <div class="panel" ng-show="tab === 1">
                                <input type="text" id="ethiopianDOB" ng-model='Ethiopian'>  <br><br>
                              <input type="text" id='registrationDOB' hidden='hidden' ng-focus='blurCallback(\$event)'>   
                              <input type="text" ng-value={{ethiopiandate}} value={{ethiopiandate}} hidden='hidden'>                  
                            </div>                
			                     
			                    <div class="panel" ng-show="tab === 2">	
						            <p><input type="text" id="datepicker" placeholder="dd-mm-yyyy" ng-model='registration.DOB' ng-blur='clearDateFields(\$event)'>
						            </p>
						        </div>	
						        
			                   </div>
                   		</td>                   
                   </tr>
               
                   <tr>
                       <td><label>Region:</label><br>
                     <span>  <select ng-model='registration.region' ng-options="p.displayName for p in Regions" style="width: 260px" onblur="isRegionValid()"> </select></span>
                           <span id="region_error"></span>
                       </td>
                        <td><label>Zone/Special Woreda: </label> <br>
                           <span> <select ng-model='registration.zone' style="width: 260px" 
                           ng-options="c.displayName for c in Zones | filter:{parentId: registration.region.id}" onblur="isZoneValid()"> 
                           </select></span>
                           <span id="zone_error"></span>
                       </td>
                       <td><label>Woreda:</label> <br>
                           <span> <input name="woreda" type="text" ng-model='registration.woreda' style="width: 260px" onblur="isWoredaValid()"> </span>
                           <span id="woreda_error"></span>
                       </td>
                   </tr>
                   <tr>             
                       <td><label>Kebele: </label><br>
                           <span> <input name="kebele" type="text" ng-model='registration.kebele' style="width: 260px" onblur="isKebeleValid()"> </span>
                           <span id="kebele_error"></span>
                       </td>
                       <td><label>Ketena/Gott:</label> <br>
                           <span> <input name="ketena" type="text" ng-model='registration.ketena' style="width: 260px" onblur="isKetenaValid()"> </span>
                           <span id="ketena_error"></span>
                       </td>
                       <td><label>Subcity:</label> <br>
                           <span> <input name="subcity" type="text" ng-model='registration.subcity' style="width: 260px" onblur="isSubcityValid()"> </span>
                           <span id="subcity_error"></span>
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
                           <span id="tel_error"></span>

                       </td>
                       <td>
					   </td>
                   </tr>

               </table>
           <input class='btn btn-primary' type="submit" ng-click ="save()" onclick="validate()" value="Save Patient"/>
		</fieldset>
           
       </form>

   </div>