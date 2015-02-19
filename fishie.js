window.onload = function() {

	var world = {
	// this will be an object to define the world size later.
	// the boat object will not move past world.left or world.right
	
	// world.size() = getViewportSize()
	// world.left = 30px
	// world.right = 30px less than viewport's right dimension
		width: function() {
			return w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		},
		
		height: function() {
			return h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
		},
		
		leftBorder: 35,
		
		rightBorder: function() {
			return r = parseInt(this.width()) - 100;
		}
	};

	var boat = {
		id: function() {
			return document.getElementById("boat");
		},
		// Define height, width, and color to be used when drawing
		height: 40,
		width: 80,
		color: "#F4A460",
		
		draw: function() {
			if (this.id().getContext) {
				var ctx = this.id().getContext('2d');
				
				ctx.fillStyle = this.color;
				ctx.fillRect(0,0,this.width,this.height);
			}
		},
		
		position: function() {
			// Get the CSS 'left' property of #boat
			var getLeftProp = getComputedStyle(this.id()).getPropertyValue("left");
			return parseFloat(getLeftProp);
		},
		
		move: function(lr, increment) {
				
				if(lr === "left" && this.position() > world.leftBorder) {
					// If moving to the left, subtract from current value then update it
					newPosition = this.position() - increment;
					this.id().style.left = newPosition;
				} else if (lr === "right" && this.position() <= world.rightBorder()) {
					// If moving to the right, add to current value then update it
					newPosition = this.position() + increment;
					this.id().style.left = newPosition;
				} else {
					// I don't know what happened, boss!
					// alert("An unexpected error has occurred.");
				}
			
		}
	};

	boat.draw();
		
	function leftArrowPressed() {
		boat.move("left", 25);
	}

	function rightArrowPressed() {
		boat.move("right", 25);
	}
	
	document.onkeydown = function(evt) {
		evt = evt || window.event; 
		switch (evt.keyCode) {
		case 37:
		leftArrowPressed();
		break;
		case 39:
		rightArrowPressed();
		break;
		}
	};
	
};