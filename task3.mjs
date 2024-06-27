// [2,3,4,6]=[200,0,400,600]

let input = [2, 3, 4, 6];
let output = input.map((val, ind) => {
  if (val % 2 === 0) {
    return val * 100;
  } else {
    return val * 0;
  }
});
console.log(output);

// make a arrow function that takes a number as input and
// Percentage >=80 return Grade B
// Percentage >=70 return Grade C
// Percentage >=60 return Grade D
// Percentage >=40 return Grade E
// Percentage >=90 return Grade A
// Percentage <40 return Grade F

let grade = (mark) => {
  if (mark >= 90) {
    return "Grade A";
  } else if (mark >= 80) {
    // console.log(`Grade B`);
    return "Grade B";
  } else if (mark >= 70) {
    return "Grade C";
  } else if (mark >= 60) {
    return "Grade D";
  } else if (mark >= 40) {
    return "Grade E";
  } else {
    return "Grade F";
  }
};
let f = grade(71);
console.log(f);