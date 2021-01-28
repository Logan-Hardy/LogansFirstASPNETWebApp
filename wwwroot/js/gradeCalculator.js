//Add event listener for when user clicks on the submit button
$("#submitButton").click( function () {
    //Call function to calculate grade
    caluclateGrade();
});

function caluclateGrade() {
    //Define grade categories and assign values accordingly from user
    var Name = $("#Name").val();
    var Assignments = $("#Assignments").val();
    var GroupProject = $("#GroupProject").val();
    var Quizzes = $("#Quizzes").val();
    var Exams = $("#Exams").val();
    var Intex = $("#Intex").val();

    //Define and initialize final grade info
    var finalGrade = 0.00;
    var finalLetterGrade = "";
    var gradeOutput = "";


    //Determine final grade percentage
    finalGrade = (Assignments * 0.50) + (GroupProject * 0.10) + (Quizzes * 0.10) + (Exams * 0.20) + (Intex * 0.10);
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
    gradeOutput = (Name + " received a " + finalLetterGrade + " : " + finalGrade + "% in IS 413");
    alert(gradeOutput);
}