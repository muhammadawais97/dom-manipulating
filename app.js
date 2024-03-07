function calculateResult() {
    // Get marks from input fields
    var subject1Marks = parseInt(document.getElementById('subject1').value);
    var subject2Marks = parseInt(document.getElementById('subject2').value);
    var subject3Marks = parseInt(document.getElementById('subject3').value);
    var subject4Marks = parseInt(document.getElementById('subject4').value);
    
    // Calculate total marks
    var totalMarks = subject1Marks + subject2Marks + subject3Marks + subject4Marks;
    
    // Calculate percentage
    var percentage = (totalMarks / 400) * 100;
    
    // Determine grade
    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'Fail';
    }
    
    // Display result
    document.getElementById('totalMarks').innerHTML = "Total Marks: " + totalMarks;
    document.getElementById('percentage').innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById('grade').innerHTML = "Grade: " + grade;
}