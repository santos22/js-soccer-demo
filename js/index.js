// // target elements with the "draggable" class
// var element = document.getElementById('drag-1'), x = 0, y = 0;

// interact(element)
//   .draggable({
//     snap: {
//       targets: [
//         interact.createSnapGrid({ x: 30, y:30 })
//       ],
//       range: 10,
//       relativePoints: [ { x: 0, y: 0 } ]
//     },
//     // enable inertial throwing
//     inertia: true,
//     // keep the element within the area of it's parent
//     restrict: {
//       restriction: element.parentNode,
//       endOnly: true,
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//     },

//     // call this function on every dragmove event
//     onmove: dragMoveListener,
//   });

// function dragMoveListener (event) {
//     var target = event.target,
//         // keep the dragged position in the data-x/data-y attributes
//         x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
//         y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

//         //x += event.dx;
//         //y += event.dy;

//     // translate the element
//     target.style.webkitTransform =
//     target.style.transform =
//       'translate(' + x + 'px, ' + y + 'px)';

//     // update the posiion attributes
//     target.setAttribute('data-x', x);
//     target.setAttribute('data-y', y);
//   }



var element = document.getElementById('drag-1'),
    x = 0, y = 0;

interact(element)
  .draggable({
    snap: {
      targets: [
        interact.createSnapGrid({ x: 30, y: 30 })
      ],
      range: Infinity,
      relativePoints: [ { x: 0, y: 0 } ]
    },
    inertia: true,
    restrict: {
      restriction: element.parentNode,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      endOnly: true
    }
  })
  .on('dragstart', function (event) {
    x += event.dx;
    y += event.dy;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';
  });

// possible snap and drag code
// https://github.com/taye/interact.js/issues/79