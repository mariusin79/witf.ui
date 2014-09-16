angular.module('pingPongApp')
	.controller('IngredientCtrl', function ($scope, boardState, Api) {
		$scope.ingredients = boardState.ingredients;
		$scope.addIngredient = function (ingredient) {
			$scope.ingredients.push({name: ingredient});
		}

		$scope.removeIngredient = function (ingredient) {
			var idx = $scope.ingredients.indexOf(ingredient);
			$scope.ingredients.splice(idx, 1);
		}

		$scope.search = function (){
			boardState.recipes.length = 0;
			Api.searchRecipes(_.pluck(boardState.ingredients, 'name'))
				.then(function(data){
					_.merge(boardState.recipes, data);
				});
		};
	});
