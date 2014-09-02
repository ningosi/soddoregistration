var app = angular.module('soddoregistration',[]).
	controller('soddoRegistrationController',['$scope','$http','$window',
	                                          function($scope,$http,$window){		
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
		
		// Address selector 
		$scope.Regions = [
		     {
		    	'id':0,
		    	'displayName':'Addis Ababa'
		     },
		     {
		    	 'id':1,
			     'displayName':'Afar'
		     },
		     {
		    	 'id':2,
			     'displayName':'Amhara'
		     },		     
		     {
		    	 'id':3,
			     'displayName':'Oromia'
		     },		     
		     {
		    	 'id':4,
			     'displayName':'Benishangul-Gumuz'
		     },		     
		     {
		    	 'id':5,
			     'displayName':'Dire Dawa'
		     },
		     {
		    	 'id':6,
			     'displayName':'Gambela'
		     },		 
		     {
		    	 'id':7,
			     'displayName':'Harari'
		     },
		     {
		    	 'id':8,
			     'displayName':'Tigray'
		     },		     {
		    	 'id':9,
			     'displayName':'Southern Nations'
		     },
		     {
		    	 'id':10,
			     'displayName':'Somali'
		     },
		];
		
		$scope.Zones = [
		    // Addis Ababa            
		    {
		    	'id':0,
		    	'displayName':'Addis Ababa',
		    	'parentId':0
		    },
		    //Afar
		    {
		    	'id':1,
		    	'displayName':'Administrative Zone 1',
		    	'parentId':1
		    },	
		    {
		    	'id':2,
		    	'displayName':'Administrative Zone 2',
		    	'parentId':1
		    },
		    {
		    	'id':3,
		    	'displayName':'Administrative Zone 3',
		    	'parentId':1
		    },
		    {
		    	'id':4,
		    	'displayName':'Administrative Zone 4',
		    	'parentId':1
		    },	
		    {
		    	'id':5,
		    	'displayName':'Administrative Zone 5',
		    	'parentId':1
		    },		
		    // Amhara  region
		    {
		    	'id':6,
		    	'displayName':'Agew Awi',
		    	'parentId':2
		    },			    {
		    	'id':7,
		    	'displayName':'Bahir Dar',
		    	'parentId':2
		    },			    {
		    	'id':8,
		    	'displayName':'East Gojjam',
		    	'parentId':2
		    },			    {
		    	'id':9,
		    	'displayName':'North Gondar',
		    	'parentId':2
		    },			    {
		    	'id':10,
		    	'displayName':'North Shewa',
		    	'parentId':2
		    },			    {
		    	'id':11,
		    	'displayName':'North Wollo',
		    	'parentId':2
		    },		
		    // Oromia region			  
		    {
		    	'id':24,
		    	'displayName':'Adama',
		    	'parentId':3
		    },		    
		    {
		    	'id':25,
		    	'displayName':'Arsi',
		    	'parentId':3
		    },
		    {
		    	'id':26,
		    	'displayName':'Bale',
		    	'parentId':3
		    },		    {
		    	'id':27,
		    	'displayName':'Borena',
		    	'parentId':3
		    },		    
		    {
		    	'id':28,
		    	'displayName':'Burayu',
		    	'parentId':3
		    },
		    {
		    	'id':29,
		    	'displayName':'East Hararghe',
		    	'parentId':3
		    },   {
		    	'id':30,
		    	'displayName':'East Shewa',
		    	'parentId':3
		    },   {
		    	'id':31,
		    	'displayName':'East Walega',
		    	'parentId':3
		    },   {
		    	'id':32,
		    	'displayName':'Guji',
		    	'parentId':3
		    },
		    {
		    	'id':33,
		    	'displayName':'Horo Gudru Welega',
		    	'parentId':3
		    },{
		    	'id':34,
		    	'displayName':'Illubabor',
		    	'parentId':3
		    },{
		    	'id':35,
		    	'displayName':'Jimma',
		    	'parentId':3
		    },{
		    	'id':36,
		    	'displayName':'Jimma Special Zone',
		    	'parentId':3
		    },
		    {
		    	'id':37,
		    	'displayName':'Kelem Welega Zone',
		    	'parentId':3
		    },{
		    	'id':38,
		    	'displayName':'North Shewa',
		    	'parentId':3
		    },{
		    	'id':39,
		    	'displayName':'Oromia Special Zone Surrounding Finfinne',
		    	'parentId':3
		    },{
		    	'id':40,
		    	'displayName':'Southwest Shewa',
		    	'parentId':3
		    },
		    {
		    	'id':12,
		    	'displayName':'South Gondar',
		    	'parentId':3
		    },			    {
		    	'id':13,
		    	'displayName':'South Wollo',
		    	'parentId':3
		    },
		    {
		    	'id':41,
		    	'displayName':'West Arsi',
		    	'parentId':3
		    },
		    {
		    	'id':42,
		    	'displayName':'West Hararghe',
		    	'parentId':3
		    },{
		    	'id':43,
		    	'displayName':'West Shewa',
		    	'parentId':3
		    },{
		    	'id':44,
		    	'displayName':'West Welega',
		    	'parentId':3
		    },
		    {
		    	'id':14,
		    	'displayName':'Wag Hemra',
		    	'parentId':3
		    },	
		    {
		    	'id':15,
		    	'displayName':'West Gojjam',
		    	'parentId':3
		    },
		    // Benishangui-Gumuz
		    {
		    	'id':16,
		    	'displayName':'Asosa',
		    	'parentId':4
		    },	
		    {
		    	'id':17,
		    	'displayName':'Kamashi',
		    	'parentId':4
		    },			    {
		    	'id':18,
		    	'displayName':'Metekel',
		    	'parentId':4
		    },	
		    // Dire Dawa
		    {
		    	'id':19,
		    	'displayName':'Dire Dawa',
		    	'parentId':5
		    },	
		    // Gambela
		    {
		    	'id':20,
		    	'displayName':'Administrative Zone 1',
		    	'parentId':6
		    },	
		    {
		    	'id':21,
		    	'displayName':'Administrative Zone 2',
		    	'parentId':6
		    },		    {
		    	'id':22,
		    	'displayName':'Administrative Zone 3',
		    	'parentId':6
		    },
		    //Harari
		    {
		    	'id':23,
		    	'displayName':'Harari',
		    	'parentId':7
		    },
		    //Somali Region
		    {
		    	'id':45,
		    	'displayName':'Afder',
		    	'parentId':10
		    },
		    {
		    	'id':46,
		    	'displayName':'Jarar',
		    	'parentId':10
		    },		    {
		    	'id':47,
		    	'displayName':'Nogob',
		    	'parentId':10
		    },		    {
		    	'id':48,
		    	'displayName':'Shabelle',
		    	'parentId':10
		    },		    {
		    	'id':49,
		    	'displayName':'Faafan',
		    	'parentId':10
		    },		    {
		    	'id':50,
		    	'displayName':'Korahe',
		    	'parentId':10
		    },
		    {
		    	'id':51,
		    	'displayName':'Liben',
		    	'parentId':10
		    },{
		    	'id':52,
		    	'displayName':'Sitti',
		    	'parentId':10
		    },
		    {
		    	'id':53,
		    	'displayName':'Doolo',
		    	'parentId':10
		    },
		    // Southern Nations
		    {
		    	'id':54,
		    	'displayName':'Bench Maji',
		    	'parentId':9
		    },
		    {
		    	'id':55,
		    	'displayName':'Dawro',
		    	'parentId':9
		    },		    {
		    	'id':56,
		    	'displayName':'Debub(South)Omo',
		    	'parentId':9
		    },		    {
		    	'id':57,
		    	'displayName':'Gamo Gofa',
		    	'parentId':9
		    },		    {
		    	'id':58,
		    	'displayName':'Gedeo',
		    	'parentId':9
		    },		    {
		    	'id':59,
		    	'displayName':'Gurage',
		    	'parentId':9
		    },		    {
		    	'id':60,
		    	'displayName':'Hadiya',
		    	'parentId':9
		    },		    {
		    	'id':61,
		    	'displayName':'Kembata Tembaro',
		    	'parentId':9
		    },		    {
		    	'id':62,
		    	'displayName':'Keffa',
		    	'parentId':9
		    },		    {
		    	'id':63,
		    	'displayName':'Keficho Shekicho',
		    	'parentId':9
		    },		    {
		    	'id':64,
		    	'displayName':'Sheka',
		    	'parentId':9
		    },
		    {
		    	'id':65,
		    	'displayName':'Sidama',
		    	'parentId':9
		    },   {
		    	'id':66,
		    	'displayName':'Sita',
		    	'parentId':9
		    },   {
		    	'id':67,
		    	'displayName':'Wolayita',
		    	'parentId':9
		    },   {
		    	'id':68,
		    	'displayName':'Alaba special Woreda',
		    	'parentId':9
		    },   {
		    	'id':69,
		    	'displayName':'Amaro special Woreda',
		    	'parentId':9
		    },
		    {
		    	'id':70,
		    	'displayName':'Basketo special Woreda',
		    	'parentId':9
		    },{
		    	'id':71,
		    	'displayName':'Burji special Woreda',
		    	'parentId':9
		    },{
		    	'id':72,
		    	'displayName':'Dirashe special Woreda',
		    	'parentId':9
		    },
		    {
		    	'id':73,
		    	'displayName':'Konso special Woreda',
		    	'parentId':9
		    },{
		    	'id':74,
		    	'displayName':'Konta special Woreda',
		    	'parentId':9
		    },
		    {
		    	'id':75,
		    	'displayName':'Yem special Woreda',
		    	'parentId':9
		    },
		    // Tigray region
		    {
		    	'id':76,
		    	'displayName':'Central Tigray',
		    	'parentId':8
		    },
		    {
		    	'id':77,
		    	'displayName':'East Tigray',
		    	'parentId':8
		    },  {
		    	'id':78,
		    	'displayName':'Mekele',
		    	'parentId':8
		    },  {
		    	'id':79,
		    	'displayName':'South Tigray',
		    	'parentId':8
		    },
		    {
		    	'id':80,
		    	'displayName':'West Tigray',
		    	'parentId':8
		    },
		];
		
		//method to save patient 
		$scope.save = function(){		
			//declare variables 
			regobj = $scope
			console.log(regobj) ;					
			myregobj = $scope.registration
						
			//check if patient had Ethiopian registration filled 
			if ($scope.ethiopiandate != ''){
				//bdate = EthToGreg($scope.ethiopiandate)
				bdate = $scope.ethiopiandate
			}
			else if (myregobj.hasOwnProperty('DOB')){
				bdate = $scope.registration.DOB;
			};
			//check if an estimate age was used 
				
			if (myregobj.hasOwnProperty('estimatedAge')){
				estimatedAge = $scope.registration.estimatedAge
				today = new Date();
				console.log(today)
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
				'stateProvince': $scope.registration.region.displayName,
				'address1': $scope.registration.zone.displayName,
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
			
		
	}]);

