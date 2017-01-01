function createStringFromArray(array) {
    var output = '';
    angular.forEach(array, function (object) {
        angular.forEach(object, function (value) {
            output += value ;
        });
    });
    return output;
}

angular.module('egApp.services',[])
    .factory('Client',function($resource){
        return $resource('http://localhost/egdemo/web/app_dev.php/api/client/:id',{id:'@_id'},{
            update: {
                method: 'PUT'
            }, query:  {
                    method:'GET',
                isArray:true
            }, get:  {
                method:'GET',
                isArray:true
            }


        });

    }).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
})

    .factory('Address',function($resource){
        return $resource('http://localhost/egdemo/web/app_dev.php/api/client/sa/:id',{id:'@_id'},{
            update: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            }
            ,
            save: {
                method: 'POST',
                params: {
                    id: '@id'
                }
            }
            ,
            delete: {
                method: 'DELETE',
                params: {
                    id: '@id'
                },
                get:
                    {
                        method:'GET',
                        params: {
                            id: '@id'
                        },
                        isArray: true
                    },
             query:  {
                method:'GET',
                isArray:true
            }


            }

        });

    }).service('popupService',function($window){

    this.showPopup=function(message){
        return $window.confirm(message);

    }
});

angular.module('egApp.services').service('popupService',['$window',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
}])



angular.module('egApp.services').service('popupService',['$window',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
}])
;

