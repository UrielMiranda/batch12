/**
 * Created by urielmiranda on 09/11/16.
 */
(function(){
    'use strict';

    angular
        .module("starwars")
        .config(config);


    function config($routeProvider,$locationProvider){
        $routeProvider
            .when('/people',{
                template: `<star-wars category="'people'"></star-wars>`
            })
            .when('/planets',{
                template: `<star-wars category="'planets'"></star-wars>`
            })
            .when('/starships',{
                template: `<star-wars category="'starships'" ></star-wars>`
            })
            .when('/',{
                template: `<hello></hello>`
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);

    }

})();
