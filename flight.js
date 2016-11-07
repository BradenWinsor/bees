angular.module("bees").directive('randomflight', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){
    $(document).ready(function(){
      var h = $(window).height() - 250;
      var w = $(window).width() - 250;
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

function randomSpot() {
      $('.flyer').css({
        position: 'fixed',
        right: nw,
        top: nh,
        animation: 'none'
      });
    }



      function animateDiv(){
        var newq = randomSpot();
        var oldq = $('.flyer').offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);

        $('.flyer').animate({ top: newq, left: newq}, speed, function(){
      animateDiv();
        });

}
    animateDiv();
    // element.on('mousedown', function(){
    //   $(this).removeClass('flyer');
    // });


  }); //document ready closing

    }

  };


});
