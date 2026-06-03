let username = document.getElementById('username');
let password = document.getElementById('password');
const login = document.getElementById('login');

function onLogin() {
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)

    if (username.value == "admin" && password.value == "admin123") {
        alert('SELAMAT DATANG BRO')
        window.location.href ="https://tv10.lk21official.cc/"
    } else {
        alert('LO SALAH BRO')
        localStorage.clear();
        localStorage.reload();
    }

}
