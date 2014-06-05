var app = angular.module('soddoRegistration',['ui.bootstrap']).
	controller('soddoRegistrationController',['$scope','$http',function($scope,$http){
		$scope.makepayloads = function(){
			var names = [{'givenname':$scope.registration.firstName,
						'familyName':$scope.registration.lastName,
						'middleName':$scope.registration.middleName
			}];
			
			//method for calendar conversion and process DOB
			// method to 
			var personpayload = {
					'names':names,
					'birthdate':$scope.registration.DOB,
					'gender':$scope.registration.gender,
					'dead':$scope.registration.dead,
			}
		};
	}]);