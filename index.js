console.log('Abdul Mazid Akash 🕒');
// console.log('shakib');
// let shakib = 'shakib';
// console.log(shakib);
// console.log(typeof shakib );

// const infinity = 50 /0 ;
// console.log(infinity);

//problem task 01
// let totalMoney = 1000;
// let oneKgOrange = 300;
// let oneKgApples = 400;

// const result = totalMoney - (oneKgOrange + oneKgApples);

// console.log(result);

//problem task 02

// let matheMatics = 75.25;
// let biology = 65;
// let chemistry = 80;
// let physics = 35.45;
// let bengali = 99.50;

// let sum = matheMatics + biology + chemistry + physics + bengali;

// let result = sum / 5;
// console.log(result.toFixed(2));

//problem task 03

// let divide = 119 % 5;
// console.log(divide);

//problem task 04

// const a = isNaN('11');
// console.log(a);

// const a = isNaN(2-10);
// console.log(a);

// problem 01
// let burger = 700;

// if(burger > 500){
// 	console.log('coke free');
// }else{
// 	console.log('coke 30 tk');
// }

// let bmi = 26;

// if(bmi < 18.5){
// 	console.log('you are under weight');
// }
// else if(bmi >= 18.5 && bmi <=24.9){
// 	console.log('you are normal');
// }else if(bmi >=25 && bmi <= 29.9){
// 	console.log('you are overweight');
// }else{
// 	console.log('you are obese');
// }

// function calculatorBMI(weight, height){
// 	let bmi = weight / (height * height);

// 	let category;
// 	if(bmi < 18.5){
// 		category = 'under weight';
// 	}else{
// 		if(bmi <= 24.5){
// 			category = 'normal';
// 		}else{
// 			if(bmi <= 29.9){
// 				category = 'overweight';
// 			}else{
// 				category = 'obese';
// 			}
// 		}
// 	}

// 	return `Your bmi is ${bmi.toFixed(2)}. You are ${category}`;
// }

// console.log(calculatorBMI(70, 1.7));


// let number = 70;

// if(number >= 90){
// 	console.log('your grade a');
// }else if(number >= 80){
// 	console.log('your grade b');
// }else if(number >= 70){
// 	console.log('your grade c');
// }else if(number >= 60){
// 	console.log('your grade d');
// }else if(number <= 59){
// 	console.log('your grade f');
// }

function grade(number){
	let grade;

	if(number >= 90){
		grade = 'A';
	}else{
		if(number >= 80){
			grade = 'B';
		}else{
			if(number >= 70){
				grade = 'C';
			}else{
				if(number >= 60){
					grade = 'D';
				}else{
					if(number <= 59){
						grade = 'F';
					}
				}
			}
		}
	}

	return `Your grade is: ${grade}`
}

// console.log(grade(45));
// console.log(grade(65));
// console.log(grade(75));
// console.log(grade(85));
// console.log(grade(90));

// let myScore = 78;
// let friendsScore = 30;

// if(myScore >= 80 && friendsScore >= 80){
// 	console.log('go for a lunch');
// }else if(myScore >= 80 && friendsScore <= 80 && friendsScore >= 60){
// 	console.log('good luck next time');
// }else if(myScore >= 80 && friendsScore <= 60 && friendsScore >= 40){
// 	console.log("keep your friend's message unseen");
// }else if(myScore >= 80 && friendsScore < 40){
// 	console.log('block your friend');
// }else{
// 	console.log('go to home and sleep and act sad');
// }


// let age = 30;
// let isStudent = false;

// if (age < 10) {
//     console.log('Ticket free');
// } else if (age >= 60) { 
//     console.log('senior citizens Gets a 15% discount'); // Fix: Correct discount for senior citizens
// } else if (isStudent) {
//     console.log('student 50% discount');
// } else {
//     console.log('Otherwise Regular ticket fare 800 tk');
// }

// function calculateFare(age, isStudent){
// 	let ticketFare = 800;

