var users = [{
	name: 'James',
	age: 22
},
{
	name: 'Harry',
	age: 20
},
{
	name: 'Bob',
	age: 28
},
{
	name: 'Arnold',
	age: 19
},
{
	name: 'Sara',
	age: 18
},
{
	name: 'George',
	age: 25
}];
var nameChar = [];
var nameStr = '';

function userSelect() {
	for (var i = 0; i < users.length; i++) {
		nameChar[i] = users[i]['name'] + ' ' + users[i]['age'];
	}
	nameChar = nameChar.sort();
	nameStr = nameChar.join(' ');
	nameChar = nameStr.split(' ');
	for (var i = 0; i < nameChar.length; i++) {
		if (i % 2 != 0) {
			console.log('Age: ' + nameChar[i]);
			console.log('');
		}
		else {
			console.log('Name: ' + nameChar[i]);
		}
	}		
}

userSelect();