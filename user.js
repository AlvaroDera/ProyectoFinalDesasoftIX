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
//                 <h3>${nurse.name}</h3>
//                 <p>ID Personal: ${nurse.username}</p>
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
//         window.location.href = 'index.html';
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const nursesContainer = document.getElementById('nurses-container');
    const logoutBtn = document.getElementById('logoutBtn');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const nurses = users.filter(user => user.role === 'enfermera');
    
    if (nurses.length === 0) {
        nursesContainer.innerHTML = '<p>No hay enfermeras registradas.</p>';
    } else {
        nurses.forEach(nurse => {
            const nurseCard = document.createElement('div');
            nurseCard.className = 'nurse-card';
            nurseCard.innerHTML = `
                <h3>${nurse.name} ${nurse.lastName}</h3>
                <p>ID Personal: ${nurse.username}</p>
                <p>Contacto: ${nurse.contact}</p>
                <button class="view-more-btn" data-username="${nurse.username}">Ver más</button>
            `;
            nursesContainer.appendChild(nurseCard);
        });

        document.querySelectorAll('.view-more-btn').forEach(button => {
            button.addEventListener('click', function() {
                const username = this.getAttribute('data-username');
                localStorage.setItem('selectedNurse', username);
                window.location.href = 'nurse-profile.html';
            });
        });
    }

    logoutBtn.addEventListener('click', function() {
        window.location.href = 'index2.html';
    });
});
