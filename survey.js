
        function submitForm() {
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var dob = document.getElementById("dob").value;
            var country = document.getElementById("country").value;
            var gender = document.querySelector('input[name="gender"]:checked');
            var profession = document.getElementById("profession").value;
            var email = document.getElementById("email").value;
            var mobile = document.getElementById("mobile").value;
    
            var isValid = true;
    
            // Reset error messages
            var fields = ["firstName", "lastName", "dob", "country", "gender", "profession", "email", "mobile"];
            fields.forEach(function(field) {
                document.getElementById(field + "Error").textContent = "";
            });
    
            if (!firstName) {
                document.getElementById("firstNameError").textContent = "Please enter your first name.";
                isValid = false;
            }
    
            if (!lastName) {
                document.getElementById("lastNameError").textContent = "Please enter your last name.";
                isValid = false;
            }
    
            if (!dob) {
                document.getElementById("dobError").textContent = "Please enter your date of birth.";
                isValid = false;
            }
    
            if (!country) {
                document.getElementById("countryError").textContent = "Please select your country.";
                isValid = false;
            }
    
            if (!gender) {
                document.getElementById("genderError").textContent = "Please select your gender.";
                isValid = false;
            }
    
            if (!profession) {
                document.getElementById("professionError").textContent = "Please enter your profession.";
                isValid = false;
            }
    
            if (!email) {
                document.getElementById("emailError").textContent = "Please enter your email address.";
                isValid = false;
            }
    
            if (!mobile) {
                document.getElementById("mobileError").textContent = "Please enter your mobile number.";
                isValid = false;
            }
    
            if (isValid) {
                document.getElementById("errorAlert").classList.add("d-none");
    
                var genderValue = gender.value;
    
                var popupContent = `
                    <p>First Name: ${firstName}</p>
                    <p>Last Name: ${lastName}</p>
                    <p>Date of Birth: ${dob}</p>
                    <p>Country: ${country}</p>
                    <p>Gender: ${genderValue}</p>
                    <p>Profession: ${profession}</p>
                    <p>Email: ${email}</p>
                    <p>Mobile Number: ${mobile}</p>
                `;
                var popup = window.open("", "Survey Data", "width=600,height=400");
        popup.document.write(popupContent);
        popup.focus();

        document.getElementById("surveyForm").reset();
            } else {
                document.getElementById("errorAlert").classList.remove("d-none");
            }
        }
    
        function resetForm() {
            var fields = ["firstName", "lastName", "dob", "country", "male", "female", "profession", "email", "mobile"];
            fields.forEach(function(field) {
                document.getElementById(field).value = "";
            });
    
            var errorFields = ["firstNameError", "lastNameError", "dobError", "countryError", "genderError", "professionError", "emailError", "mobileError"];
            errorFields.forEach(function(field) {
                document.getElementById(field).textContent = "";
            });
    
            document.getElementById("errorAlert").classList.add("d-none");
        }
 
    