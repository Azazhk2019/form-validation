const form = document.querySelector("form");
const nm = document.querySelector("#name");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = nm.value.trim();
    const pswd = password.value.trim();
    const userEmail = email.value.trim();
    const selectedGender = document.querySelector("input[name='gender']:checked"); // ✅ check inside listener

    // Clear previous result
    result.textContent = "";

    // Validation
    if (!username || !pswd || !userEmail) {
        result.textContent = "Please fill in all fields";
        return;
    }

    if (pswd.length < 6) {
        result.textContent = "Password should be at least 6 characters";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        result.textContent = "Please enter a valid email";
        return;
    }

    // ✅ Radio button validation
    if (!selectedGender) {
        result.textContent = "Please select your gender";
        return;
    }

    // If all is good
    alert(`Welcome ${username}, Gender: ${selectedGender.value}`);
    form.reset();
});