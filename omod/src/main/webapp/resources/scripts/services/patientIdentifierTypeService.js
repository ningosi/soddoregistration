angular.module('soddoregistration',['ngResource'])
.config(function($httpProvider){
	$httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = 'true';
})

.factory('Identifiers',function($resource){
	return $resource("/"+ OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/patientidentifiertype/",{
	},{
		query:{method:'GET'}
	});
})

.factory('IdentifierTypeService',function(IdType){
	return{
		getIds: function(params){
			return IdType.query(params).$promise
				.then(function(res){
					return res.results;
				},emr.handleNotLoggedIn);
		}
	}
})