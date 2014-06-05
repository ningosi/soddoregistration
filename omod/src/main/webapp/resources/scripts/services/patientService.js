angular.module('providerService',['ngResource'])
.config(function($httpProvider){
	$httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = 'true';
})

.factory('Patient',function($resource){
	return $resource("/"+ OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/concept/",{
	},{
		query:{method:'GET'}
	});
})

.factory('PatientService',function(Patient){
	return{
		getPatients: function(params){
			return Patient.query(params).$promise
				.then(function(res){
					return res.results;
				},emr.handleNotLoggedIn);
		}
	}
})