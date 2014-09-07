angular.module('pingPongApp')
	.controller('BoardCtrl', function ($scope, Ingredients) {
		$scope.addIngredient = function (ingredient) {
			$scope.ingredients.push({name: ingredient});
		}

		$scope.ingredients = [
		];

		$scope.removeIngredient = function (ingredient) {
			var idx = $scope.ingredients.indexOf(ingredient);
			$scope.ingredients.splice(idx, 1);
		}

		// hack, move into directive
		$scope.collapse = function () {
			var detailDiv = $('.detail');
			detailDiv.css({'margin-top': 0 - detailDiv.height()});
		}
	});
