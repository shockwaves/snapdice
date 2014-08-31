//преобразование даты timestamp в h:m:s
Number.prototype.toHMS = function() {
	var total = parseInt(this / 1000);
    var hours = parseInt(total / 3600) % 24;
    var minutes = parseInt(total / 60) % 60;
    var seconds = total % 60;   
    return (hours < 10 ? '0' + hours : hours) + ':' + 
    (minutes < 10 ? '0' + minutes : minutes) + ':' + 
    (seconds  < 10 ? '0' + seconds : seconds);
}

//сумма значений элементов массива
Array.prototype.sum = function() {
	 for(var i=0,c=0;i<this.length;c+=parseInt(this[i++]));
	 return c;
}

//преобразование значения в строку и 
//отображение его в модальном окне
function echo(arg) {
	 alert(arg.toString());
}

function show(arg) {
	 console.log(arg.toString());
}

//случайное целое число до max
function random(min, max) {
	var rand = Math.random() * (max-min) + min;
	return Math.ceil(rand);
}

//вызов обработчика действия клика по кнопке
$('button').click(function() {
	game._action($(this));
});

//селектор кнопки по атрибуту ~rel
var button = function(name) {
	return $(document.querySelectorAll("[data-rel='"+name+"']"));
};

//селектор секции по атрибуту ~id
var section = function(name) {
	return $(document.getElementById(name));
};

jQuery.fn.show = function() {
	(this[0].nodeName == 'BUTTON') ? this.css('display', 'inline-block') : this.css('display', 'block');
}
