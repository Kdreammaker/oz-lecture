const maxInput = 100;
let input = prompt("점수를 입력하세요 (0~100):");
let score = Number(input);
var grade;

score += 5; 

if (score >= 100) {
    grade = "S";
} else if (score >= 90 && score < 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else {
    grade = "F";
}

const status = score >= 60 ? "Pass" : "Fail";

let message;
switch (grade) {
    case "S":
        message = "Super!!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    case "F":
        message = "Please try harder!";
        break;
}

console.log("Final Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);
console.log("Message: " + message);