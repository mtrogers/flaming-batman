'use strict';

//Setting up route
angular.module('transdeck').config(['$stateProvider',
	function($stateProvider) {
		// Transdeck state routing
		$stateProvider.
		state('transdeckroute', {
			url: '/transdeck',
			templateUrl: 'modules/transdeck/views/transdeckview.client.view.html'
		});
	}
]);