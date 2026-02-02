function convertToCGPA() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let dept = document.getElementById("dept").value.trim();
    let percentage = document.getElementById("percentage").value.trim();
    let result = document.getElementById("result");

    if (name === "" || roll === "" || dept === "" || percentage === "") {
        result.innerHTML = "Please fill all the fields!";
        return;
    }

    if (percentage < 0 || percentage > 100) {
        result.innerHTML = "Enter valid percentage between 0 and 100.";
        return;
    }

    let cgpa = (percentage / 9.5).toFixed(2);

    result.innerHTML =
        "Name: " + name + "<br>" +
        "Roll No: " + roll + "<br>" +
        "Department: " + dept + "<br>" +
        "Percentage: " + percentage + "%<br>" +
        "CGPA: " + cgpa;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("result").innerHTML = "";
}
