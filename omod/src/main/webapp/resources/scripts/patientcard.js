var app = angular.module('patientcard',[]).
	controller('patientCardController',['$scope','$http','$window',
	                                          function($scope,$http,$window){
		//scope method that deals with printing of the patient ID
		
		$scope.init = function(personUuid) {
			//get the person uuid
			$scope.thisPersonUuid = personUuid;
			
			$http({method:'GET',
					url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + personUuid,
					headers:{'Content-Type':'application/json'}
				}).
					success(function(data,status,headers,config){
						$scope.person_details = data;
						
						// Date is '1991-09-01T00:00:00.000-0500'
						// Reorder it to the correct Date - now is  yyyy-mm-dd
						d = new Date(data['birthdate']);
						a = moment(d).format("DD/MM/YYYY");
						$scope.gregdate = a;
					
						//Convert the date to Ethiopian - not working
						$scope.eth_date_card = GregToEth(a);
						console.log(GregToEth(a));
						
					}).
					error(function(data,status,headers,config){
						//console.log(data)
					});	
			
			//Get the patient ID - this case Soddo ID 
			$http({method:'GET',
				url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/patient/" + personUuid + "/identifier",
				headers:{'Content-Type':'application/json'}
			}).
				success(function(data,status,headers,config){
					$scope.person_ids = data;	
					//returns a dictionary with list to get index corresponding to the identifier type
					res = data['results']
					for (var i=0; i < res.length; i++) {
						if (res[i]['identifierType']['uuid'] == '05a29f94-c0ed-11e2-94be-8c13b969e334'){
							$scope.cardid = res[i]['identifier']
						}
					}
				}).
				error(function(data,status,headers,config){
					//console.log(data)
				});	
			
			
		}; //end of init method
		
	}