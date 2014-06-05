<%
	ui.decorateWith("appui","standardEmrPage")
    ui.includeJavascript("uicommons", "angular.min.js")
    ui.includeJavascript("uicommons", "angular-ui/ui-bootstrap-tpls-0.6.0.min.js")
    ui.includeJavascript("soddoregistration", "register.js")
    
%>
 
<div id="soddo-reg" ng-app="soddoRegistration" ng-resource="soddoRegistrationController"  class="form-group">

<p> First Name: </p> <p><input type="text" ng-model='registration.firstName'> </p>
    <p> Middle Name:</p> <p>  <input type="text" ng-model='registration.middleName'> </p>
    <p>Last Name:  </p> <p><input type="text" ng-model='registration.lastName'> </p>
    <p> Father's Name: </p> <p> <input type="text" ng-model='registration.fathersName'> </p>
    <p>GrandFather's Name: </p> <p> <input type="text" ng-model='registration.grandFathersName'> </p>   
    <p>Gender </p> <p> <input type="radio" name="gender" ng-model='registration.gender' value='Male'> Male</p>
    <p> <input type="radio" name="gender" ng-model='registration.gender' value='Female'> Female</p>

    <fieldset>
        <p>BirthDate </p> <p> <input type="radio" name="DOB" ng-model='registration.exactOrEstimate' value='exact'> Exact</p>
        <p> <input type="radio" name="DOB" ng-model='registration.exactOrEstimate' value='estimated'> Estimated</p>
        <p> <datepicker ng-model='registration.DOB'></datepicker></p>
        <p> <input type="checkbox" ng-model='registration.ethiopian'> Ethiopian Calendar: </p>              
    </fieldset>
    
    <p> <input type="checkbox" ng-model='registration.dead'> Dead: </p>              
    

       <div class = "row-fluid ng-scope">
    <p>Region: </p> <p> <input type="text" ng-model='registration.region'> </p>
    <p>Woreda: </p> <p> <input type="text" ng-model='registration.woreda'> </p>
    <p>Ketena/Gott: </p> <p> <input type="text" ng-model='registration.ketena'> </p>
    <p>Zone/Special Woreda: </p> <p> <input type="text" ng-model='registration.zone'> </p>
    <p>Kebele: </p> <p> <input type="text" ng-model='registration.kebele'> </p>
               <p>Subcity: </p> <p> <input type="text" ng-model='registration.subcity'> </p>
    <p>Telephone: </p> <p> <input type="text" ng-model='registration.tel'> </p>

    </div>
    
    <input class='btn btn-primary' type="submit" ng-click ="makepayloads()" value="Save Patient"/>
    
    {{registration}}
    <hr>
    {{personpayload}}
    
</div>
