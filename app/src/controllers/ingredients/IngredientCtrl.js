angular.module('pingPongApp')
	.controller('IngredientCtrl', function ($scope, $stateParams, boardState, Api, FoodConversation) {
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
		FoodConversation.get({id:$stateParams.boardid}).$promise.then(function(foodConversation){
				$scope.foodConversation = foodConversation;
			}, function(error) {

				if (error.status == 404)
				{
					$scope.foodConversation = new FoodConversation();
					$scope.foodConversation.$update({id: $stateParams.boardid}).then(null, function(error) {
				
					});
				}
			});
	});
