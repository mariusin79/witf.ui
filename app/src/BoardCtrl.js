angular.module('pingPongApp')
	.controller('BoardCtrl', function ($scope) {
		$scope.addIngredient = function (){
			if($scope.ingredient.length>0){
				$scope.ingredients.push($scope.ingredient);
				$scope.ingredient = '';
			}
		}
		$scope.ingredients = ["A", "List", "Of", "Ingredients"];
	});
