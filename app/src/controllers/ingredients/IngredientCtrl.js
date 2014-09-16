angular.module('pingPongApp')
	.controller('IngredientCtrl', function ($scope, $state, boardState, Api) {
		$scope.boardState = boardState;

		$scope.addIngredient = function (ingredient) {
			boardState.ingredients.push({name: ingredient});
		}

		$scope.removeIngredient = function (ingredient) {
			var idx = boardState.ingredients.indexOf(ingredient);
			boardState.ingredients.splice(idx, 1);
		}

		$scope.search = function (){
			$state.go('search', null, {reload: true});
		};
	});
