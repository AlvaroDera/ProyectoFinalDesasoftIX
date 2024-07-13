// document.addEventListener('DOMContentLoaded', function() {
//     const userProfileForm = document.getElementById('userProfileForm');
//     const deleteUserBtn = document.getElementById('deleteUserBtn');
//     const logoutBtn = document.getElementById('logoutBtn');
//     const profileErrorMsg = document.getElementById('profile-error-msg');
//     const loggedInUsername = localStorage.getItem('loggedInUsername');
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     let user = users.find(user => user.username === loggedInUsername);

//     if (user) {
//         document.getElementById('user-name').value = user.name;
//         document.getElementById('user-email').value = user.email;
//         document.getElementById('user-password').value = user.password;
//         document.getElementById('confirm-user-password').value = user.password;
//     }

//     userProfileForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const name = document.getElementById('user-name').value;
//         const email = document.getElementById('user-email').value;
//         const password = document.getElementById('user-password').value;
//         const confirmPassword = document.getElementById('confirm-user-password').value;

//         if (password !== confirmPassword) {
//             profileErrorMsg.textContent = 'Las contraseñas no coinciden';
//             return;
//         }

//         user.name = name;
//         user.email = email;
//         user.password = password;
//         localStorage.setItem('users', JSON.stringify(users));
//         alert('Perfil actualizado correctamente');
//     });

//     deleteUserBtn.addEventListener('click', function() {
//         if (confirm('¿Está seguro de que desea eliminar su cuenta? Esta acción no se puede deshacer.')) {
//             users = users.filter(u => u.username !== loggedInUsername);
//             localStorage.setItem('users', JSON.stringify(users));
//             localStorage.removeItem('loggedInUsername');
//             alert('Cuenta eliminada correctamente');
//             window.location.href = 'index2.html';
//         }
//     });

//     logoutBtn.addEventListener('click', function() {
//         localStorage.removeItem('loggedInUsername');
//         window.location.href = 'index2.html';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const userProfileForm = document.getElementById('userProfileForm');
    const deleteUserBtn = document.getElementById('deleteUserBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const profileErrorMsg = document.getElementById('profile-error-msg');
    const viewNursesBtn = document.getElementById('viewNursesBtn');
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.username === loggedInUsername);

    if (user) {
        document.getElementById('user-name').value = user.name;
        document.getElementById('user-email').value = user.email;
        document.getElementById('user-password').value = user.password;
        document.getElementById('confirm-user-password').value = user.password;
    } else {
        profileErrorMsg.textContent = 'Error: No se pudo cargar el perfil del usuario.';
    }

    userProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        const password = document.getElementById('user-password').value;
        const confirmPassword = document.getElementById('confirm-user-password').value;

        if (password !== confirmPassword) {
            profileErrorMsg.textContent = 'Las contraseñas no coinciden';
            return;
        }

        user.name = name;
        user.email = email;
        user.password = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Perfil actualizado correctamente');
    });

    deleteUserBtn.addEventListener('click', function() {
        if (confirm('¿Está seguro de que desea eliminar su cuenta? Esta acción no se puede deshacer.')) {
            users = users.filter(u => u.username !== loggedInUsername);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.removeItem('loggedInUsername');
            alert('Cuenta eliminada correctamente');
            window.location.href = 'index2.html';
        }
    });

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedInUsername');
        window.location.href = 'index2.html';
    });

    viewNursesBtn.addEventListener('click', function() {
        window.location.href = 'user.html';
    });
});
