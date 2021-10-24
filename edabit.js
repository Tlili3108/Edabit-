Problem 1
function hello() {
	return "hello edabit.com";
    }
Problem 2
   function addition( a, b ) {
    return a + b
  }
Problem 3
function convert(minutes) {
return  minutes * 60;
}
Problem 4
function addition(num) {
	return num+1;
}
Problem 5
function triArea(base, height) {
	return (base * height) / 2
}
Problem 6
function calcAge(age) {
	return age*365
}
Problem 7
function cubes(a) {
	return a ** 3
}
Problem 8
function getFirstValue(arr) {
	return arr[0];
}
Problem 9
function circuitPower(voltage, current) {
	return voltage * current
}
Problem 10
function howManySeconds(hours) {
	return hours * 3600;
}
Problem 11
function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}
Problem 12
function remainder(x, y) {
	return x % y;
}
Problem 13
function findPerimeter(length,width){
	return (length + width) * 2;
}
Problem 14
function giveMeSomething(a) {
	return "something" + " " + a;
}
Problem 15
function squaed(b) {
	return b ** 2
}
Problem 16
function lessThanOrEqualToZero(num) {
	return num <= 0;
}
Problem 17
function sumPolygon(n){
    return (n-2) * 180;
}
Problem 18
function points(twoPointers, threePointers){
	return twoPointers * 2 + threePointers * 3;
}
Problem 19
function nameString(name){
    return name + "Edabit"
}
Problem 20
function lessThan100(a, b) {
	return a+b<100;
}
Problem 22
function swap(a, b) {
	return [b, a]
}
Problem 23
function animals(chickens, cows, pigs) {
	return chickens*2 + cows*4 + pigs*4
}
Problem 24
function and(a, b) {
	return a&&b
}

//4th Problem in the list Excel
function getAbsSum(arr) {
	let abs = 0
	for (let i in arr){
		abs+=Math.abs(arr[i])
	}
	return abs
}
//first Problem in the list Excel
function minMax(arr) {
	return [Math.min.apply(null, arr), Math.max.apply(null, arr)]
}
//second Problem in the list Excel
function isSameNum(num1, num2) {
	if(num1===num2)
		return true 
	else 
		return false 
}
//5th Problem in the list Excel
function countTrue(arr) {
    let count = 0;
          for(let element of arr) if(element===true) count++;
          return count;
        
    }
