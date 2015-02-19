window.onload = function() {

	var boat = {
		id: function() {
			return document.getElementById("boat");
		},
		height: 40,
		width: 80,
		color: "black",
		draw: function() {
			if (this.id().getContext) {
				var ctx = this.id().getContext('2d');
				
				ctx.fillRect(0,0,80,40);
			}
		},
		move: function(lr, increment) {
			var getLeftProp = getComputedStyle(this.id()).getPropertyValue("left");

			if(lr === "left") {
				newPosition = parseFloat(getLeftProp) - increment;
				this.id().style.left = newPosition;
			} else if (lr === "right") {
				newPosition = parseFloat(getLeftProp) + increment;
				this.id().style.left = newPosition;
			} else {
				alert("An unexpected error has occurred.");
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