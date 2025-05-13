$(document).ready(function () {
    const fields = $("#name, #dob, #email, #number, #password, #cpassword");
    const submitBtn = $("#submit");
    const interactedFields = new Set(); // Track focused fields

    function validateField(field) {
        const id = field.attr("id");
        const value = field.val().trim();
        let message = "";

        if (id === "name" && value === "") {
            message = "Name is required.";
        }

        if (id === "dob" && value === "") {
            message = "Date of birth is required.";
        }

        if (id === "email") {
            if (value === "") message = "Email is required.";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Invalid email.";
        }

        if (id === "number") {
            if (value === "") message = "Phone number is required.";
            else if (!/^\d{10}$/.test(value)) message = "Must be 10 digits.";
        }

        if (id === "password") {
            if (value === "") message = "Password is required.";
            else if (value.length < 6) message = "At least 6 characters.";
        }

        if (id === "cpassword") {
            const passwordVal = $("#password").val();
            if (value === "") message = "Confirm your password.";
            else if (value !== passwordVal) message = "Passwords do not match.";
        }

        const errorId = `#${id}-error`;

        if (message) {
            if ($(errorId).length === 0) {
                field.after(`<span class="error" id="${id}-error">${message}</span>`);
            } else {
                $(errorId).text(message);
            }
            field.css("border-color", "red");
        } else {
            $(errorId).remove();
            field.css("border-color", "green");
        }
    }

    function isAllValid() {
        return [...fields].every(f => {
            const id = f.id;
            const val = $(f).val().trim();

            if (id === "name" && val === "") return false;
            if (id === "dob" && val === "") return false;
            if (id === "email" && (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))) return false;
            if (id === "number" && (!val || !/^\d{10}$/.test(val))) return false;
            if (id === "password" && val.length < 6) return false;
            if (id === "cpassword" && val !== $("#password").val()) return false;

            return true;
        });
    }

    function toggleSubmitButton() {
        if (isAllValid()) {
            submitBtn.prop("disabled", false).css({
                filter: "none",
                cursor: "pointer"
            });
        } else {
            submitBtn.prop("disabled", true).css({
                filter: "blur(2px)",
                cursor: "not-allowed"
            });
        }
    }

    // Track when a field has been focused (clicked into)
    fields.on("focus", function () {
        interactedFields.add(this.id);
    });

    // Validate while typing
    fields.on("input", function () {
        validateField($(this));
        toggleSubmitButton();
    });

    // Validate when field loses focus
    fields.on("blur", function () {
        validateField($(this));
        toggleSubmitButton();
    });

    // Validate on mouse leave only if field was focused before
    fields.on("mouseleave", function () {
        if (interactedFields.has(this.id)) {
            validateField($(this));
            toggleSubmitButton();
        }
    });

    $(".form").on("submit", function (e) {
        e.preventDefault();
        if (isAllValid()) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fill out all fields correctly.");
        }
    });

    toggleSubmitButton();
});
