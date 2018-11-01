function sum() {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) result += arguments[i];
	return result;
}
// Проверка
console.log(sum(12,124,145,332,5));
console.log(sum(63,2,900));
console.log(sum(4,22));