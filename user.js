// document.addEventListener('DOMContentLoaded', function() {
//     const nursesContainer = document.getElementById('nurses-container');
//     const logoutBtn = document.getElementById('logoutBtn');
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     const nurses = users.filter(user => user.role === 'enfermera');
    
//     if (nurses.length === 0) {
//         nursesContainer.innerHTML = '<p>No hay enfermeras registradas.</p>';
//     } else {
//         nurses.forEach(nurse => {
//             const nurseCard = document.createElement('div');
//             nurseCard.className = 'nurse-card';
//             nurseCard.innerHTML = `
//                 <h3>${nurse.name} ${nurse.lastName}</h3>
//                 <p>ID Personal: ${nurse.username}</p>
//                 <p>Contacto: ${nurse.contact}</p>
//                 <button class="view-more-btn" data-username="${nurse.username}">Ver más</button>
//             `;
//             nursesContainer.appendChild(nurseCard);
//         });

//         document.querySelectorAll('.view-more-btn').forEach(button => {
//             button.addEventListener('click', function() {
//                 const username = this.getAttribute('data-username');
//                 localStorage.setItem('selectedNurse', username);
//                 window.location.href = 'nurse-profile.html';
//             });
//         });
//     }

//     logoutBtn.addEventListener('click', function() {
//         window.location.href = 'index2.html';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const nurseCardsContainer = document.getElementById('nurse-cards-container');
    const viewProfileBtn = document.getElementById('viewProfileBtn');
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Filtrar las enfermeras registradas
    let nurses = users.filter(user => user.role === 'enfermera');

    // Generar tarjetas de enfermeras
    nurses.forEach(nurse => {
        let nurseCard = document.createElement('div');
        nurseCard.classList.add('nurse-card');
        nurseCard.innerHTML = `
            <h3>${nurse.firstName} ${nurse.lastName}</h3>
            <p>ID Personal: ${nurse.personalId}</p>
            <p>Tarifa Diurna: ${nurse.dayRate}</p>
            <p>Tarifa Vespertina: ${nurse.eveningRate}</p>
            <p>Tarifa Nocturna: ${nurse.nightRate}</p>
            <p>Tarifa por Hora: ${nurse.hourlyRate}</p>
            <p>Contacto: ${nurse.contactNumber}</p>
            <button class="viewNurseProfileBtn" data-username="${nurse.username}">Ver Más</button>
        `;
        nurseCardsContainer.appendChild(nurseCard);
    });

    // Agregar event listener a los botones "Ver Más"
    document.querySelectorAll('.viewNurseProfileBtn').forEach(button => {
        button.addEventListener('click', function() {
            const nurseUsername = this.getAttribute('data-username');
            localStorage.setItem('viewNurseUsername', nurseUsername);
            window.location.href = 'nurse-profile.html';
        });
    });

    // Event listener para el botón "Ver mi Perfil"
    viewProfileBtn.addEventListener('click', function() {
        window.location.href = 'user-profile.html';
    });
});
