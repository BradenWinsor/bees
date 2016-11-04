angular.module("bees").directive("grow", function(){
  return{
    restrict: "EA",
    link: function(scope, element, attributes){
      $(document).ready(function() {
          $(".flower").animate({'bottom': "-43px"}, 1000);

        });
    }

  };

});
