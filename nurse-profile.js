// document.addEventListener('DOMContentLoaded', function() {
//     const nurseProfileContainer = document.getElementById('nurse-profile');
//     const backBtn = document.getElementById('backBtn');
//     const selectedNurseUsername = localStorage.getItem('selectedNurse');
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const nurse = users.find(user => user.username === selectedNurseUsername);

//     if (nurse) {
//         nurseProfileContainer.innerHTML = `
//             <h3>${nurse.name}</h3>
//             <p>ID Personal: ${nurse.username}</p>
//             <p>Otros detalles aquí...</p>
//         `;
//     } else {
//         nurseProfileContainer.innerHTML = '<p>Enfermera no encontrada.</p>';
//     }

//     backBtn.addEventListener('click', function() {
//         window.location.href = 'user.html';
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const nurseProfileContainer = document.getElementById('nurse-profile');
//     const backBtn = document.getElementById('backBtn');
//     const selectedNurseUsername = localStorage.getItem('selectedNurse');
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const nurse = users.find(user => user.username === selectedNurseUsername);

//     if (nurse) {
//         nurseProfileContainer.innerHTML = `
//             <h3>${nurse.name} ${nurse.lastName}</h3>
//             <p>ID Personal: ${nurse.username}</p>
//             <p>Tarifa por Turno Diurno: ${nurse.dayRate}</p>
//             <p>Tarifa por Turno Vespertino: ${nurse.eveningRate}</p>
//             <p>Tarifa por Turno Nocturno: ${nurse.nightRate}</p>
//             <p>Tarifa por Hora: ${nurse.hourlyRate}</p>
//             <p>Número de Contacto: ${nurse.contact}</p>
//         `;
//     } else {
//         nurseProfileContainer.innerHTML = '<p>Enfermera no encontrada.</p>';
//     }

//     backBtn.addEventListener('click', function() {
//         window.location.href = 'user.html';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.getElementById('nurse-profile');
    const backBtn = document.getElementById('backBtn');
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let nurse = users.find(user => user.username === loggedInUsername && user.role === 'enfermera');

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
    } else {
        profileContainer.innerHTML = '<p>Error: No se pudo cargar el perfil de la enfermera.</p>';
    }

    backBtn.addEventListener('click', function() {
        window.location.href = 'index2.html';
    });
});
