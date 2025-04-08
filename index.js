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


//
// function marketQuantity(shirtQuantity, pantQuantity, shoeQuantity){
// 	const perShirtPrice = 500;
// 	const perPantPrice = 300;
// 	const perShoePrice = 900;

// 	const shirtTotalPrice = shirtQuantity * perShirtPrice;
// 	const pantTotalPrice = pantQuantity * perPantPrice;
// 	const shoeTotalPrice = shoeQuantity * perShoePrice;

// 	const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

// 	return totalPrice;
// }

// const price = marketQuantity(1, 1, 1);
// console.log('price needed ---->', price );

const products = [
	{ name: 'shampoo', price: 400, quantity: 1},
	{ name: 'chiruni', price: 100, quantity: 1},
	{ name: 'shirt', price: 200, quantity: 1},
	{ name: 'pant', price: 600, quantity: 1},
];

function getShoppingTotal(products){
	let total = 0;
	for(let product of products){
	// console.log(product);
	let totalProductCost = product.price * product.quantity;
	
	total = total + totalProductCost;
	}

	return total;
};

const total = getShoppingTotal(products);
console.log(total);











