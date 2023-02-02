(() => {
    getTheme();
})();

function getTheme() {
    window.localStorage.getItem('theme') === 'light'
        ? (document.body.style.background = 'linear-gradient(112deg, white -25%, skyblue -10%, blue 90%)',
            document.getElementById('icon-theme').className = "fa-sharp fa-solid fa-moon fa-2x",
            document.getElementById('modal1').style.background = 'linear-gradient(112deg, white -25%, skyblue -10%, blue 90%)',
            document.getElementById('modal2').style.background = 'linear-gradient(112deg, white -25%, skyblue -10%, blue 90%)'
        )
        : (document.body.style.background = 'linear-gradient(112deg, white -25%, grey -10%, black 90%)',
            document.getElementById('icon-theme').className = "fa-solid fa-sun fa-2x fa-2x",
            document.getElementById('modal1').style.background = 'linear-gradient(112deg, white -25%, grey -10%, black 90%)',
            document.getElementById('modal2').style.background = 'linear-gradient(112deg, white -25%, grey -10%, black 90%)'
        )
}

function changeTheme() {
    window.localStorage.getItem('theme') === 'light'
        ? (window.localStorage.setItem('theme', 'dark'),
            document.body.style.background = 'linear-gradient(112deg, white -25%, grey -10%, black 90%)',
            document.getElementById('icon-theme').className = "fa-solid fa-sun fa-2x fa-2x",
            document.getElementById('modal1').style.background = 'linear-gradient(112deg, white -25%, grey -10%, black 90%)',
            document.getElementById('modal2').style.background = 'linear-gradient(112deg, white -25%, grey -10%, black 90%)'
        )
        : (window.localStorage.setItem('theme', 'light'),
            document.body.style.background = 'linear-gradient(112deg, white -25%, skyblue -10%, blue 90%)',
            document.getElementById('icon-theme').className = "fa-sharp fa-solid fa-moon fa-2x",
            document.getElementById('modal1').style.background = 'linear-gradient(112deg, white -25%, skyblue -10%, blue 90%)',
            document.getElementById('modal2').style.background = 'linear-gradient(112deg, white -25%, skyblue -10%, blue 90%)'
        )
}

document.querySelector('footer').innerHTML = `Copyright © ${new Date().getFullYear()}`;

function mouseMove(id) {
    document.getElementById('technology-name').innerHTML = `- ${id.toUpperCase()} -`;
}

function mouseOut() {
    document.getElementById('technology-name').innerHTML = '';
}

function openModal(id) {
    if (id === '1') document.getElementById('modal1').style.display = "block";
    if (id === '2') document.getElementById('modal2').style.display = "block";
}

function closeModal() {
    document.getElementById('modal1').style.display = "none";
    document.getElementById('modal2').style.display = "none";
}