angular.module("bees").directive('randomflight', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){
    $(document).ready(function(){
      animateDiv();

      function makeNewPosition(){

          // Get viewport dimensions (remove the dimension of the div)
          var h = $(window).height() - 250;
          var w = $(window).width() - 250;
          var nh = Math.floor(Math.random() * h);
          var nw = Math.floor(Math.random() * w);

          return [nh,nw];

      }

      function animateDiv(){
          var newq = makeNewPosition();
          var oldq = $('.flyer').offset();
          var speed = calcSpeed([oldq.top, oldq.left], newq);

          $('.flyer').animate({ top: newq[0], left: newq[1] }, speed, function(){
            animateDiv();
          });

      }

      function calcSpeed(prev, next) {

          var x = Math.abs(prev[1] - next[1]);
          var y = Math.abs(prev[0] - next[0]);

          var greatest = x > y ? x : y;

          var speedModifier = 0.1;

          var speed = Math.ceil(greatest/speedModifier);

          return speed;

      }


  }); //document ready closing

    }

  };


});
