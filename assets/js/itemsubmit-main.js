const mask = document.getElementById('mask');
const adminLoginMask = document.getElementById('admin-login-mask');
const adminLoginLink = document.getElementById('admin-login-link');

adminLoginMask.addEventListener('click', function (event) {
    event.preventDefault();
    adminLoginMask.style.display = 'none';
    adminLoginLink.style.display = 'inline';
    mask.style.display = 'none';
});

// adminLoginLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     adminLoginLink.style.display = 'none';
//     mask.style.display = 'block';
// });