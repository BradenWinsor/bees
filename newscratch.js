angular.module("bees").directive('newPosition', ['$document', function($document){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){
    $(document).ready(function(){
      var startX = 0, startY = 0, x = 0, y = 0;
      var allBees = [$('.bluebee'), $('.redbee'), $('.orangebee'), $('.purplebee')];
      var h = $(window).height();
      var w = $(window).width();
      var nh = Math.floor((Math.random() * 650)+1);
      var nw = Math.floor((Math.random() * 1400)+1);

// function randomSpot() {
      element.css({
        position: 'fixed',
        left: nw+'px',
        top: nh+'px',
        cursor: 'pointer'
      });
    // }
    //Without taking out the margin values on the css file, this will throw things off.
//top max range should be 650
//left max 0- 1000
// for (var i = 0; i < allBees.length; i++){
//   allBees[i].randomSpot();
// }

animateDiv();

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    // var h = $(window).height() - 250;
    // var w = $(window).width() - 250;
    // var nh = Math.floor(Math.random() * h);
    // var nw = Math.floor(Math.random() * w);
    h = $(window).height();
    w = $(window).width();
    nh = Math.floor((Math.random() * 650)+1);
    nw = Math.floor((Math.random() * 1000)+1);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = element.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    element.animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });
    element.on('mousedown', function(){
      return;
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


}]);
