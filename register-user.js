// document.getElementById('registerUserForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const fullName = document.getElementById('full-name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('user-password').value;
//     const confirmPassword = document.getElementById('confirm-user-password').value;
//     const errorMsg = document.getElementById('register-error-msg');

//     if (password !== confirmPassword) {
//         errorMsg.textContent = 'Las contraseñas no coinciden';
//     } else {
//         let users = JSON.parse(localStorage.getItem('users')) || [];
//         if (users.some(user => user.username === email)) {
//             errorMsg.textContent = 'El usuario ya existe';
//         } else {
//             users.push({ username: email, fullName: fullName, password: password, role: 'usuario' });
//             localStorage.setItem('users', JSON.stringify(users));
//             alert('Registro exitoso');
//             window.location.href = 'index2.html';
//         }
//     }
// });

document.getElementById('registerUserForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const confirmPassword = document.getElementById('confirm-user-password').value;
    const errorMsg = document.getElementById('register-error-msg');

    if (password !== confirmPassword) {
        errorMsg.textContent = 'Las contraseñas no coinciden';
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.username === email)) {
            errorMsg.textContent = 'El correo electrónico ya está registrado como nombre de usuario';
        } else {
            users.push({
                username: email,
                name: name,
                email: email,
                password: password,
                role: 'usuario'
            });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso');
            window.location.href = 'index2.html';
        }
    }
});
