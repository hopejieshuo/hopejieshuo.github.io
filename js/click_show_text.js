var a_idx = 0;
var clr_idx = Date.now();
jQuery(document).ready(function($) {
	$("body").click(function(e) {
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
		var clr = new Array("#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffffff");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		clr_idx = (clr_idx + 1) % clr.length;
		var x = e.pageX,
			y = e.pageY;
		$i.css({
			"z-index": 5,
			"top": y - 20,
			"left": x,
			"position": "absolute",
			"font-weight": "bold",
			"color": clr[clr_idx]
		});
		$("body").append($i);
		$i.animate({
			"top": y - 180,
			"opacity": 0
		},
			3000,
			function() {
				    $i.remove();
			});
	});
	setTimeout('delay()', 2000);
});

function delay() {
	$(".buryit").removeAttr("onclick");
}
