function StaffController(){
  var vm = this;

  this.changeName = function (){
    vm.name = "Something else!"
  }
  vm.name = "Doug"
  vm.email = "derp2@aol.com"
  vm.phone = "585 555 5555"
}

angular
  .module('app')
  .controller('StaffController', StaffController);
