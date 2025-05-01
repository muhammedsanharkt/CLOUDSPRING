document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const policyYes = document.getElementById("policy").checked;
        const policyNo = document.getElementById("no").checked;
        const resume = document.getElementById("rasume").value;
        const about = document.getElementById("yourself").value.trim();

        // Validation logic
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (age === "") {
            alert("Please enter your age.");
            return;
        } else if (parseInt(age) < 18) {
            alert("You must be 18 or older.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password === "" || password.length < 8 || !/[A-Z]/.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter.");
            return;
        }
        

        if (dob === "") {
            alert("Please select your date of birth.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (!policyYes && !policyNo) {
            alert("Please confirm your agreement or disagreement to the policy.");
            return;
        }


        const resumeFile = resumeInput.files[0];
        
        if (!resume) {
            alert("Please upload your resume.");
            return;
        }
        
        if (resumeFile.size < 2 * 1024 * 1024) { // 2MB = 2 * 1024 * 1024 bytes
            alert("Resume file must be at least 2MB in size.");
            return;
        }
        

        if (about === "") {
            alert("Please write something about yourself.");
            return;
        }

        // All validations passed
        alert("Form submitted successfully!");

    });
});
