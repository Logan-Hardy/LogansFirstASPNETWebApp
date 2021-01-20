//Add event listener for when user clicks on the submit button
var submit = document.getElementById("submitButton");
submit.addEventListener("click", function () {
    //Call function to calculate grade
    caluclateGrade ();
})

function caluclateGrade() {
    //Define grade categories and assign values accordingly from user
    var assignments = document.getElementById("assignments").value;
    var groupProject = document.getElementById("groupProject").value;
    var quizzes = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    //Define and initialize final grade info
    var finalGrade = 0.00;
    var finalLetterGrade = "";
    var gradeOutput = "";

    //If category was left blank, default to ZERO (0)
    if (assignments == "") {
        assignments = 0;
    }
    if (groupProject == "") {
        groupProject = 0;
    }
    if (quizzes == "") {
        quizzes = 0;
    }
    if (exams == "") {
        exams = 0;
    }
    if (intex == "") {
        intex = 0;
    }

    //Determine final grade percentage
    finalGrade = (assignments * 0.50) + (groupProject * 0.10) + (quizzes * 0.10) + (exams * 0.20) + (intex * 0.10);
    finalGrade = finalGrade.toFixed(2)

    //Determine letter grade based off final grade percentage
    if (finalGrade >= 94) {
        finalLetterGrade = "A";
    }
    else if (finalGrade >= 90) {
        finalLetterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        finalLetterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        finalLetterGrade = "B";
    }
    else if (finalGrade >= 80) {
        finalLetterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        finalLetterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        finalLetterGrade = "C";
    }
    else if (finalGrade >= 70) {
        finalLetterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        finalLetterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        finalLetterGrade = "D";
    }
    else if (finalGrade >= 60) {
        finalLetterGrade = "D-";
    }
    else {
        finalLetterGrade = "E";
    }

    //Display final grade
    gradeOutput = (finalLetterGrade + " : " + finalGrade + "%");
    document.getElementById("outputGrade").innerHTML = gradeOutput;
}