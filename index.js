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

// const name = 'Abdul mazid akash';
// let count = 0;

// for(let nam of name){
// 	// console.log(nam);
// 	if(nam === 'a'){
// 		count++;
// 	}
// }

// console.log(count);

// let name = 'Shakib Al Hasan';
// let count = 0;

// for(let nam of name){
// 	// console.log(nam);
// 	if(nam.toLowerCase() === 'a'){
// 		// console.log(`lowercase a`);
// 		count++;
// 		// console.log(`a count: ${count}`);
// 	}
// }
// console.log(`a count: ${count}`);

// let name = 'shakib Al hasan';
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let count = 0;

// for(let letter of name.toLowerCase()){
// 	// console.log(letter);
// 	if(vowels.includes(letter)){
// 		count++;

// 	}
// }

// console.log(count);

// function replaceXWithY(str) {
//     return str.replaceAll('x', 'y').replaceAll('X', 'Y');
// }

// console.log(replaceXWithY('eXample text saY'));

function capitalizeWords(str) {
    return str
        .split(' ') // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words back into a sentence
}

// console.log(capitalizeWords('example text'));


//end game assessment test 10

// console.log('start');
// setTimeout(()=>{
// 	console.log('Timeout');
// }, 0);

// Promise.resolve().then(()=> console.log('Promise'));
// console.log('End');

// import {useState, useEffect} from 'react';
// const Counter =()=>{
// 	const [count, setCount] = useState(0);

// 	useEffect(()=>{
// 		setInterval(() => {
// 			setCount(count + 1)
// 		}, 1000);
// 	}, []);
// 	return <h1>{count}</h1>
// };

// export default Counter;


// function User(name){
// 	this.name = name;
// };

// User.prototype.sayHello = () =>{
// 	console.log(`Hello, ${this.name}`);
// };

// const user1 = new User("Alice");
// user1.sayHello();

// function counter(){
// 	let count = 0;
// 	return () => console.log(count++);
// };

// const count1 = counter();
// count1;
// count1;

// const count2 = counter();
// count2();
// count2();

// console.log(foo);
// var foo = 'Hello';
// console.log(foo);

// app.get('/data', async(req, res)=>{
// 	const result = fetch('https://api.example.com/data');
// 	res.send(await result.json());
// })

// app.use((req, res, next)=>{
// 	console.log('request received');
// })

// useEffect(() => {
//   console.log('effect runs');
// }, [user])

// function sum(...numbers, extra){
// 	return numbers.reduce((acc, num) => acc + num, 0) + extra;
// };

// const [user, setUser] = useState({name: "Alice", age: 25});

// function updateAge(){
// 	setUser({ age: 30});
// }

// function MyComponent(){
// 	const inputRef = useRef();

// 	useEffect(()=>{
// 		inputRef.current.focus();
// 	}, []);
// 	return <input />
// }

{/* <div onclick="console.log('Div clicked')">
	<button onclick="console.log('Button clicked')">Click me</button>
</div> */}

// console.log(1 + '2' + 3);

// function fetchData(){
// 	let data;
// 	fetch("https://api.example.com/data")
// 	.then(response => response.json())
// 	.then(json => data=json);
// 	return data;
// }

// function multiply(x, y= 2){
// 	return x * y;
// }
// console.log(multiply(5));
// console.log(multiply(5, undefined));
// console.log(multiply(5, null));

// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);

// let x = 1;
// let y = 2;
// x = x + y++;
// console.log(x, y);

// let x = [1, 2, 3];
// let y = [...x];
// y[0] = 4;
// console.log(x[0], y[0]);

// const numbers = [1, 2, 3];
// numbers[10]= 10;
// console.log(numbers.length);

// let numbers = [1, 2, 3];
// numbers = numbers.map(num => num * 2);
// console.log(numbers);

// const x = 10;
// function foo(){
// 	console.log(x);
// 	const x = 20;
// }

// foo();

// db.collection.find({name: "Alice"}).limit("5");

// h1{
// 	font-size: 24px;
// 	font-size: 30px;
// }

for(var i = 0; i < 3; i++){
	document.querySelector.querySelector("button").addEventListener("click", function(){
		console.log(i);
	})
}



