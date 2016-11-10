/**
 * Created by urielmiranda on 09/11/16.
 */
(function(){
    'use strict';

    var hello = {
        template: "<h1>WELCOME THE SWAPI</h1> "
    };
    angular
        .module("starwars")
        .component("hello", hello)

})();
