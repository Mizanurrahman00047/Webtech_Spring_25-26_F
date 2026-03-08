
function validateForm() {
            var fields = ['firstName', 'lastName', 'email', 'mobile', 'message'];
            for (var i = 0; i < fields.length; i++) {
                var value = document.getElementById(fields[i]).value.trim();
                if (value === '') {
                    alert("Field Value need to be filled up");
                    return false;
                }
            }
            console.log("First Name: " + document.getElementById('firstName').value);
            console.log("Last Name: " + document.getElementById('lastName').value);
            console.log("Email: " + document.getElementById('email').value);
            console.log("Mobile Number: " + document.getElementById('mobile').value);
            console.log("Message: " + document.getElementById('message').value);
            return false; // Prevent form from submitting to a server
        }