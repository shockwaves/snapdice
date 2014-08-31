game = {
	state: 'main',
	hold: 'main',
	
	_action: function(_button) {
		var state = _button.attr('data-rel');
		if(state != 'back' && state != 'drop') {
			this.hold = this.state;
			this.state = state;	
		} else {
			this.state = this.hold;	
		}
		
		window['game'][state](_button);
	},
	
	back: function() {
		this.clear();
		window['game'][this.hold]();
	},
	
	main: function() {
		this.clear();
		$('button').hide();
		$('section').hide();
		button('play').show();
		button('results').show();
	},

	play: function() {
		if(player.data.length != 2)
		return this.profile();
		this.start();
		section('board').show();
		button('face').show();
		button('drop').show();
		button('results').show();	
		button('name').html(player.get()).show();
		button('active').html(player.active+1).show();
	},
	
	start: function() {
		this.clear();
		if(player.data.length != 2)
		return this.profile();	
		app.start();
		section('board').show();
		button('drop').show();
		button('results').show();	
		button('name').html(player.get()).show();
		button('active').html(player.active+1).show();
	},

	results: function() {
		this.clear();
		button('fixed').hide();
		var results = app.results();
		for(key in results) 
		 	$('#results [data-rel='+key+']').html(results[key]);
		button('back').show();
		section('results').show();
	},
	
	profile: function() {
		this.clear();
		button('save').show();
		button('back').show();
		section('profile').show();
		
		if(player.data.length) { 
			$('#profile .name').val(player.get()).focus();
			$('#profile label b').html(player.active+1);
		} else {
			$('#profile .name').val('').focus();
			$('#profile label b').html(1);
		}
	},

	save: function() {		
		var name = $('#profile .name').val();
		if(!player.save(name))
		return  echo('Неверное значение');

		if(player.data.length < 2) {
			$('#profile .name').val('').focus();
			$('#profile label b').html(player.data.length+1);
			return;
		}
		
		section('profile').hide();
		this.drawing();
	},

	reset: function() {
		app.reset();
		$('#results dd').html('0');
		button('face').html('-');
	},
	
	drop: function(_button) { 
		_button.hide();
		dice.drop();
		app.drop(dice.left, dice.right);
		section('board').show();
		button('face').show();
		button('fixed').show();
		button('face').removeClass('hit');
		$('button[data-rel=face][value=0]').html(dice.left);
		$('button[data-rel=face][value=1]').html(dice.right);
	},
	
	face: function(_button) {
		button('fixed').hide();
		if(!_button.hasClass('hit')) {
		 	_button.addClass('hit');	
		 	app.hit();
		}		
		if(dice.isFixed()) {
		 	button('face').hide();
		 	button('drop').show();
		 	player.next();
		 	button('name').html(player.get());
		 	button('active').html(player.active+1);
		} 		
	},

	fixed: function() {
		button('face').hide();
		button('fixed').hide();
		button('drop').show();
		player.next();
		button('name').html(player.name);
		button('active').html(player.active+1);
	},

	name: function(_button) {
		var id = _button.attr('value');
		player.appoint(id);
		return this.profile();
	},

	active: function() {
		alert(player.name);
	},

	drawing: function() {
//		button('back').hide();
                this.clear();
		section('drawing').show();
		$('#drawing [data-rel=name][value=0]').html(player.first()).show();
		$('#drawing [data-rel=name][value=1]').html(player.second()).show();
		button('chance').show();
	},
	
	chance: function(_button) {
		_button.hide();
		var id = _button.attr('value');
		
		var value = random(dice.min, dice.max);
		player.data[id].chance = value;
		
		$('#drawing [data-rel=face][value='+id+']').html(value).show();
		
		
		if(id==1) {
//                    player.data[0].chance = player.data[1].chance;
			if(player.data[0].chance == player.data[1].chance)
				button('drawing').show();
			else {
				player.active = (player.data[0].chance >  player.data[1].chance) ? 0 : 1;
				button('start').show();
			}
		}
	},
	
	oops: function() {
		button('back').show();
		$('#error img').show();
		src = $('#error img').attr('src');
		$('#error img').attr('src', src+'?'+'t=t');	
		$('#error').show();
		setTimeout( function() { 
			$('#error img').hide();
		}, 1500); 	
	},

	clear: function() {
		$('section').hide();
		$('button').hide();
	}	
};

game.main();
