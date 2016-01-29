var rotateThisImage;

function draw() {
	var canvas = new fabric.Canvas('canvas');

	var test = fabric.Image.fromURL("http://imgh.us/soccer_field.svg", function(oImg) {
		// rotation of SVG soccer field
		oImg.set('selectable', false);
		oImg.setAngle(90);
		canvas.add(oImg);
		canvas.centerObject(oImg);
		//oImg.lockMovementX = true;
		//oImg.lockMovementY = true;

		// canvas.add(oImg);
		// canvas.centerObject(oImg);
		// canvas.renderAll();
		// rotateThisImage = oImg;
		// rotateThisImage.setAngle(90);


		canvas.renderAll();

        var player1 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 100, top: 300, hasControls: false
		});

	    var text1 = new fabric.IText('Giroud', { 
		  fontFamily: 'arial black',
		  left: player1.left, 
		  top: player1.top,
		  hasControls: false
		});

		// text1.animate('left', 100, {
		//   onChange: canvas.renderAll.bind(canvas),
		//   duration: 1000,
		//   easing: fabric.util.ease.easeInCubic
		// });

		var player2 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 350, top: 300, hasControls: false
		});

	    var text2 = new fabric.IText('Walcott', { 
		  fontFamily: 'arial black',
		  left: player2.left, 
		  top: player2.top,
		  hasControls: false
		});

		var player3 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 100, top: 500, hasControls: false
		});

	    var text3 = new fabric.IText('Ozil', { 
		  fontFamily: 'arial black',
		  left: player3.left, 
		  top: player3.top,
		  hasControls: false
		});

		var player4 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 450, top: 500, hasControls: false
		});

	    var text4 = new fabric.IText('Ramsey', { 
		  fontFamily: 'arial black',
		  left: player4.left, 
		  top: player4.top,
		  hasControls: false
		});

		var player5 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 375, top: 450, hasControls: false
		});

	    var text5 = new fabric.IText('Cazorla', { 
		  fontFamily: 'arial black',
		  left: player5.left, 
		  top: player5.top,
		  hasControls: false
		});

		var player6 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 300, top: 650, hasControls: false
		});

	    var text6 = new fabric.IText('Coq', { 
		  fontFamily: 'arial black',
		  left: player6.left, 
		  top: player6.top,
		  hasControls: false
		});

		var player7 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 50, top: 800, hasControls: false
		});

	    var text7 = new fabric.IText('Nacho', { 
		  fontFamily: 'arial black',
		  left: player7.left, 
		  top: player7.top,
		  hasControls: false
		});

		var player8 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 250, top: 800, hasControls: false
		});

	    var text8 = new fabric.IText('Kos', { 
		  fontFamily: 'arial black',
		  left: player8.left, 
		  top: player8.top,
		  hasControls: false
		});

		var player9 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 400, top: 800, hasControls: false
		});

	    var text9 = new fabric.IText('Per', { 
		  fontFamily: 'arial black',
		  left: player9.left, 
		  top: player9.top,
		  hasControls: false
		});

		var player10 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 500, top: 800, hasControls: false
		});

	    var text10 = new fabric.IText('Bellerin', { 
		  fontFamily: 'arial black',
		  left: player10.left, 
		  top: player10.top,
		  hasControls: false
		});

		var player11 = new fabric.Circle({
		  radius: 20, fill: 'red', left: 325, top: 1000, hasControls: false
		});

	    var text11 = new fabric.IText('Cech', { 
		  fontFamily: 'arial black',
		  left: player11.left, 
		  top: player11.top,
		  hasControls: false
		});

		canvas.add(player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11);
		canvas.add(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11);

		// change player colors
		document.getElementById('change-color').addEventListener('click', function (e) {
			var color = document.getElementById('color').value;

			for(i = 1; i < canvas.getObjects().length ; i++) {
				if(canvas.item(i).type === 'circle')
				{
					canvas.item(i).set( { fill: color } );
				}
			}
			canvas.renderAll();
		});

		// add player onto canvas
		document.getElementById('add-player').addEventListener('click', function (e) {
			var color = document.getElementById('color').value;

			var newPlayer = new fabric.Circle({
			  radius: 20, fill: color, left: 400, top: 650, hasControls: false
			});

		    var newName = new fabric.IText('New Player', { 
			  fontFamily: 'arial black',
			  left: newPlayer.left, 
			  top: newPlayer.top,
			  hasControls: false
			});

			canvas.add(newPlayer, newName);
			canvas.renderAll();
		});

		// delete player from canvas
		document.getElementById('remove-object').addEventListener('click', function (e) {
			if(canvas.getActiveObject().type === 'circle' || canvas.getActiveObject().type === 'i-text')
			{
				canvas.remove(canvas.getActiveObject());
			}
			// if(canvas.getActiveGroup().type === 'group' && canvas.getActiveGroup().type != null)
			// {
			// 	canvas.remove(canvas.getActiveGroup());
			// }

			canvas.renderAll();
		});

		// draw tactics/instructions on screen
		document.getElementById('tactics').addEventListener('click', function (e) {
			canvas.isDrawingMode = true;
			// type of object drawn is 'path'
			
			canvas.renderAll();
		});

		// move players on screen again
		document.getElementById('select').addEventListener('click', function (e) {
			canvas.isDrawingMode = false;
			
			canvas.renderAll();
		});

		canvas.on('mouse:over', function(e) {
			if(e.target.type != 'path')
			{
				// does not fill in paths that are drawn in
				e.target.setFill('orange');
				canvas.renderAll();
			}
		});

		canvas.on('mouse:out', function(e) {
			var prevColor = document.getElementById('color').value;
			
			if(e.target.type === 'path')
			{
				return;
			}
			else if(e.target.type === 'circle')
			{
				e.target.setFill(prevColor);
				canvas.renderAll();
			}
			else if(e.target.type === 'i-text')
			{
				e.target.setFill('black');
				canvas.renderAll();
			}
		});

		// possible code to prevent out of bounds movement
		// http://sett.ociweb.com/sett/settJun2014.html

    });
}

// window.onload = function() {
//   draw();
// };

document.addEventListener("DOMContentLoaded", function() {
  draw();
  //window.location.href=canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
});

// var backgroundColor = $('background-color');

// backgroundColor.onchange = function() {         
//             canvas.getActiveObject().set("blue", this.value);
//             canvas.renderAll();
//         };

// function isCanvasBlank(canvas) {
//     var blank = document.createElement('canvas');
//     blank.width = canvas.width;
//     blank.height = canvas.width;

//     return canvas.toDataURL() == blank.toDataURL();
// }

// document.getElementById('save').addEventListener('click',function(){
// 	var blank = isCanvasBlank(document.getElementById('canvas'));
    
//     if(blank) {
//         alert('blank!');   
//     }
//     else
//     	alert('NOT');
// });