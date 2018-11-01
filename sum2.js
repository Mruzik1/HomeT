var num = 456;
var numStr = String(num);
var res;

function sum() {
	if (numStr.length > 1) {
		res = 0;
		for (var i = 0; i < numStr.length; i++) res += Number(numStr[i]);
		numStr = String(res);
		sum();
	}
	return res;
}

console.log(sum());