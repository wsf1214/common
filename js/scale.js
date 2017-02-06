function bodyScale() {
		var devicewidth = document.documentElement.clientWidth;
//		console.log(devicewidth)
		if(devicewidth<=640){
			var scale = devicewidth / 640;
			document.body.style.zoom = scale;
		}
		else if(devicewidth>640){
			$(".box").css({"width":640});
			document.body.style.zoom = 1;
		}
	};
	window.onload = window.onresize = function() {
		bodyScale();
	};