// 	if(age < 10){
// 		return `children ticket is free`;
// 	}else if(isStudent){
// 		return `Ticket fare for students: ${ticketFare * 0.5}, tk (50% discount)`
// 	}else if(age >= 60){
// 		return `Ticket fare for senior citizens: ${ticketFare * 0.15} 15% Discount`
// 	}else{
// 		return `otherwise regular ticket fare ${ticketFare}`
// 	}
// }

// console.log(calculateFare(30, false));

// let num1 = 20;
// let num2 = 30;
// let result;

// if(num1 > num2){
// 	num1 *= 2;
// 	console.log(`double ${num1}`);
// }else{
// 	let result = num1 + num2;
// 	console.log(`sum : ${result}`);
// }

// let num1 = 3;
// let num2 = 5;

// let result = (num1 > num2) ? `double ${num1 * 2}` : `sum: ${num1 + num2}`;

// console.log(result);

//practice task 01

// let fruits = ['apple', 'orange', 'mango', 'pineapple', 'watermelon'];
// console.log(fruits[3]);
// fruits[2] = 'banana';
// console.log(fruits);

//practice task array 02

// let destinations = ['coxs bazar', 'saint martin', 'kuakata'];
// destinations.push('sea beach')
// console.log(destinations);
// destinations.push('bandarban', 'kaptai');
// console.log(destinations);
// destinations.pop();
// console.log(destinations);


//practice task 03
// let books = ['math', 'english', 'physics', 'chemistry', 'biology'];

// books.includes('math');
// console.log(books);


//practice task 04
// let array = ['book', 'math', 'clock']
// let just = 'my name';
// console.log(Array.isArray(array));
// console.log(Array.isArray(just));


//practice task 05
// let array1 = ['math', 'chemistry', 'physics', 'biology'];
// let array2 = ['shakib', 'mashrafe', 'tamim'];

// let result = array1.concat(array2);
// console.log(result);

//practice task break 01
// for(let i = 1; i < 200 ; i++){
// 	if(i >= 100){
// 		console.log('break condition', i);
// 		break;
// 	}
// 	console.log('final break condition', i);
// }

//practice problem 02
// let sum = 0;
// let i = 1;

// while(true){
// 	sum += 1;
// 	console.log(`Adding ${i}, Total sum: ${sum}`);

// 	if(sum >= 100){
// 		console.log('Sum reached 100 or more! Stopping the loop');
// 		break;
// 	}
// 	i++; 
// }

//practice problem 03
// for(let i = 1; i <= 100; i++){
// 	console.log('i check', i);
// 	if(Math.sqrt(i) % 1 === 0){
// 		console.log(`first square number found: ${i}. stopping the loop`);
// 		break;
// 	}
// }

// for(let i = 1; i <= 100; i++){
// 	console.log(i);
// 	if(Math.sqrt(i) % 1 === 0){
// 		console.log(`square number, ${i}`);
// 	}
// }

//for loop problem
// for(let i = 1; i <= 60; i++){
// 	console.log('I will invest at least 6 hrs every single day for next 60 days!', i);
// }

//for loop problem 02
// for (let i = 61; i <= 100; i++){
// 	if(i % 2 === 1){
// 		console.log('odd number--->', i);
// 	}
// }

// for(let i = 61; i<= 100; i +=2){
// 	console.log('odd number', i);
// }

// for(let i = 78; i <= 98; i++){
// 	if(i % 2 === 0){
// 		console.log('even number --->', i);
// 	}
// }


// for(let i = 78; i<= 98; i += 2){
// 	console.log(`even number ---> ${i}`);
// }

//display sum of all odd numbers
// let sum = 0;
// for(let i = 91; i <= 129; i++){
// 	console.log(`all numbers find: ${i}`);
// 	if(i % 2 === 1){
// 		console.log(`all odd numbers: ${i}`);
// 		sum = sum + i;
// 		console.log(`sum of all odd numbers: ${sum}`);
// 	}
// }

