(function() {

	'use-strict';
	
	angular.module('NosliwYort', ['ui.router'])

		.config(function($urlRouterProvider, $stateProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider

				.state('home', {
					url: '/',
					templateUrl: '../tmp/home.html',
				})

				.state('projects', {
					url: '/projects'
					templateUrl: '../tmp/projects.html'
				})

				.state('projects.technical', {
					templateUrl: '../tmp/technical.html'
				})

				.state('projects.business', {
					templateUrl: '../tmp/business.html'
				})

				.state('resume', {
					url: '/resume'
					templateUrl: '../tmp/resume.html'
				})

				.state('contact', {
					url: '/contact'
					templateUrl: '../tmp/contact.html'
				});

		});

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['NosliwYort']);
	});

})();