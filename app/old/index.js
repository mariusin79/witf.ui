angular.module('pingPongApp', ['ui.router', 'ngResource'])
	.constant('apiUrl', 'http://api.m0f0.net/api')
	.value('boardState', {
		ingredients: [
			{name: 'ost'}
		],
		recipes: null,
		getSelectedRecipes: function () {
			if (!this.recipes) {
				return [];
			}
			return this.recipes.filter(function (recipe) {
				return recipe.selected;
			});
		}
	})
	.config(function ($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise('/');
		//
		// Now set up the states
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'old/controllers/frontpage/frontpage.html',
				controller: 'FrontpageCtrl'
			})
			.state('board', {
				abstract: true,
				templateUrl: '../partials/board.html',
			})
			.state('ingredients', {
				parent: 'board',
				url: '/:boardid',
				views: {
					'ingredients@board': {
						templateUrl: 'old/controllers/ingredients/ingredients.html',
						controller: 'IngredientCtrl'
					}
				}
			})
			.state('search', {
				parent: 'ingredients',
				views: {
					'search@board': {
						templateUrl: 'old/controllers/search/search.html',
						controller: 'SearchCtrl'
					}
				}
			})
			.state('suggest', {
				parent: 'search',
				views: {
					'suggest@board': {
						templateUrl: 'old/controllers/suggest/suggest.html',
						controller: 'SuggestCtrl'
					}
				}
			})
	});
