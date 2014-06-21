dice = {};
dice.max = 6;
dice.init = function() {
	this.all = $('#board article');
	this.left = $('#board article:first-child');
	this.right = $('#board article:last-child');
};

dice.onSet = function() {
	 return $('#board article.set').length;
}

dice.drop = function()  {
	 var left = random(this.max); 	
	 var right = random(this.max); 	
	 var score = [left, right]; 	
	 dice.left.html(left); 	
	 dice.right.html(right); 
	 game.score.push(score); 	
	 game.drops++; 	
	 if(left == right) game.doubles++;
};