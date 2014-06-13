var app = angular.module('soddoregistration',[]).
	controller('soddoRegistrationController',['$scope','$http','$window',function($scope,$http,$window){
		// declare forms 

		//method to save patient 
		$scope.save = function(){		
			//declare variables 
			console.log($scope) 

			var names = [{
				'givenName':$scope.registration.firstName,
				'familyName':$scope.registration.lastName,
				'middleName':$scope.registration.middleName,
				'preferred':'False'
			}];
			
			var addresses = [{
				'preferred':'True',
				'stateProvince': $scope.registration.region,
				'address1': $scope.registration.zone,
				'countyDistrict':$scope.registration.woreda,
				'cityVillage':$scope.registration.kebele,
				'address2':$scope.registration.ketena,
				'address3':$scope.registration.subcity,
				'address4':$scope.registration.house
							
			}];
			
			var personpayload = {
					'names':names,
					'addresses':addresses,
					//'birthdateEstimated':$scope.registration.exactOrEstimate,
					'birthdate':$scope.registration.DOB,
					'gender':$scope.registration.gender,
					//'dead':$scope.registration.dead,
					//'deathDate':$scope.registration.deathDate,
					//'causeOfDeath':{
						//'uuid':'5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
						//'value':$scope.registration.causeOfDeath
					//}
			};
			
			var identifier = [{
					'identifier':$scope.autoidentifier,
					'identifierType':'c6b18062-27d2-4943-8f34-a5959565a0e6',
					'location':'6351fcf4-e311-4a19-90f9-35667d99a8af', //registration desk 
					'preferred':'true'
			}];
			
			//save patient
			$http({method:'POST',
				url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person",
				data:JSON.stringify(personpayload),
				headers:{'Content-Type':'application/json'}
			}).
			success(function(data,status,headers,config){				
				//save the created person in the system as a patient
				var patientpayload = {
					'person':data['uuid'],
					'identifiers':identifier
				};
									
				$http({method:'POST',
					url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/patient",
					data:JSON.stringify(patientpayload),
					headers:{'Content-Type':'application/json'}
				}).
					success(function(data,status,headers,config){
						console.log(data)
						ptid = data['uuid'];
						newurl = '/' + OPENMRS_CONTEXT_PATH + '/coreapps/clinicianfacing/patient.page?patientId=' + ptid;
						console.log(newurl)
						//redirect page 
						$window.location.href= newurl;
						
						//clear form 
						// $scope.soddoReg = $setPristine()
					}).
					error(function(data,status,headers,config){
						console.log(data)
					});	
									
			}).
			error(function(data,status,headers,config){
				console.log(data)
			});				
		
			}; //end of save function
			
			//method for getting an identifier 
			$scope.generateIdentifier = function(){
				//todo allow addition of many sources 
				$http({method:'GET',
					url: '/' + OPENMRS_CONTEXT_PATH + "/module/idgen/generateIdentifier.form?source=2",
					headers:{'Content-Type':'application/json'}
				}).
					success(function(data,status,headers,config){
						identifier = data['identifiers'][0]
						return $scope.autoidentifier = identifier
					}).
					error(function(data,status,headers,config){
						console.log(data)
					});	
			}; //end of identifier method 
			
			//todo method for calendar conversion and process DOB			
		
	}]);

