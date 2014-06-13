var app = angular.module('soddoregistration',['restangular'])

app.controller('TestCtrl',function($scope,$http){	
	
		//declare variables 
			
		//method to save a new patient on submission of the form 
		$scope.save = function(){

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
					'dead':$scope.registration.dead,
			};
			
			var identifier = [{
					'identifier':$scope.registration.identifier,
					'identifierType':'8d79403a-c2cc-11de-8d13-0010c6dffd0f',
					'location':'6351fcf4-e311-4a19-90f9-35667d99a8af', //registration desk 
					'preferred':'true'
			}];
			
			var pp = {[
			           'person':personpayload,
			           'identifiers':identifier
			           ]}
									
			//save pt
			$http({method:'POST',
					url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person",
					data:JSON.stringify(personpayload),
					headers:{'Content-Type':'application/json'}
			}).
				success(function(data,status,headers,config){
					console.log(data)
					
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
						}).
						error(function(data,status,headers,config){
							console.log(data)
						});	
										
				}).
				error(function(data,status,headers,config){
					console.log(data)
				});				
			
		}; //end of save function
	
		
	});
	
