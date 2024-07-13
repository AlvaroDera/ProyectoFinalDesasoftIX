// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('new-username').value;
//     const password = document.getElementById('new-password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;
//     const errorMsg = document.getElementById('register-error-msg');

//     if (password !== confirmPassword) {
//         errorMsg.textContent = 'Las contraseñas no coinciden';
//     } else {
//         let users = JSON.parse(localStorage.getItem('users')) || [];
//         if (users.some(user => user.username === username)) {
//             errorMsg.textContent = 'El usuario ya existe';
//         } else {
//             users.push({ username: username, password: password });
//             localStorage.setItem('users', JSON.stringify(users));
//             alert('Registro exitoso');
//             window.location.href = 'index2.html';
//         }
//     }
// });

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const role = document.getElementById('role').value;
    const errorMsg = document.getElementById('register-error-msg');

    if (password !== confirmPassword) {
        errorMsg.textContent = 'Las contraseñas no coinciden';
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.username === username)) {
            errorMsg.textContent = 'El usuario ya existe';
        } else {
            users.push({ username: username, password: password, role: role });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso');
            window.location.href = 'index2.html';
        }
    }
});
