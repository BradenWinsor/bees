  angular.module("bees").directive("winning", function() {
    return{
      restrict: "EA",
      link: function(scope, element, attributes){
        $(document).ready(function() {
            //hide a "you win banner that will be shown after the animation"
            $(".flower").animate({'left': "4000px"}, 3000);
          });
      }

    };


  });
