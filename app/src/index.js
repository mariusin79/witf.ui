angular.module('pingPongApp', ['ui.router'])
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
				templateUrl: 'src/controllers/frontpage/frontpage.html',
				controller: 'FrontpageCtrl'
			})
			.state('board', {
				abstract: true,
				templateUrl: 'partials/board.html',
			})
			.state('ingredients', {
				parent: 'board',
				url: '/:boardid',
				views: {
					'ingredients@board': {
						templateUrl: 'src/controllers/ingredients/ingredients.html',
						controller: 'IngredientCtrl'
					}
				}
			})
			.state('search', {
				parent: 'ingredients',
				views: {
					'search@board': {
						templateUrl: 'src/controllers/search/search.html',
						controller: 'SearchCtrl'
					}
				}
			})
			.state('suggest', {
				parent: 'search',
				views: {
					'suggest@board': {
						templateUrl: 'src/controllers/suggest/suggest.html',
						controller: 'SuggestCtrl'
					}
				}
			})
	});
