angular.module('patientcontactdetailsApp',[])
.controller('patientcontactController',function($scope,$http,$window){
	//method to get the location data - the Regions section
	$http({method:'GET',
		url: '/' + OPENMRS_CONTEXT_PATH + "/module/addresshierarchy/ajax/getChildAddressHierarchyEntries.form?"
	}).
	success(function(data,status,headers,config){
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
		
		$scope.init = function(personUuid) {
			//get the person uuid
			$scope.thisPersonUuid = personUuid;
			
			//get the address for patient 			
			$http({method:'GET',
				url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + personUuid + '/address',
				headers:{'Content-Type':'application/json'}
				}).
			success(function(data,status,headers,config){
				person_address = data['results'][0];
				$scope.region = person_address['stateProvince']
				$scope.zone = person_address['address1']
				$scope.woreda = person_address['countyDistrict']
				$scope.kebele = person_address['cityVillage']
				$scope.ketena = person_address['address2']
				$scope.subcity = person_address['address3']
				$scope.house = person_address['address4']
			}).
			error(function(data,status,headers,config){
			//console.log(data)
			});	
			
			//get the tel
			$http({method:'GET',
				url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + personUuid + '/attribute',
				headers:{'Content-Type':'application/json'}
				}).
			success(function(data,status,headers,config){
				//console.log(data)
				//check if the attribute is the telephone number then get the value
	    			for (i = 0; i < data['results'].length; i++) {
	    				if (data['results'][0]['attributeType']['display'] = "Telephone Number")
	    					$scope.tel = data['results'][0]['value']
	    			}
			}).
			error(function(data,status,headers,config){
			//console.log(data)
			});	
				
			}; //end of init method	
			
		//cancel method
		$scope.cancel = function(personUuid){
				//redirect page
				newurl = '/' + OPENMRS_CONTEXT_PATH + '/coreapps/clinicianfacing/patient.page?patientId=' + personUuid;
				$window.location.href= newurl;
			}
			
		//Save method
		$scope.save = function(personUuid){
			//rest objects
			address_payload = [{
				'stateProvince': $scope.region.name,
				'address1': $scope.zone.name,
				'countyDistrict':$scope.woreda,
				'cityVillage':$scope.kebele,
				'address2':$scope.ketena,
				'address3':$scope.subcity,
				'address4':$scope.house
							
			}];
			
			// tel
			ptatts = {
					'value':$scope.tel,
					'attributeType':'14d4f066-15f5-102d-96e4-000c29c2a5d7'
			};
	
			//save tel
			$http({method:'POST',
				url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + personUuid + '/attribute',
				data:JSON.stringify(ptatts),
				headers:{'Content-Type':'application/json'}
			}).
				success(function(data,status,headers,config){
					console.log('-----')
					console.log(data)
				}).
				error(function(data,status,headers,config){
					console.log(data)
				});
			
			//save address
			// get the uuid of the address
			$http({method:'GET',
				url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + personUuid + '/address',
				headers:{'Content-Type':'application/json'}
				}).
			success(function(data,status,headers,config){
				myperson_address = data['results'][0];
				myuuid = myperson_address['uuid']
				//save
				$http({method:'POST',
					url: '/' + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + personUuid + '/address/' +myuuid,
					data:JSON.stringify(address_payload),
					headers:{'Content-Type':'application/json'}
				}).
					success(function(data,status,headers,config){
						console.log(data)
						console.log('++++++')
					}).
					error(function(data,status,headers,config){
						console.log(data)
					});	
			}).
			error(function(data,status,headers,config){
			//console.log(data)
			});	
			
			//redirect page
			newurl = '/' + OPENMRS_CONTEXT_PATH + '/coreapps/clinicianfacing/patient.page?patientId=' + personUuid;
			$window.location.href= newurl;
		}
		
});