dice.init();

$('#board article').click(function() {
	if(!$(this).hasClass('set'))
	game.hits++;
	$(this).addClass('set');	
	if(dice.onSet() == 2) {
		 $('button#drop').show();
		 $('button#score').hide();
	}	
});

$('button#start').click(function() {
	$(this).hide();
	$('button#score').hide();
	$('button#drop').show();
	$('#board').css('display', 'table');
	$('#board article').addClass('green');	
	game.time = $.now();
});

$('button#score').click(function() {
	$(this).hide();
	$('#board').hide();
	$('button#start').hide();
	if(game.time) {
		var date = new Date($.now() - game.time);
		$('#results .time').html(hms(date));
	}
	$('#results .score').html(sum(game.score));
	$('#results .drops').html(game.drops);
	$('#results .doubles').html(game.doubles);
	$('#results .hits').html(game.hits);
	$('button#back').show();
	$('#results').show();
});

$('button#back').click(function() {
	$(this).hide();
	$('#results').hide();
	if(game.score != 0)
		$('#board').css('display', 'table');
	else
		$('button#start').show();
	$('button#score').show();
});

$('button#reset').click(function() {
	$('#board article').html('-');
	game.score = [];
	game.drops = 0;
	game.time =0;
	game.doubles = 0;
	$('#results dd').html('0');
});
	
$('button#drop').click(function() { 
	if(dice.onSet() != 2 && game.score.length)
	return game.message('Ход не завершен');
	dice.drop();
	dice.all.removeClass('set');
	$(this).hide();
	$('button#score').show();
});