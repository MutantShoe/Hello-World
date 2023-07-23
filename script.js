function calculateRateWorkDone() {
    const mass = parseFloat(document.getElementById("mass").value);
    const acceleration = parseFloat(document.getElementById("acceleration").value);
    const distance = parseFloat(document.getElementById("distance").value);

    if (isNaN(mass) || isNaN(acceleration) || isNaN(distance)) {
        alert("Please enter valid numbers for Mass, Acceleration, and Distance.");
        return;
    }

    const workDone = mass * acceleration * distance;
    document.getElementById("result").innerHTML = "Work Done: " + workDone.toFixed(2) + " Joules";
}