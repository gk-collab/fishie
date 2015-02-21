window.onload = function() {
       var canvas = document.getElementById('canvas'),
           context = canvas.getContext('2d');
		   canvas.width = window.innerWidth;
           canvas.height = window.innerHeight;
		   
	   var water = {
			draw: function() {
				context.beginPath();
				context.moveTo(0,canvas.height/2);
				context.lineTo(canvas.width,canvas.height/2);
				context.lineTo(canvas.width,canvas.height);
				context.lineTo(0,canvas.height);
				context.lineTo(0,canvas.height/2);
				context.lineWidth = 2;
				context.fillStyle = "#4CB8D9";
				context.fill();
				context.closePath();
			}
		};
		
		var sky = {
			draw: function() {
				context.beginPath();
				context.moveTo(0,0);
				context.lineTo(canvas.width,0);
				context.lineTo(canvas.width,canvas.height/2);
				context.lineTo(0,canvas.height/2);
				context.lineTo(0,canvas.height);
				context.lineWidth = 2;
				context.fillStyle = "#69D2E7";
				context.fill();
				context.closePath();
			}
		};
		
		var boat = {
			draw: function() {
					context.fillStyle = "#F4A460";
					context.fillRect(canvas.width/2,canvas.height/2 - 40,80,40);
				}
			}

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                /**
                 * Your drawings need to be inside this function otherwise they will be reset when 
                 * you resize the browser window and the canvas goes will be cleared.
                 */
                drawStuff(); 
				
        }
        resizeCanvas();
		
        function drawStuff() {
			// draw the things
			sky.draw();
			water.draw();
			boat.draw();
        };
		
		

};


