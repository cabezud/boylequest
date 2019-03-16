var loc = 0;
var score = 0;

$('.btn-im-here,.btn-judge-answer,.answer-box,.pts-value').hide();
$('.btn-next-location').click(function() {
	console.log('.btn-next-location fired');
	nextLocation();
});
$('.btn-im-here').click(function() {
	imHere();
});
$('.btn-judge-answer').click(function() {
	judgeAnswer();
});

function nextLocation() {
	loc++;
	$('.btn-next-location').hide();
	$('.txt').text("Find Location");
	$('.q-num').text(loc);
	$('.quest-box').html(quest[loc-1]["f"]);
	$('.btn-im-here').show();
};
function imHere() {
	$('.btn-im-here').hide();
	$('.txt').text("Question");
	$('.quest-box').html(quest[loc-1]["q"]);
	$('.pts-value span').text(quest[loc-1]["pts"]);
	$('.pts-value').show();
	$('.btn-judge-answer,.answer-box').show();
};
function judgeAnswer() {
	$('.btn-judge-answer,.answer-box,.pts-value').hide();
	console.log( $('.answer-box').val() );
	console.log( quest[loc-1]["a"] );
	if ($('.answer-box').val() == quest[loc-1]["a"]) {
		score += quest[loc-1]["pts"];
		$('p.quest-box').html(quest[loc-1]["right"]);
	} else {
		score += 5;
		$('p.quest-box').html(quest[loc-1]["wrong"]);
	};

	$('.pts').text(score);
	$('.answer-box').val('');
	$('.btn-next-location').show();
};
/*
var initCustom = function() {
	var url_string = window.location.href;
	var url = new URL(url_string);

	//get data from parameters
	var q = url.searchParams.get("q");
	var s = url.searchParams.get("s");

	if (q == null) {
		q = 0;
	};
	if (s == null) {
		s = 0;
	};
};

window.addEventListener( 'DOMContentLoaded', initCustom, false);
*/
/*
	var url_string = window.location.href;
	var url = new URL(url_string);
	var q = url.searchParams.get("q");
	q = q++;
	url.searchParams.set("q") = q;
	window.location.href(url);
*/
