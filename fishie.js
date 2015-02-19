window.onload = function() {
	window.onresize = function() {
		boat.setPosition("50%");
	};
	
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
	
	var world = {
	// this will be an object to define the world size later.
	// the boat object will not move past world.left or world.right

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
		
		getPosition: function() {
			// Get the CSS 'left' property of #boat
			var getLeftProp = getComputedStyle(this.id()).getPropertyValue("left");
			return parseFloat(getLeftProp);
		},
		
		setPosition: function(newPosition) {
			this.id().style.left = newPosition;
		},
		
		move: function(lr, increment) {
				
				if(lr === "left" && this.getPosition() > world.leftBorder) {
					// If moving to the left, subtract from current value then update it
					newPosition = this.getPosition() - increment;
					this.setPosition(newPosition);
				} else if (lr === "right" && this.getPosition() <= world.rightBorder()) {
					// If moving to the right, add to current value then update it
					newPosition = this.getPosition() + increment;
					this.setPosition(newPosition);
				}
			
		}
	};

	boat.draw();
};