function convertToCGPA() {
    let percentage = document.getElementById("percentage").value;

    if (percentage === "" || percentage < 0 || percentage > 100) {
        document.getElementById("result").innerText = "Please enter a valid percentage (0 - 100)";
        return;
    }

    let cgpa = (percentage / 9.5).toFixed(2);

    document.getElementById("result").innerText = "Your CGPA is: " + cgpa;
}
