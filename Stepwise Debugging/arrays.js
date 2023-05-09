// declare a new array
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join("");

const letterGrade = ["A", "B", "A"];

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
console.log(pointsTotal);
console.log(gpa);

const fruitArray = ["watermelon", "peach", "apple", "tomatoes", "grape"];
const result = fruitArray.filter(fruit => fruit.length > 6);
console.log(result);

const numbers = [12, 34, 21, 54];
const luckNumber = 21;

console.log(numbers.indexOf(21));