let userEmail = '';

function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    userEmail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;

    if (!username) {
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('usernameError').style.display = 'none';
    }

    if (!userEmail) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (!password) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (valid) {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('dniVerificationForm').style.display = 'block';
    }
}

function verifyDNI(event) {
    event.preventDefault();
    const dniFront = document.getElementById('dniFront').files.length;
    const dniBack = document.getElementById('dniBack').files.length;
    let valid = true;

    if (dniFront === 0) {
        document.getElementById('dniFrontError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('dniFrontError').style.display = 'none';
    }

    if (dniBack === 0) {
        document.getElementById('dniBackError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('dniBackError').style.display = 'none';
    }

    if (valid) {
        document.getElementById('dniVerificationForm').style.display = 'none';
        document.getElementById('welcomeMessage').innerText = 'Bienvenido ' + document.getElementById('username').value;
        document.getElementById('welcomeSection').style.display = 'block';
    }
}

function logout() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('reportForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showReportForm() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('reportForm').style.display = 'block';
}

function submitReport(event) {
    event.preventDefault();
    const motive = document.getElementById('motive').value;
    const description = document.getElementById('description').value;
    const evidence = document.getElementById('evidence').files.length;

    let valid = true;

    if (!motive) {
        document.getElementById('motiveError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('motiveError').style.display = 'none';
    }

    if (motive === 'Otro' && !description) {
        document.getElementById('descriptionError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('descriptionError').style.display = 'none';
    }

    if (evidence === 0) {
        document.getElementById('evidenceError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('evidenceError').style.display = 'none';
    }

    if (valid) {
        document.getElementById('reportForm').style.display = 'none';
        document.getElementById('confirmationEmail').innerText = userEmail;
        document.getElementById('confirmationMessage').style.display = 'block';
    }
}
