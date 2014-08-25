var app = angular.module('soddoregistration',[]).
	controller('soddoRegistrationController',['$scope','$http','$window',function($scope,$http,$window,EthiopiantoGregorianConverter){
		$scope.items = ['ggg','jjjj']	
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
		
		$scope.addTodo = function(){
			$scope.items.push('back')
		};
		
	}]);

