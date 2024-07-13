// document.getElementById('registerNurseForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('nurse-username').value;
//     const name = document.getElementById('nurse-name').value;
//     const lastName = document.getElementById('nurse-lastname').value;
//     const id = document.getElementById('nurse-id').value;
//     const dayRate = document.getElementById('nurse-day-rate').value;
//     const eveningRate = document.getElementById('nurse-evening-rate').value;
//     const nightRate = document.getElementById('nurse-night-rate').value;
//     const hourlyRate = document.getElementById('nurse-hourly-rate').value;
//     const contact = document.getElementById('nurse-contact').value;
//     const password = document.getElementById('nurse-password').value;
//     const confirmPassword = document.getElementById('confirm-nurse-password').value;
//     const errorMsg = document.getElementById('register-error-msg');

//     if (password !== confirmPassword) {
//         errorMsg.textContent = 'Las contraseñas no coinciden';
//     } else {
//         let users = JSON.parse(localStorage.getItem('users')) || [];
//         if (users.some(user => user.username === username)) {
//             errorMsg.textContent = 'El nombre de usuario ya está registrado';
//         } else {
//             users.push({
//                 username: username,
//                 name: name,
//                 lastName: lastName,
//                 id: id,
//                 dayRate: dayRate,
//                 eveningRate: eveningRate,
//                 nightRate: nightRate,
//                 hourlyRate: hourlyRate,
//                 contact: contact,
//                 password: password,
//                 role: 'enfermera'
//             });
//             localStorage.setItem('users', JSON.stringify(users));
//             alert('Registro exitoso');
//             window.location.href = 'index2.html';
//         }
//     }
// });

document.getElementById('registerNurseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('nurse-username').value;
    const name = document.getElementById('nurse-name').value;
    const lastName = document.getElementById('nurse-lastname').value;
    const id = document.getElementById('nurse-id').value;
    const dayRate = document.getElementById('nurse-day-rate').value;
    const eveningRate = document.getElementById('nurse-evening-rate').value;
    const nightRate = document.getElementById('nurse-night-rate').value;
    const hourlyRate = document.getElementById('nurse-hourly-rate').value;
    const contact = document.getElementById('nurse-contact').value;
    const password = document.getElementById('nurse-password').value;
    const confirmPassword = document.getElementById('confirm-nurse-password').value;
    const errorMsg = document.getElementById('register-error-msg');

    if (password !== confirmPassword) {
        errorMsg.textContent = 'Las contraseñas no coinciden';
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.username === username)) {
            errorMsg.textContent = 'El nombre de usuario ya está registrado';
        } else {
            users.push({
                username: username,
                firstName: name,
                lastName: lastName,
                personalId: id,
                dayRate: dayRate,
                eveningRate: eveningRate,
                nightRate: nightRate,
                hourlyRate: hourlyRate,
                contactNumber: contact,
                password: password,
                role: 'enfermera'
            });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso');
            window.location.href = 'index2.html';
        }
    }
});
