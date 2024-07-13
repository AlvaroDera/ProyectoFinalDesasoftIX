 document.addEventListener('DOMContentLoaded', function() {
     const users = JSON.parse(localStorage.getItem('users')) || [];
     const usersTableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
     const logoutBtn = document.getElementById('logoutBtn');

     users.forEach(user => {
         const row = usersTableBody.insertRow();
         const cellUsername = row.insertCell(0);
         const cellActions = row.insertCell(1);
         cellUsername.textContent = user.username;
         cellActions.innerHTML = '<button onclick="deleteUser(\'' + user.username + '\')">Eliminar</button>';
     });

     logoutBtn.addEventListener('click', function() {
         window.location.href = 'index2.html';
     });
 });

 function deleteUser(username) {
     let users = JSON.parse(localStorage.getItem('users')) || [];
     users = users.filter(user => user.username !== username);
     localStorage.setItem('users', JSON.stringify(users));
     window.location.reload();
 }

// document.addEventListener('DOMContentLoaded', function() {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const usersTableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
//     const logoutBtn = document.getElementById('logoutBtn');

//     users.forEach(user => {
//         const row = usersTableBody.insertRow();
//         const cellUsername = row.insertCell(0);
//         const cellRole = row.insertCell(1);
//         const cellActions = row.insertCell(2);
//         cellUsername.textContent = user.username;
//         cellRole.textContent = user.role;
//         cellActions.innerHTML = '<button onclick="deleteUser(\'' + user.username + '\')">Eliminar</button>';
//     });

//     logoutBtn.addEventListener('click', function() {
//         window.location.href = 'index2.html';
//     });
// });

// function deleteUser(username) {
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     users = users.filter(user => user.username !== username);
//     localStorage.setItem('users', JSON.stringify(users));
//     window.location.reload();
// }
