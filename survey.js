
function resetForm() {
    document.getElementById("surveyForm").reset();
    document.getElementById("errorDiv").style.display = "none";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}

document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate first name
    var firstName = document.getElementById("firstName").value;

    if (firstName.trim() === "") {
        showError("First Name cannot be empty.");
        return;
    }

    // Validate last name
    var lastName = document.getElementById("lastName").value;

    if (lastName.trim() === "") {
        showError("Last Name cannot be empty.");
        return;
    }

    // Check if first name contains numbers
    if (/\d/.test(firstName)) {
        showError("First Name cannot contain numbers.");
        return;
    }

    // Check if last name contains numbers
    if (/\d/.test(lastName)) {
        showError("Last Name cannot contain numbers.");
        return;
    }

    // Validate date of birth
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var today = new Date();

    if (dobDate > today) {
        showError("Please enter a valid Date of Birth.");
        return;
    }

    // Validate mobile number
    var mobile = document.getElementById("mobile").value;

    if (!/^\d{10}$/.test(mobile)) {
        showError("Please enter a 10-digit mobile number.");
        return;
    }
// Validate gender
var selectedGender = document.querySelectorAll('input[name="gender"]:checked');
if (selectedGender.length === 0) {
showError("Please select a gender.");
return;
}
    // Validate profession
    var profession = document.getElementById("profession").value;

    if (profession.length < 5) {
        showError("Please enter a profession with at least 5 characters.");
        return;
    }

    var suggestions = document.getElementById("suggestions").value;

    
    var formData = new FormData(this);
    var popupContent = "<ul>";

    for (var pair of formData.entries()) {
        popupContent += "<li><strong>" + pair[0] + ":</strong> " + pair[1] + "</li>";
    }

    popupContent += "</ul>";
    document.getElementById("popupContent").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
});


if (suggestions.trim() !== "") {
popupContent += "<li><strong>Suggestions:</strong> " + suggestions + "</li>";
}


function showError(message) {
    var errorDiv = document.getElementById("errorDiv");
    errorDiv.innerHTML = message;
    errorDiv.style.display = "block";
}
