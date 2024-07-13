// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMsg = document.getElementById('error-msg');

//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     const adminUsername = 'admin';
//     const adminPassword = '0000';

//     // Verificar si las credenciales corresponden al administrador
//     if (username === adminUsername && password === adminPassword) {
//         window.location.href = 'admin2.html';
//         return;
//     }

//     // Verificar si las credenciales corresponden a un usuario registrado
//      const user = users.find(user => user.username === username && user.password === password);

//     //  if (user) {
//     //      if (user.role === 'usuario') {
//     //          window.location.href = 'user.html';
//     //      } else if (user.role === 'enfermera') {
//     //          alert('Login exitoso');
//     //      }
//     //  } else {
//     //      errorMsg.textContent = 'Usuario o contraseña incorrectos';
//     //  }

//     if (user) {
//         localStorage.setItem('loggedInUsername', username);
//         if (user.role === 'usuario') {
//             window.location.href = 'user-profile.html';
//         } else if (user.role === 'enfermera') {
//             window.location.href = 'user.html'; // o alguna otra página si aplica
//         }
//     } else {
//         errorMsg.textContent = 'Usuario o contraseña incorrectos';
//     }
// });

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const adminUsername = 'admin';
    const adminPassword = '0000';

    // Verificar si las credenciales corresponden al administrador
    if (username === adminUsername && password === adminPassword) {
        window.location.href = 'admin2.html';
        return;
    }

    // Verificar si las credenciales corresponden a un usuario registrado
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUsername', username);
        if (user.role === 'usuario') {
            window.location.href = 'user-profile.html';
        } else if (user.role === 'enfermera') {
            window.location.href = 'nurse-profile.html'; // Asegurarse de que la redirección es correcta
        }
    } else {
        errorMsg.textContent = 'Usuario o contraseña incorrectos';
    }
});
