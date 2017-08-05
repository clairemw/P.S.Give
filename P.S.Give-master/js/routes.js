angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.wishlists', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/wishlists.html',
        controller: 'wishlistsCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.newList', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/newList.html',
        controller: 'newListCtrl'
      }
    }
  })

  .state('tabsController.newWishlist', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/newWishlist.html',
        controller: 'newWishlistCtrl'
      }
    }
  })

  .state('tabsController.listName', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/listName.html',
        controller: 'listNameCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page6')


});