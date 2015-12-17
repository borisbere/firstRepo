app.controller("MainController", ["$scope", function($scope) 
    {
	    $scope.titles= 
	    [
		      {
		      	name: "corrientes",
		       province: "corrientes1" 
		      },
		       {
		       	name: "Rocky V", 
		        province: "Reluctantly retired from boxing and back from riches to rags, Rocky takes on a new protege who betrays him"
		       },
		       {
		         name: "Godzilla",
		         province: "An enormous, radioactively mutated lizard runs rampant in Manhattan."
		       },
		       {
		         name: "Rambo",
		         province: "Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of workers who were kidnapped"
		        }
	      ]
	      $scope.addMovie= function(){
	      	$scope.titles.push({name:$scope.titleBox, details:$scope.detailBox})
	      	$scope.titleBox= "";
	      	$scope.detailBox="";
	      };
	      $scope.removeMovie= function(title){
	      	var i = $scope.titles.indexOf(title)
	      	$scope.titles.splice(i,1);
	      }
	  }]);
