function ContactController(){
  var vm = this;

  this.changeName = function (){
    vm.name = "Something else!"
  }
  vm.name = "Alfred"
  vm.email = "derp@aol.com"
  vm.phone = "555 555 5555"
}

angular
  .module('app')
  .controller('ContactController', ContactController);
