// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    initPushwoosh();

    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();

    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.ajout', {
      url: '/ajout',
      views: {
        'tab-ajout': {
          templateUrl: 'templates/tab-ajout.html',
          controller: 'AjoutCtrl'
        }
      }
    })

    .state('tab.liste', {
      url: '/liste',
      views: {
        'tab-liste': {
          templateUrl: 'templates/tab-liste.html',
          controller: 'ListeCtrl'
        }
      }
    })

    .state('tab.param', {
      url: '/parametre',
      views: {
        'tab-param': {
          templateUrl: 'templates/tab-param.html',
          controller: 'ParamCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('tab/parametre');

});

function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;

    //set push notification callback before we initialize the plugin
    document.addEventListener('push-notification', function(event) {
                                //get the notification payload
                                var notification = event.notification;

                                //display alert to the user for example
                                alert(notification.aps.alert);

                                //clear the app badge
                                pushNotification.setApplicationIconBadgeNumber(0);
                            });

    //initialize the plugin
    pushNotification.onDeviceReady({pw_appid:"47168-617AA"});

    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var deviceToken = status['deviceToken'];
            console.warn('registerDevice: ' + deviceToken);
        },
        function(status) {
            console.warn('failed to register : ' + JSON.stringify(status));
            alert(JSON.stringify(['failed to register ', status]));
        }
    );

    //reset badges on app start
    pushNotification.setApplicationIconBadgeNumber(0);
}
