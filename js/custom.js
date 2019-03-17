var loc = 0;
var score = 0;
var pts = 10;

function changeStartLoc(n) {
	var shifted = quest.splice(n);
	quest = shifted.concat(quest);
	quest.push( finalQuestion );
};
$('.pts-section').hide();
$('.group-a').click(function(){
	changeStartLoc(0);
	nextLocation(); $('.pts-section').show();
});
$('.group-b').click(function(){
	changeStartLoc(7);
	nextLocation(); $('.pts-section').show();
});
$('.group-c').click(function(){
	changeStartLoc(14);
	nextLocation(); $('.pts-section').show();
});
$('.group-d').click(function(){
	changeStartLoc(18);
	nextLocation(); $('.pts-section').show();
});

$('.btn-next-location, .btn-im-here, .btn-judge-answer, .answer-box').hide();
$('.btn-next-location').click(function() {
	nextLocation();	
});
$('.btn-im-here').click(function() {
	imHere();
});
$('.btn-judge-answer').click(function() {
	judgeAnswer();
});

function nextLocation() {
	$('.btn-next-location').hide();

	loc++;
	pts = 10;
	if (loc == quest.length) { pts = 50; }; //final question worth 50

	if (loc > quest.length) { 
		$('.txt').text('Complete.');
		$('.q-num').text('');
	} else {
		updatePtsSection();
		$('.txt').text("Find Location");
		$('.q-num').text(loc);
		$('.quest-box').html( quest[loc-1]["f"] );
		$('.btn-im-here').show();
	}
};
function imHere() { console.log("imHere fired.");
	$('.btn-im-here').hide();

	updatePtsSection();
	if (pts == 5) {
		$('.hint').html('<button onclick="showHint()"">Show Hint (costs 2 pts)</button>');
	}

	$('.txt').text("Question");
	$('.quest-box').html(quest[loc-1]["q"]);

	$('.btn-judge-answer, .answer-box').show();
};
function judgeAnswer() {
	$('.btn-judge-answer,.answer-box').hide();

	//if (true) {
	if ($('.answer-box').val().toLowerCase().trim() == quest[loc-1]["a"]) { console.log('right');
		score += pts;
		pts = 0;
		updatePtsSection();

		$('.quest-box').html(quest[loc-1]["r"]);		
		$('.answer-box').val('');
		$('.hint').html('');
		$('.btn-next-location').show();
	} else { console.log('wrong');
		pts = Math.min(5,pts);
		$('.answer-box').val('');
		$('.quest-box').html('Sorry. <button onclick="imHere()">Try Again</button>');
	};	
};
function showHint() {
	pts = Math.max(1,pts - 2);
	updatePtsSection();
	$('.hint').text( quest[loc-1]["h"] );
};
function updatePtsSection() {
	$('.pts').text( score );
	$('.q-num').text( loc );
	$('.pts-value').text( pts );
};

var initCustom = function() {
	var url_string = window.location.href;
	var url = new URL(url_string);

	var scoreParam = url.searchParams.get("score");
	if (scoreParam != null) {
		if (typeof scoreParam == 'number') {
			score = scoreParam;
		}
	};
	var locParam = url.searchParams.get("loc");
	if (locParam != null) {
		if (typeof locParam == 'number') {
			loc = locParam;
		}
	};
};
window.addEventListener( 'DOMContentLoaded', initCustom, false);