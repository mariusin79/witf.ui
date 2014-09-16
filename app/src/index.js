angular.module('pingPongApp', ['ui.router'])
	.constant('apiUrl', 'http://api.m0f0.net/api')
	.config(function ($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise('/');
		//
		// Now set up the states
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'src/controllers/frontpage/frontpage.html',
				controller: 'FrontpageCtrl'
			})
			.state('board', {
				abstract: true,
				templateUrl: 'partials/board.html',
				resolve: {
					boardState: function () {
						var ingredients = [{name: 'ost'}];
						return {
							ingredients: ingredients,
							recipes: null,
							getSelectedRecipes: function () {
								if(!this.recipes){
									return [];
								}
								return this.recipes.filter(function (recipe) {
									return recipe.selected;
								});
							}
						};
					}
				}
			})
			.state('board.detail', {
				url: '/board/:boardid',
				views: {
					detail: {
						templateUrl: 'src/controllers/ingredients/ingredients.html',
						controller: 'IngredientCtrl'
					},
					search: {
						templateUrl: 'src/controllers/search/search.html',
						controller: 'SearchCtrl'
					}
				}
			})
	});
