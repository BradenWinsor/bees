angular.module("bees").directive("guess", function($state) {
  return{
    restrict: "EA",
    scope: {
      // matches: "="
    },
    link: function(scope, element, attributes){
      $(document).ready(function() {
          var matches = 0;
          var beeClicked = false;
          var beeColor;
          var flowerColor;
          var beeSelf;
          $(".bee").mousedown(function(){
            beeClicked = true;
             beeColor = $(this).attr('id');
             beeSelf = $(this);
          });
          $(document).mouseup(function(){
            beeClicked = false;
          });
                $(".flower").on("mouseup", function(){
                    flowerColor = $(this).attr('id');
                    if(beeColor === flowerColor){
                    beeSelf.hide();
                      matches++;
                      $("#matches").text(matches);
                  }
                  if(matches >= 4){
                    $state.go('victory');
                  }
          });
});
}
};

});
