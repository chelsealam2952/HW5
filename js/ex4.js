//Declare studentList Array
const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];


const Classnameresult = studentList.map(student => {
  return {
    firstname: student.firstName,
    lastname: student.lastName,
    scores: student.scores,
    avgScore: student.scores.push(student.scores.reduce((tot, x) => tot + x, 0) / student.scores.length)
  }
})
console.log(Classnameresult);


for(let i = 0; i < studentList.length; i++) {
  for(let j = 0; j < studentList[j].scores.length; j++){
    studentList[i].scores[j] +=5;
  }
}
console.log(studentList);

studentList.forEach(student => {
  console.log(`Full name (last, first): ${student.lastName} , ${student.firstName}`);
  console.log(`Updated scores are: ${student.scores}`);
})


