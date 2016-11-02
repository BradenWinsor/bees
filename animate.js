angular.module("bees").directive("animate", function() {
  return{
    restrict: "EA",
    link: function(scope, element, attributes){
      $(document).ready(function() {
          $(".bigsun").animate({'right': "1000px"}, 1000);
        });


        // animate({top: "150px"}, 2000);
        //   $(".bigsun").click(function() {
        //       $(this).hide(1000);
        //   });

      //
      // });
    }

  };


});
