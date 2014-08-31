app = {
	hits: 0,
	time: 0,
	score: [],
	drops: 0,
	doubles: 0,
	state: false,
	
	start: function() {
		this.state = true;
		this.time = $.now();
	},
	
	hit: function() {
		return this.hits++;
	},
	
	drop: function(left, right) {
		this.drops++; 
		this.score.push(left, right); 
		if(left == right) this.doubles++;
	},
	
	results: function() {
		return {
			hits: 		this.hits,
			drops: 		this.drops,
			doubles: 	this.doubles,
			score: 		this.score.sum(),
			time: 		(this.time) ? ($.now() - this.time).toHMS() : 0,
			player1:	player.name(0),
			player2:	player.name(1)
		};
	},
	
	reset: function() {
		this.hits = 0;
		this.time = 0;
		this.drops = 0;
		this.doubles = 0;
		this.score = [];
		player.all = [];
		player.active = 0;
		this.state = false;
	}
};
