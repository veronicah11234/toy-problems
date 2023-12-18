function calculateGrade() {
  const marksInput = document.getElementById('marksInput');
  const resultBox = document.getElementById('gradeResultBox');

  const marks = parseFloat(marksInput.value);

  if (isNaN(marks) || marks < 0 || marks > 100) {
    resultBox.innerText = 'Invalid input. Please enter a number between 0 and 100.';
  } else {
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
      grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    resultBox.innerText = `The student's grade is: ${grade}`;
  }
}
