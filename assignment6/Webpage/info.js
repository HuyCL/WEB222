
window.onload = function() {
    var form = document.querySelector('form');
    form.addEventListener("submit", event => {
        
        var result = true;
        var fname = form.elements["fname"].value;
        var lname = form.elements["lname"].value;
        var age = form.elements["age"].value;
        var user = form.user.value;
        var pwd = form.pwd.value;
        var confirm = form.confirm.value;

        clearError();   // Clear previous error message(s)

        if (!validateName(fname)) {
            errorMessage("* First name must start with an uppercase and only alphabet allowed");
            result = false;
        }

        if (!validateName(lname)) {
            errorMessage("* Last name must start with an uppercase and only alphabet allowed");
            result = false;
        }

        if (!validateUsername(user)) {
            errorMessage("* Username must start with a letter and at least 6 characters long");
            result = false;
        }

        if (!validateAge(age)) {
            errorMessage("* Age must be between 18 and 60");
            result = false;
        }

        if (!validatePassword(pwd)) {
            errorMessage("* Password must be 6 characters long, start with a character, have at least 1 digit and 1 uppercase");
            result = false;
        }

        if (!matchPassword(pwd, confirm)) {
            errorMessage("* Password does not match");
            result = false;
        }

        if (result === false) {      // Makes side panel that display errors visible to user
            document.getElementById('sidepanel').style.visibility = 'visible';
        } else {
            alert('Success');
        }

        form.reset();
        event.preventDefault();

        return result;
    });
};

function validateName(name) {       // Checks if first letter is uppercase & everything is in alphabet
    var regex = /^[A-Z][a-z]+$/;
    return regex.test(name);
}

function validateUsername(user) {
    var regex = /[A-Za-z]/;
    if (user[0].match(regex) === null || user.length < 6) {
        return false;
    }

    return true;
}

function validatePassword(pwd) {
    var firstChar = /[A-Za-z]/;
    var numberCheck = /\d/;
    if (pwd[0].match(firstChar) === null || pwd.length < 6 || pwd.match(numberCheck) === null) {
        return false;
    } else {
        return true;
    }
    
}


function matchPassword (pwd, confirm) {     // Compare passwords
    if (pwd === confirm) {
        return true;
    } else {
        return false;
    }
}

function validateAge(age) {     // Checks if age is in range

    if (age >= 18 && age <= 60) {
        return true;
    }

    return false;
}

function errorMessage(error) {      // Display error to the user
    var sidePanel = document.getElementById('sidepanel');
    var br = document.createElement('br');
    var er = document.createTextNode(error);
    
    sidePanel.appendChild(er);
    sidePanel.appendChild(br);
}

function clearError() {
    var sidepanel = document.getElementById('sidepanel');
     while (sidepanel.firstChild) {
        sidepanel.removeChild(sidepanel.firstChild);
     }
}