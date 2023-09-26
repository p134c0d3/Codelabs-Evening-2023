// Write a JavaScript program that calculates and displays the sum of all numbers from 1 to 100 using a while loop.
let myArr: number[] = [];
let i: number = 1;

while (i < 101) {
	i++;
	myArr.concat(i);
	console.log(myArr[i]);
}
