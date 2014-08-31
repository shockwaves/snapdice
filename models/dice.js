dice = {};
dice.min = 1;
dice.max = 6;
dice.left = 0;
dice.right = 0;

dice.isFixed = function() {
	 return $('button[data-rel=face].hit').length == 2;
}

dice.drop = function() {
	this.left = random(this.min, this.max); 	
	this.right = random(this.min, this.max); 
};
