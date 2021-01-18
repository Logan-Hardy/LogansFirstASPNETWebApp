var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    alert("Assignments: " + document.getElementById("assignments").value + "\n" +
        "Group Project: " + document.getElementById("groupProject").value + "\n" +
        "Quizzes: " + document.getElementById("quizzes").value + "\n" +
        "Exams: " + document.getElementById("exams").value + "\n" +
        "INTEX: " + document.getElementById("intex").value);
})