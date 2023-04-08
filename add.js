// question # 1.............
// let num1=prompt("Enter the first number:");
// let num2=prompt("Enter the second number:");
// if(num1>num2){
//     console.log(num1 +" is larger than" + num2);
// }
// else if (num2>num1) {
//     console.log(num2 +" is larger than" + num1);
// }
// else{
//     console.log("Both numbers are equal.");
// }


// question # 2.............
// let num=prompt("Enter a number:");
// if (num>0){
//     alert("The sign is +");
// }
// else if (num< 0){
//     alert("The sign is -");
// }
// else{
//     alert( "The number is zero.");
// }

// question # 3.............
// let num1=prompt("Enter the frst number:");
// let num2=prompt("Enter the second number:");
// let num3=prompt("Enter the third number:");
// let num4=prompt("Enter the fourth number:");
// let num5=prompt("Enter the fifth number:");

// let max = num1;
// if(num2>max){
//     max = num2;
// }
// if(num3>max){
//     max = num3;
// }
// if(num4>max){
//     max = num4;
// }
// if(num5>max){
//     max = num5;
// }
// console.log("The largest number is " + max);

// question # 4.............
// for(let i=0; i<=20; i++){
//     if (i % 2 ===0){
//         console.log(i+ " is even ");
//     } else{
//         console.log(i+ " is odd ")
//     }
// }

// question # 5.............
// let students = [
//     { name: "Fatima", marks: [80, 75, 90, 85, 95] },
//     { name: "Aiza", marks: [70, 65, 80, 75, 85] },
//     { name: "Bilal", marks: [90, 85, 95, 90, 100] },
//   ];
  

//   function average(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//     }
//     return sum / nums.length;
//   }
  
// //   Loop through each student object
//   for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     let avg = average(student.marks);
//     let grade;
//     if (avg < 60) {
//       grade = "F";
//     } else if (avg < 70) {
//       grade = "D";
//     } else if (avg < 80) {
//       grade = "C";
//     } else if (avg < 90) {
//       grade = "B";
//     } else {
//       grade = "A";
//     }
//     console.log(student.name + " got an average of " + avg.toFixed(2) + ", which corresponds to a grade of " + grade);
//   }
  
// question number 6..............
// for (let i=1; i<=50; i++){
//     if (i%3=== 0 && i % 5 ===0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }