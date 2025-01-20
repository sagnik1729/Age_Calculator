document.getElementById("calculateBtn").addEventListener("click", function () {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    if (!dob) {
        error.style.display = "none";
        return; // if no date is selected
    }

    const currentDate = new Date();
    const birthDate = new Date(dob);

    // Check if the birthdate is in the future
    if (birthDate > currentDate) {
        alert("The selected date is in the future. Please select a valid birthdate.");
        error.style.display = "block";
        result.style.display = "none";
        return;
    } else {
        error.style.display = "none";
        result.style.display = "block";
    }

    // Calculate the age
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Adjust days
    if (days < 0) {
        months--;
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Display results
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
});
