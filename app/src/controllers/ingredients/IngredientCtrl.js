angular.module('pingPongApp')
	.controller('IngredientCtrl', function ($scope, $state, $stateParams, boardState, Api, FoodConversation) {
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
		FoodConversation.get({id:$stateParams.boardid}).$promise.then(function(foodConversation){
				$scope.foodConversation = foodConversation;
			}, function(error) {

				if (error.status == 404)
				{
					$scope.foodConversation = new FoodConversation();
					$scope.foodConversation.$update({id: $stateParams.boardid});
				}
			});
	});
