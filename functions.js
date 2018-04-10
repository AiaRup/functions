// PARTNER EXERCISE 1
var rock = function () {
  console.log('I wanna rock!');
};

for (var i = 0; i < 3; i++) {
  rock();
}

// PARTNER EXERCISE 2
var convertWeight = function (numOfKilos) {
  var pounds = numOfKilos * 2.2046;
  console.log(numOfKilos + ' kilos are ' + pounds + ' pounds.');
};

convertWeight(100);

// PARTNER EXERCISE 3
var convertWeight2 = function (number, unit) {
  var converted;
  if (unit === 'kilos') {
    converted = number * 2.2046;
    console.log(number + ' kilos are ' + converted + ' pounds.');
  } else {
    converted = number / 2.2046;
    console.log(number + ' pounds are ' + converted.toFixed(2) + ' kilos.');
  }
};
convertWeight2(100, 'kilos');
convertWeight2(100, 'pounds');

// PARTNER EXERCISE 4
var convertWeight3 = function (number, unit) {
  if (typeof number !== 'number' || typeof unit !== 'string') {
    console.log('You entered an invalid parameter.');
    return;
  }
  var converted;
  if (unit === 'kilos') {
    converted = number * 2.2046;
    console.log(number + ' kilos are ' + converted + ' pounds.');
  } else if (unit === 'pounds') {
    converted = number / 2.2046;
    console.log(number + ' pounds are ' + converted.toFixed(2) + ' kilos.');
  } else {
    console.log('This function converts only kilos and pounds.');
  }
};
convertWeight3(100, 'kilos');
convertWeight3(100, 'pounds');

// INDIVIDUAL EXERCISE 1
var calcAge = function (currentYear, yearOfBirth) {
  age = currentYear - yearOfBirth;
  console.log('The calaulated age is :' + age);
  return age;
};
var age = calcAge(2017, 1989);

// INDIVIDUAL EXERCISE 2
var calcAge2 = function (yearOfBirth) {
  age = (new Date()).getFullYear() - yearOfBirth;
  console.log('You are either ' + age + ' or ' + (age - 1));
  return age;
};
var age1 = calcAge(1988);

// INDIVIDUAL EXERCISE 3
var isPrime = function (number) {
  var flag = 0;
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      flag++;
    }
  }
  if (flag === 2) {
    console.log('The number entered is a prime number');
    return true;
  } else {
    console.log('The number entered is NOT a prime number');
    return false;
  }
};

var boolean = isPrime(3);

// INDIVIDUAL EXERCISE 4
var averageArray = function(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  console.log('The average of array elements is: ' + temp/arr.length);
  return temp/arr.length;
};

var averageArr = averageArray([1,2,3,4,5,6,7,8]);

// INDIVIDUAL EXERCISE 5
var numberExists = function(arr, number) {
  for (var i = 0; i < arr.length; i++) {
    if(number === arr[i]) {
      console.log(number + ' exists in the array at index: ' + i);
      return true;
    }
  }
  console.log(number + ' does not exists in the array.');
  return false;
};

var result = numberExists([1,5,9,13,56,78], 6);

// INDIVIDUAL EXERCISE 6
var printSmallNumber = function(arr, number) {
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(number > arr[i]) {
      tempArr.push(arr[i]);
    }
  }
  if(tempArr.length === 0) {
    console.log('There are no numbers in the array that are smaller than the number that was passed in.');
  } else {
    console.log('All the numbers from the array that are smaller than the number that was passed in: ' + tempArr);
  }
};
var resultArr = printSmallNumber([1,5,9,13,56,78], 10);

// Trying git and branches with 2 branches
