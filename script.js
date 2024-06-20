function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;

    if (!username) {
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('usernameError').style.display = 'none';
    }

    if (!email) {
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
        document.getElementById('welcomeMessage').innerText = 'Bienvenido ' + username;
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('welcomeSection').style.display = 'block';
    }
}

function logout() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function searchEntity() {
    const entity = document.getElementById('entitySelect').value;
    document.getElementById('entityResult').innerText = 'Entidad seleccionada: ' + entity;
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
        alert('Denuncia enviada con éxito.');
        document.getElementById('reportForm').style.display = 'none';
        document.getElementById('welcomeSection').style.display = 'block';
    }
}
