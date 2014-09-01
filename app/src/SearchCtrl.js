angular.module('pingPongApp')
	.controller('SearchCtrl', function ($scope) {
		$scope.recipes = ["A", "List", "Of", "Recipes"];

		$scope.expand = function (){
			var detailDiv = $('.detail');
			detailDiv.css({'margin-top': 0});
		}
	});
