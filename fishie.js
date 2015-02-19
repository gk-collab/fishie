window.onload = function() {

	var boat = {
		id: "boat",
		height: 40,
		width: 80,
		color: "black",
		draw: function() {
			var boatElement = document.getElementById(this.id);
			if (boatElement.getContext) {
			var ctx = boatElement.getContext('2d');
			
			ctx.fillRect(0,0,80,40);
			}
		  }
		};

	boat.draw();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
};