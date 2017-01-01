angular.module('egApp.controllers',[])
    .controller('ClientListController',
    function($scope,$state,popupService,$window,Client){
    $scope.clients=Client.query();

}).controller('ClientViewController',
    function($scope,$stateParams,popupService,Client){
    $scope.addresses=Client.get({id:$stateParams.id});
    $scope.clientid=$stateParams.id;

}).controller('AddressCreateController',
    function($scope,$state,$stateParams,popupService,Address){
        $scope.address=new Address();
        $scope.addAddress=function(params){

                $scope.address.$save(params,
                    function(resp,header){
                       popupService.showPopup(createStringFromArray(resp));

                        $state.go('listAddress',{id:$stateParams.id});
                        //popupService.showPopup(resp);
                    },
                    function(err){
                        popupService.showPopup(createStringFromArray(err.data));
                        //popupService.showPopup(createStringFromArray(err));
                    });

        }
        $scope.loadAddress=function(){
            $scope.address.id = $stateParams.id;
        };
        $scope.loadAddress();

}).controller('AddressEditController',
    function($scope,$state,popupService,$window,$stateParams,Address){

                $scope.deleteAddress=function(params) {
                    if(popupService.showPopup('The record will be deleted, are you sure?')) {

                        $scope.address.$delete(params,
                            function (resp, header) {
                                //   popupService.showPopup(createStringFromArray(resp));
                                $state.go('clients');
                            },
                            function (err) {
                                popupService.showPopup(createStringFromArray(err.data));
                            });
                    }

                }
        

       $scope.editAddress=function(params){
           $scope.address.$update(params,
                function(resp,header){
                    $state.go('clients');
                },
                function(err){
                    popupService.showPopup(createStringFromArray(err.data));
                });
        }
        $scope.loadAddress=function(){
        $scope.address=Address.get({id:$stateParams.id});
    };
    $scope.loadAddress();
});