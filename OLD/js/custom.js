function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$('.make-cube-form').on('submit', function () {
	var url_with_cube = "http://complimentcube.com/index.html?c=";
	$(this).find('input:text').each(function(){
		var val = $(this).val().replace(',',''); //remove any commas
		url_with_cube += val+",";
	});
	url_with_cube = url_with_cube.slice(0, -1);//remove trailing comma
	console.log(url_with_cube);
    window.location.href = url_with_cube;
    return false;
});

var initCustom = function() {
	var url_string = window.location.href;
	var url = new URL(url_string);

	//get compliments from parameters
	var c = url.searchParams.get("c");
	if (c != null) {
		var urlCubeArr = c.split(",");	
	};

	//enable sharing
	$('#cubeUrl').text(url);

	//add compliments to cube
	var compliments = [];
	if (urlCubeArr && urlCubeArr.length == 6) {
		console.log('Found a cube in url.');
		compliments = urlCubeArr;
	} else {
		compliments = [
			"You are just awesome",
			"You look great in that",
			"You\'re always so fashionable",
			"Did you change you hair?",
			"You are positively lovely",
			"Have I told you how much you mean to me?"
		];
	}
	var sides = document.querySelectorAll('.container figure');
	if (compliments.length > 5 && sides.length > 5) {
		for (var j=0; j<6; j++) {
			sides[j].innerHTML = "<p>"+compliments[j]+"</p>";
		}
	}; 
};

window.addEventListener( 'DOMContentLoaded', initCustom, false);