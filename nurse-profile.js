// document.addEventListener('DOMContentLoaded', function() {
//     const profileContainer = document.getElementById('nurse-profile');
//     const loggedInUsername = localStorage.getItem('loggedInUsername');
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     let nurse = users.find(user => user.username === loggedInUsername && user.role === 'enfermera');

//     if (nurse) {
//         profileContainer.innerHTML = `
//             <div class="input-group">
//                 <label for="nurse-username">Nombre de usuario:</label>
//                 <input type="text" id="nurse-username" value="${nurse.username}" disabled>
//             </div>
//             <div class="input-group">
//                 <label for="nurse-name">Nombre:</label>
//                 <input type="text" id="nurse-name" value="${nurse.firstName}">
//             </div>
//             <div class="input-group">
//                 <label for="nurse-lastname">Apellido:</label>
//                 <input type="text" id="nurse-lastname" value="${nurse.lastName}">
//             </div>
//             <div class="input-group">
//                 <label for="nurse-id">ID Personal:</label>
//                 <input type="text" id="nurse-id" value="${nurse.personalId}">
//             </div>
//             <div class="input-group">
//                 <label for="nurse-day-rate">Tarifa por Turno Diurno:</label>
//                 <input type="number" id="nurse-day-rate" value="${nurse.dayRate}">
//             </div>
//             <div class="input-group">
//                 <label for="nurse-evening-rate">Tarifa por Turno Vespertino:</label>
//                 <input type="number" id="nurse-evening-rate" value="${nurse.eveningRate}">
//             </div>
//             <div class="input-group">
//                 <label for="nurse-night-rate">Tarifa por Turno Nocturno:</label>
//                 <input type="number" id="nurse-night-rate" value="${nurse.nightRate}">
//             </div>
//             <div class="input-group">
//                 <label for="nurse-hourly-rate">Tarifa por Hora:</label>
//                 <input type="number" id="nurse-hourly-rate" value="${nurse.hourlyRate}">
//             </div>
//             <div class="input-group">
//                 <label for="nurse-contact">Número de Contacto:</label>
//                 <input type="tel" id="nurse-contact" value="${nurse.contactNumber}">
//             </div>
//             <button id="saveProfileBtn">Guardar Cambios</button>
//             <button id="deleteAccountBtn">Eliminar Cuenta</button>
//             <button id="logoutBtn">Salir</button>
//         `;

//         // Agregar event listener para guardar los cambios en el perfil
//         document.getElementById('saveProfileBtn').addEventListener('click', function() {
//             nurse.firstName = document.getElementById('nurse-name').value;
//             nurse.lastName = document.getElementById('nurse-lastname').value;
//             nurse.personalId = document.getElementById('nurse-id').value;
//             nurse.dayRate = document.getElementById('nurse-day-rate').value;
//             nurse.eveningRate = document.getElementById('nurse-evening-rate').value;
//             nurse.nightRate = document.getElementById('nurse-night-rate').value;
//             nurse.hourlyRate = document.getElementById('nurse-hourly-rate').value;
//             nurse.contactNumber = document.getElementById('nurse-contact').value;

//             localStorage.setItem('users', JSON.stringify(users));
//             alert('Perfil actualizado correctamente');
//         });

//         // Agregar event listener para eliminar la cuenta
//         document.getElementById('deleteAccountBtn').addEventListener('click', function() {
//             if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
//                 users = users.filter(user => user.username !== loggedInUsername);
//                 localStorage.setItem('users', JSON.stringify(users));
//                 localStorage.removeItem('loggedInUsername');
//                 alert('Cuenta eliminada correctamente');
//                 window.location.href = 'index2.html';
//             }
//         });

//         // Agregar event listener para salir de la cuenta
//         document.getElementById('logoutBtn').addEventListener('click', function() {
//             localStorage.removeItem('loggedInUsername');
//             window.location.href = 'index2.html';
//         });

//     } else {
//         profileContainer.innerHTML = '<p>Error: No se pudo cargar el perfil de la enfermera.</p>';
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.getElementById('nurse-profile');
    const deleteBtn = document.getElementById('deleteAccountBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const viewNurseUsername = localStorage.getItem('viewNurseUsername');
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let nurse = users.find(user => user.username === viewNurseUsername && user.role === 'enfermera');

    if (nurse) {
        profileContainer.innerHTML = `
            <div class="input-group">
                <label for="nurse-username">Nombre de usuario:</label>
                <input type="text" id="nurse-username" value="${nurse.username}" disabled>
            </div>
            <div class="input-group">
                <label for="nurse-name">Nombre:</label>
                <input type="text" id="nurse-name" value="${nurse.firstName}">
            </div>
            <div class="input-group">
                <label for="nurse-lastname">Apellido:</label>
                <input type="text" id="nurse-lastname" value="${nurse.lastName}">
            </div>
            <div class="input-group">
                <label for="nurse-id">ID Personal:</label>
                <input type="text" id="nurse-id" value="${nurse.personalId}">
            </div>
            <div class="input-group">
                <label for="nurse-day-rate">Tarifa por Turno Diurno:</label>
                <input type="number" id="nurse-day-rate" value="${nurse.dayRate}">
            </div>
            <div class="input-group">
                <label for="nurse-evening-rate">Tarifa por Turno Vespertino:</label>
                <input type="number" id="nurse-evening-rate" value="${nurse.eveningRate}">
            </div>
            <div class="input-group">
                <label for="nurse-night-rate">Tarifa por Turno Nocturno:</label>
                <input type="number" id="nurse-night-rate" value="${nurse.nightRate}">
            </div>
            <div class="input-group">
                <label for="nurse-hourly-rate">Tarifa por Hora:</label>
                <input type="number" id="nurse-hourly-rate" value="${nurse.hourlyRate}">
            </div>
            <div class="input-group">
                <label for="nurse-contact">Número de Contacto:</label>
                <input type="tel" id="nurse-contact" value="${nurse.contactNumber}">
            </div>
            <button id="saveProfileBtn">Guardar Cambios</button>
            <button id="deleteAccountBtn">Eliminar Cuenta</button>
            <button id="logoutBtn">Salir</button>
        `;

        document.getElementById('saveProfileBtn').addEventListener('click', function() {
            nurse.firstName = document.getElementById('nurse-name').value;
            nurse.lastName = document.getElementById('nurse-lastname').value;
            nurse.personalId = document.getElementById('nurse-id').value;
            nurse.dayRate = document.getElementById('nurse-day-rate').value;
            nurse.eveningRate = document.getElementById('nurse-evening-rate').value;
            nurse.nightRate = document.getElementById('nurse-night-rate').value;
            nurse.hourlyRate = document.getElementById('nurse-hourly-rate').value;
            nurse.contactNumber = document.getElementById('nurse-contact').value;

            localStorage.setItem('users', JSON.stringify(users));
            alert('Perfil actualizado correctamente');
        });

        deleteBtn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
                users = users.filter(user => user.username !== viewNurseUsername);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.removeItem('viewNurseUsername');
                alert('Cuenta eliminada correctamente');
                window.location.href = 'user.html';
            }
        });

        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('viewNurseUsername');
            window.location.href = 'user.html';
        });

    } else {
        profileContainer.innerHTML = '<p>Error: No se pudo cargar el perfil de la enfermera.</p>';
    }
});
