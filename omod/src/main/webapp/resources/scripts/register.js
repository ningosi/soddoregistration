var app = angular.module('soddoregistration',[]).
	controller('soddoRegistrationController',['$scope','$http','$window',
	                                          function($scope,$http,$window){	
		
		//method to get the location data - the Regions section
		$http({method:'GET',
			url: '/' + OPENMRS_CONTEXT_PATH + "/module/addresshierarchy/ajax/getChildAddressHierarchyEntries.form?"
		}).
		success(function(data,status,headers,config){
			//data is [{ "name": "Afar" },{ "name": "Amhara" },{ "name": "Benishangul-Gumuz" },{ "name": "Dire Dawa" },{ "name": "Gambela" },{ "name": "Harari" },{ "name": "Oromia" },{ "name": "Somali" },{ "name": "Southern Nations" },{ "name": "Tigray" }]
			return $scope.x_regions = data
		}).
		error(function(data,status,headers,config){
			console.log(data)
			});
		//  end of regions section 
		
		//method to get the zone data 
		$scope.getZones = function(selectedregion){
				//console.log(selectedregion)  returns { name: "Amhara" }
				_selregion = selectedregion['name']
				$http({method:'GET',
					url: '/' + OPENMRS_CONTEXT_PATH + "/module/addresshierarchy/ajax/getChildAddressHierarchyEntries.form?searchString=" + _selregion
				}).
				success(function(data,status,headers,config){
					return $scope.x_zones = data
				}).
				error(function(data,status,headers,config){
					console.log(data)
					});
			};
		//end of zone method
		
		$scope.blurCallback = function(e) {
			//2006-12-07 is the date to convert to Gregorian yy-mm-dd
			$scope.ethiopiandate =JudyTest(e.target.value) 
			//alert('Goodbye. Input content is: ' + e.target.value);
			};
			
		$scope.clearDateFields = function(e){
			$scope.ethiopiandate = ''
		};
		
				
		$scope.addTodo = function(){
			ids = $scope.Regions.length + 1
			$scope.Regions.push({
				'id':ids,
				'displayName':$scope.todoText
			});
			$scope.todoText = '';
			
		};			
		
		//method to save patient 
		$scope.save = function(){		
			//declare variables 
			regobj = $scope
			//console.log(JSON.stringify($scope.registration)) ;
			
			myregobj = $scope.registration
						
			//check if patient had Ethiopian registration filled 
			if ($scope.ethiopiandate != ''){
				//bdate = EthToGreg($scope.ethiopiandate)
				bdate = $scope.ethiopiandate
			}
			else if (myregobj.hasOwnProperty('DOB')){
				//format date to yyyy-mm-dd
				var gregDate = $scope.registration.DOB.split('-');
				var yy = gregDate[2]
			    var mm = gregDate[1]
			    var dd = gregDate[0]
				bdate= yy + '-' + mm + '-' + dd
			};
			
			//check if an estimate age was used 
				
			if (myregobj.hasOwnProperty('estimatedAge')){
				estimatedAge = $scope.registration.estimatedAge
				today = new Date();
				//console.log(today)
				dd = today.getDate();
				mm = today.getMonth() + 1;
				yyyy = today.getFullYear();
				newyear = yyyy - estimatedAge
				bdate = newyear + '-' + mm + '-' + dd;
			};
			
			var names = [{
				'givenName':$scope.registration.firstName,
				'familyName':$scope.registration.lastName,
				'middleName':$scope.registration.middleName,
				'preferred':'False'
			}];
			
			var addresses = [{
				'preferred':'True',
				'stateProvince': $scope.registration.region.name,
				'address1': $scope.registration.zone.name,
				'countyDistrict':$scope.registration.woreda,
				'cityVillage':$scope.registration.kebele,
				'address2':$scope.registration.ketena,
				'address3':$scope.registration.subcity,
				'address4':$scope.registration.house
							
			}];
			
			var personpayload = {
					'names':names,
					'addresses':addresses,
					'birthdate':bdate,
					'gender':$scope.registration.gender,
					//'birthdateEstimated':$scope.registration.exactOrEstimate,
					//'age':$scope.registration.estimatedAge,					
					'dead':$scope.registration.dead,
					'causeOfDeath':"5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
					'deathDate':$scope.registration.deathDate,			
			};
						
			var ptatts = {
							'value':$scope.registration.tel,
							'attributeType':'14d4f066-15f5-102d-96e4-000c29c2a5d7'
					};
			
			var identifier = [{
					'identifier':$scope.autoidentifier,
					'identifierType':'05a29f94-c0ed-11e2-94be-8c13b969e334',// openmrs id
					'location': '8d6c993e-c2cc-11de-8d13-0010c6dffd0f', //  location in standalone
					//'6351fcf4-e311-4a19-90f9-35667d99a8af', //registration desk 
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
						
						//add patient attributes
						$http({method:'POST',
							url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + ptid + '/attribute',
							data:JSON.stringify(ptatts),
							headers:{'Content-Type':'application/json'}
						}).
							success(function(data,status,headers,config){
								console.log(data)
							}).
							error(function(data,status,headers,config){
								console.log(data)
							});
						
						//redirect page
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
					url: '/' + OPENMRS_CONTEXT_PATH + "/module/idgen/generateIdentifier.form?source=1",
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
			
									
				
	}]);