// let sum = 0;
// for(let i = 51; i <= 85; i++){
// 	// console.log(`all numbers find: ${i}`);
// 	if(i % 2 === 0){
// 		// console.log(`all even numbers: ${i}`);
// 		sum = sum + i;
// 		console.log(`even numbers sum: ${sum}`);
// 	}
// }


// let number =  9;
// for(let i = 1; i <= 10; i++){
// 	console.log(`${number} x ${i} = ${number * i}`);
// }

// for(let i = 81; i >= 65; i--){
// 	console.log(`decrease numbers: ${i}`);
// }

// let i = 1;
// while(i <= 60){
// 	console.log(`I will invest at least 6 hrs every single day for next 60 days! ${i}`);
// 	i++;
// }

// let i = 61;
// while(i <= 100){
// 	// console.log(`find all numbers: ${i}`);
// 	if(i % 2 === 1){
// 		console.log(`all odd numbers: ${i}`);
// 	}
// 	i++;
// }

// let i = 78;
// while(i <= 98){
// 	// console.log(`find all numbers 78 to 98`);
// 	if(i % 2 === 0){
// 		console.log(`all even numbers: ${i}`);
// 	};
// 	i++;
// }

// 81 to 131 sum odd numbers
// let sum = 0;
// let i = 81;
// while(i <= 131){
// 	// console.log(`find all numbers: ${i}`);
// 	if(i % 2 === 1){
// 		// console.log(`all odd numbers: ${i}`);
// 		sum = sum + i;
// 		console.log(`all odd numbers sum: ${sum}`);
// 	}
// 	i++;
// }

//Display sum of all the even numbers from 206 to 311.
// let sum = 0;
// let i = 206;
// while(i <= 311){
// 	// console.log(`all numbers find: ${i}`);
// 	if(i % 2 === 0){
// 		// console.log(`all even numbers: ${i}`);
// 		sum = sum + i;
// 		console.log(`all even numbers sum: ${sum}`);
// 	}
// 	i++;
// }

//As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

// let number = 5;
// let i = 1;
// while(i <= 10){
// 	// console.log(`all numbers find: ${i}`);
// 	console.log(`${number} x ${i} = ${number * i}`);
// 	i++;

// }

// let i = 21;
// while(i >= 15){
// 	console.log(`all numbers find: ${i}`);
// 	i--;
// }


//Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

// for(let i = 1; i <= 40; i++){
// 	if(i % 2 === 0){
// 		console.log(`all even numbers print: ${i}`);
// 		continue;
// 	}
// }

//display odd number from 55 to 85 and skip the numbers divisible by 5.

// for (let i = 55; i <= 85; i++){
// 	// console.log(`all numbers find: ${i}`);
// 	if(i % 2 === 1 && i % 5 !== 0){
// 		console.log(`Odd number (skipping multiples of 5): ${i}`);
// 		continue;
// 	}
// }

// let sentence = 'i am a web developer';
// let reverse = '';

// for (let letter of sentence){
// 	// console.log(letter);
// 	reverse = letter + reverse;
// 	// console.log(reverse);
// }
// console.log(reverse);

//js-object-task
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// const golden_rod = colors['golden rod'];
// console.log(golden_rod);

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car.passengerCapacity = 5;

// console.log(car);

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// const marks = student.physics.marks;
// console.log(marks);

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// // // const properties = Object.keys(student).length;
// // // console.log(properties);
// // const properties = Object.keys(student);
// // console.log(properties);
// const values = Object.values(student);
// console.log(values);
// let myObject = {

// 	name: 'John Doe',
// 	age: 25,
// 	city: 'Example City',
// 	isStudent: true
// 	};

// const keys = Object.keys(myObject);
// console.log('keys: ',keys);
// for(let key in myObject){
// 	console.log(`key: ${key} | type: ${typeof myObject[key]}`);
	
// }





