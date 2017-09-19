var $scope = {};

(function() {
  var bindClasses = ["name", "age"];
  var showInfoButton = document.getElementById("displayInformation").onclick = function() {
    alert("Name: " + $scope.name + "/" + "Age: " + $scope.age);
};
  var attachEvent = function(classNames) {
    classNames.forEach(function(className) {
      var elements = document.getElementsByClassName(className);
      for (var index in elements) {
        elements[index].onkeyup = function() {
          for (var index in elements) {
            elements[index].value = this.value;
          }
        };
      }
      Object.defineProperty($scope, className, {
        set: function(newValue) {
          for (var index in elements) {
            elements[index].value = newValue;
          }
        }
      });
    });
  };
  attachEvent(bindClasses);
})();
