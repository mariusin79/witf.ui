angular.module('pingPongApp')
	.controller('BoardCtrl', function ($scope) {
		$scope.addIngredient = function (){
			if($scope.ingredient.length>0){
				$scope.ingredients.push({name: $scope.ingredient});
				$scope.ingredient = '';
			}
		}

		$scope.ingredients = [
			{name: "A"},
			{name: "List"},
			{name: "Of"},
			{name: "Ingredients"}
		];

		$scope.removeIngredient = function(ingredient){
			var idx = $scope.ingredients.indexOf(ingredient);
			$scope.ingredients.splice(idx, 1);
		}

		// hack, move into directive
		$scope.collapse = function (){
			var detailDiv = $('.detail');
			detailDiv.css({'margin-top': 0 - detailDiv.height()});
		}
	});
