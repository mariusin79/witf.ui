angular.module('pingPongApp')
	.controller('IngredientCtrl', function ($scope, boardState, Api) {
		$scope.boardState = boardState;

		$scope.addIngredient = function (ingredient) {
			boardState.ingredients.push({name: ingredient});
		}

		$scope.removeIngredient = function (ingredient) {
			var idx = boardState.ingredients.indexOf(ingredient);
			boardState.ingredients.splice(idx, 1);
		}

		$scope.search = function (){
			boardState.recipes = null;
			Api.searchRecipes(_.pluck(boardState.ingredients, 'name'))
				.then(function(data){
					boardState.recipes = data;
				});
		};
	});
