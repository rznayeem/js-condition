const weight = 80;
const height = 1.8;
let BMI = weight / height ** 2;
// if (BMI < 18.5) {
//   console.log('you are underweight');
// } else if (BMI >= 18.5 && BMI <= 24.9) {
//   console.log('you are normal');
// } else if (BMI >= 25 && BMI <= 29.9) {
//   console.log('you are overweight');
// } else {
//   console.log('you are obese');
// }
BMI < 18.5
  ? console.log('you are underweight')
  : BMI >= 18.5 && BMI <= 24.9
  ? console.log('you are normal')
  : BMI >= 25 && BMI <= 29.9
  ? console.log('you are overweight')
  : console.log('you are obese');
