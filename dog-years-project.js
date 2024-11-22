// Dog Years

const myAge = 27; //* start with const

let earlyYears = 2; //*if need to reassign use let

earlyYears *= 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

const myAgeInDogYears = earlyYears + laterYears;

const myName = "Nicole".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`
);
